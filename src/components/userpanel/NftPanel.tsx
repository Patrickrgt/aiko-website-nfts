import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingNfts,
  setShowingNfts,
  selectGlobalAccount,
  setHasAikos,
  selectMuteAudio,
} from "../../state/uiSlice";

import { getAikoHoldings } from "../../contracts/views";

import Nfts from "./Nfts";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import soundHoverMedium from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_LARGE.wav";
import soundClickMedium from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_LARGE.wav";

const slideForward = keyframes`
   0% { height: 5%; opacity: 1; width: 5%; clip-path: var(--notched-md);}
   35% { height: 88%; width: 15%;}
   45% { height: 88%; width: 15%;}
   80% { width: 100%; opacity: 1; background-color: #c6d0eb;}
   100% {  height: 88%; width: 100%; opacity: 1; background-color: #c6d0eb; clip-path: var(--notched-md);}
`;

const slideForwardPfp = keyframes`
   0% { transform: scale(1);}
   35% { transform: scale(.75, .75);}
   60% { transform: scale(.75, .75);}
   100% {  transform: scale(1); }
`;

const slideBack = keyframes`
   0% { height: 100%;  opacity: 1 }
   100% { height: 1px; opacity: 0}
`;

const appear = keyframes`
  0% {  opacity: 0 }
  80% {  opacity: 0 }
   100% {  opacity: 1}
`;

const disappear = keyframes`
   50% { opacity: 1; visibility: 1 }
   100% {  opacity: 0; visibility: 0}
`;

const apparent = keyframes`
   0% {  background-color: #393939;  }
   75% { background-color: #393939; }
   100% {  background-color: rgba(0,0,0,0);}
`;

const backdrop = keyframes`
   0% {  backdrop-filter: blur(8px); opacity: 0  }
   100% {  opacity: 1;}
`;

const StyledPopup = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
  opacity: ${(props: Props) => (props.show ? 1 : 0)};
  visibility: ${(props: Props) => (props.show ? "" : "hidden")};
  transition: all ease 0.25s;
`;

const Background = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity 0.3s;
  opacity: ${(props: Props) => (props.show ? 1 : 0)};
  cursor: url(${cursorhover}), auto;
  backdrop-filter: blur(4px);
  animation: ${(props: Props) =>
    props.show
      ? css`
          ${backdrop} 0.6s ease-in-out forwards
        `
      : css`
          ${apparent} 0.6s ease-out forwards
        `};
  animation-play-state: ${(props: Props) =>
    props.show ? "running" : "paused"};
`;

const AikoFullContainer = styled.div`
  max-width: 100%;
  margin: auto;
`;

const MainContainer = styled.div`
  transition: all ease 0.25s;
  transform: scale(${(props: Props) => (props.show ? 1 : 0)});
  opacity: ${(props: Props) => (props.show ? 1 : 0)};
  margin-left: auto;
  margin-right: auto;
`;

const StampBorder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  animation: ${(props: NftProps) =>
    props.show
      ? css`
          ${appear} 0.8s cubic-bezier(.35,.01,.19,.83)
        `
      : css`
          ${disappear} 1s ease-out forwards
        `};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};
`;

const StampContainer = styled.div`
  background-color: #c6d0eb;
  padding: 2rem 2rem;
  display: flex;
  font-family: video, serif;
  clip-path: var(--notched-md);
  transition: all 0.5s ease-in-out;
  max-width: 110vh;
  height: 100%;
  animation: ${(props: NftProps) =>
    props.play
      ? css`
          ${slideForwardPfp} .6s cubic-bezier(.75,-0.25,.25,1.25) forwards
        `
      : "none"};
`;

const StampOverlay = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  clip-path: var(--notched);
  background-color: #c6d0eb;
  opacity: 0;
  z-index: -1;
  animation: ${(props: NftProps) =>
    props.show
      ? css`
          ${slideForward} .6s cubic-bezier(1,0,0,1)
        `
      : css`
          ${slideBack} 1.2s ease-out forwards
        `};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};
  animation-delay: 0.15s;
  &.slideIn {
    animation: ${(props: NftProps) =>
      props.show
        ? css`
            ${slideForward} .4s cubic-bezier(1,0,0,1)
          `
        : css`
            ${slideBack} 1.2s ease-out forwards
          `};
    animation-play-state: ${(props: NftProps) =>
      props.show ? "running" : "paused"};
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-delay: 1s;
  }
`;

const RewardContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5rem;
  margin: 0 2rem;
  background-color: #edeef5;
  clip-path: var(--notched-md);
  position: relative;
`;

const StampRewardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  height: 100%;
  justify-content: center;
  animation: ${(props: NftProps) =>
    props.show
      ? css`
          ${appear} 0.5s ease-in
        `
      : css`
          ${disappear} 1s ease-out
        `};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};
`;

const PaginationLeft = styled.button`
  z-index: 3;
  flex-wrap: nowrap;
  color: ${(props: NftProps) => (props.active ? "#a9afb8" : "#ffd362")};
  font-size: 6rem;
  clip-path: var(--notched-r-md);
  cursor: url(${cursorhover}), auto;
  transform: rotate(180deg);
  background-color: ${(props: NftProps) =>
    props.active ? "#a9afb8" : "#ffd362;"};
  width: 50px;
`;

const PaginationRight = styled.button`
  z-index: 3;
  flex-wrap: nowrap;
  color: ${(props: NftProps) => (props.active ? "#a9afb8" : "#ffd362")};
  font-size: 6rem;
  clip-path: var(--notched-r-md);
  cursor: url(${cursorhover}), auto;
  background-color: ${(props: NftProps) =>
    props.active ? "#a9afb8" : "#ffd362;"};
  width: 50px;
`;

const PaginationPage = styled.h1`
  margin-top: 1.15vh;
  font-size: 2.1vh;
  text-shadow: -3px -3px 0 #000, 0 -3px 0 #000, 3px -3px 0 #000, 3px 0 0 #000,
    3px 3px 0 #000, 0 3px 0 #000, -3px 3px 0 #000, -3px 0 0 #000;
  color: white;
  position: relative;
  z-index: 100;
`;

interface NftProps {
  show?: boolean;
  active?: boolean;
  play?: boolean;
}

interface Props {
  show?: boolean;
}

const StampRewards = () => {
  const [aikoList, setAikoList] = useState([""]);
  const [currList, setCurrList] = useState([""]);
  const [playAnimation, setPlayAnimation] = useState(false);

  const account = useSelector(selectGlobalAccount);
  const mute = useSelector(selectMuteAudio);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const audioHoverMedium = useRef<HTMLAudioElement>(null);
  const audioClickMedium = useRef<HTMLAudioElement>(null);

  useMemo(() => {
    if (account !== "") {
      fetchNFTs();
    }
  }, [account]);

  useEffect(() => {
    setCurrList(aikoList.slice(startIndex, endIndex));
  }, [currentPage, aikoList]);

  const handleAnimationClick = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 800);
  };

  async function fetchNFTs() {
    try {
      const aikoList = await getAikoHoldings(account);
      if (
        Array.isArray(aikoList) &&
        aikoList.every((item) => typeof item === "string") &&
        aikoList.length > 0
      ) {
        setAikoList(aikoList);
        dispatch(setHasAikos(true));
      }
    } catch (error) {
      return;
    }
  }

  const playHoverAudio = () => {
    if (audioHoverMedium.current && showing === true && mute) {
      audioHoverMedium.current.currentTime = 0;
      audioHoverMedium.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickMedium.current && mute) {
      audioClickMedium.current.currentTime = 0;
      audioClickMedium.current.play();
    }
  };

  const showing = useSelector(selectShowingNfts);
  const dispatch = useDispatch();

  // const stamps = useBalanceOf(account);

  const pageLength = Math.ceil(aikoList.length / itemsPerPage);

  return (
    // Refractor background blur because using visiblity which affects performance...
    <StyledPopup show={showing}>
      <audio ref={audioHoverMedium} src={soundHoverMedium}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickMedium} src={soundClickMedium}>
        <track kind="captions" />
      </audio>
      <Background
        show={showing}
        onClick={() => dispatch(setShowingNfts(false))}
      />
      <AikoFullContainer>
        <MainContainer show={showing}>
          <StampOverlay show={showing} play={playAnimation} />

          <StampBorder show={showing}>
            {/* Title Bar with close button */}
            {/* Contains everything below Stamp Rewards Title Bar */}

            <StampContainer play={playAnimation} show={showing}>
              <PaginationLeft
                onMouseEnter={() => {
                  playHoverAudio();
                }}
                onClick={() => {
                  if (!playAnimation) {
                    playClickAudio();
                    setCurrentPage(currentPage - 1);
                    handleAnimationClick();
                  }
                }}
                disabled={currentPage === 1}
                active={currentPage === 1}
              />
              <RewardContainer>
                <StampRewardContainer show={showing}>
                  {currList.map((aiko, id) => (
                    <Nfts key={id} play={playAnimation} aiko={aiko} />
                  ))}
                </StampRewardContainer>
              </RewardContainer>

              <PaginationRight
                onMouseEnter={() => {
                  playHoverAudio();
                }}
                onClick={() => {
                  if (!playAnimation) {
                    playClickAudio();
                    setCurrentPage(currentPage + 1);
                    handleAnimationClick();
                  }
                }}
                disabled={endIndex >= aikoList.length}
                active={endIndex >= aikoList.length}
              />
            </StampContainer>
            <PaginationPage>
              {currentPage} / {pageLength}
            </PaginationPage>
          </StampBorder>
        </MainContainer>
      </AikoFullContainer>
    </StyledPopup>
  );
};

export default StampRewards;
