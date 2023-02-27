import {
  ReactNode,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingNfts,
  setShowingNfts,
  setGlobalNft,
  selectGlobalNft,
  selectGlobalAccount,
  setHasAikos,
} from "../../state/uiSlice";

import { useBalanceOf, getAikoHoldings } from "../../contracts/views";

import Nfts from "./Nfts";

import honorary from "../../assets/userpanel/honorary.png";
import necklace from "../../assets/userpanel/necklace.png";
import pin from "../../assets/userpanel/pin.png";
import print from "../../assets/userpanel/print.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

const slideForward = keyframes`
   0% { height: 0%; opacity: 1; width: 15%; clip-path: var(--notched-md);}
   15% { height: 100%; }
   90% { width: 100%; opacity: 1; background-color: #c6d0eb;}
   100% { width: 100%; opacity: 0; background-color: #c6d0eb; clip-path: var(--notched-md);}
`;

const slideForwardPfp = keyframes`
   0% { height: 100%; width: 100%;}
   15% { height: 5%; width: 5%;}
   100% {  height: 100%;   width: 100%;}
`;

const slideBack = keyframes`
   0% { height: 100%;  opacity: 1 }
   100% { height: 1px; opacity: 0}
`;

const appear = keyframes`
  0% {  opacity: 0 }
   80% { opacity: 0}
   85% { opacity: 1}
   90% { opacity: 0}
   100% {  opacity: 1}
`;

const disappear = keyframes`
   50% { opacity: 1; visibility: 1 }
   100% {  opacity: 0; visibility: 0}
`;

const transparent = keyframes`
   0% {  background-color: rgba(0,0,0,0); }
   90% { background-color: rgba(0,0,0,0); }
   100% {  background-color: #393939;}
`;

const apparent = keyframes`
   0% {  background-color: #393939;  }
   75% { background-color: #393939; }
   100% {  background-color: rgba(0,0,0,0);}
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
          ${appear} 2s cubic-bezier(.35,.01,.19,.83)
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
  max-width: 1050px;
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
  /* transition: opacity 0.25s ease-out; */
  opacity: 0;
  z-index: -1;

  animation: ${(props: NftProps) =>
    props.show
      ? css`
          ${slideForward} 1.2s cubic-bezier(1,0,0,1)
        `
      : css`
          ${slideBack} 1.2s ease-out forwards
        `};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};

  animation-delay: 0.25s;

  &.slideIn {
    animation: ${(props: NftProps) =>
      props.show
        ? css`
            ${slideForward} 1.2s cubic-bezier(1,0,0,1)
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

const WarningRedeemRow = styled.div`
  display: flex;
`;

const RewardContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5rem;
  margin: 0 2rem;
  background-color: #edeef5;
  clip-path: var(--notched-md);
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
          ${appear} 2.2s ease-in
        `
      : css`
          ${disappear} 1s ease-out
        `};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};
`;

const AikoShadow = styled.div`
  padding: 0.5rem 0.25rem 1rem 0.25rem;
  background-color: #363636;
  clip-path: var(--notched-md);
  margin: 0.5rem;
  position: relative;
`;

const AikoBorder = styled.div`
  background-color: ${(props: NftProps) => (props.active ? "#ffffff;" : "")};
  padding: 0.5rem 0.25rem 1rem 0.25rem;
  clip-path: var(--notched-md);
`;

const Aiko = styled.img`
  max-width: 125px;
  max-height: 125px;
  position: relative;
  clip-path: var(--notched-md);

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 10px solid red;
  }
`;

const PaginationLeft = styled.button`
  flex-wrap: nowrap;
  color: ${(props: NftProps) => (props.active ? "#a9afb8" : "#ffd362")};
  font-size: 6rem;
  clip-path: var(--notched-r-md);
  cursor: url(${cursorhover}), auto;
  transform: rotate(180deg);
  background-color: ${(props: NftProps) =>
    props.active ? "#a9afb8" : "#ffd362;"};
`;

const PaginationRight = styled.button`
  flex-wrap: nowrap;
  color: ${(props: NftProps) => (props.active ? "#a9afb8" : "#ffd362")};
  font-size: 6rem;
  clip-path: var(--notched-r-md);
  cursor: url(${cursorhover}), auto;
  background-color: ${(props: NftProps) =>
    props.active ? "#a9afb8" : "#ffd362;"};
`;

const PaginationPage = styled.h1`
  margin-top: 1rem;
  font-size: 2.25rem;
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

const StampRewards = ({ show }: Props) => {
  const [aikoList, setAikoList] = useState([""]);
  const [currList, setCurrList] = useState([""]);
  const [active, setActive] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const account = useSelector(selectGlobalAccount);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleAnimationClick = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 800);
  };

  async function fetchNFTs() {
    try {
      const aikoList = await getAikoHoldings();
      if (
        Array.isArray(aikoList) &&
        aikoList.every((item) => typeof item === "string") &&
        aikoList.length > 0
      ) {
        setAikoList(aikoList);
        dispatch(setHasAikos(true));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useMemo(() => {
    if (account !== undefined) {
      fetchNFTs();
    }
  }, [account]);

  useEffect(() => {
    setCurrList(aikoList.slice(startIndex, endIndex));
  }, [currentPage, aikoList]);

  const showing = useSelector(selectShowingNfts);
  const dispatch = useDispatch();

  const [stampsHeld, setStampsHeld] = useState(0);
  const stamps = useBalanceOf();

  const pageLength = Math.ceil(aikoList.length / itemsPerPage);

  return (
    // Refractor background blur because using visiblity which affects performance...
    <StyledPopup show={showing}>
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
                onClick={() => {
                  if (!playAnimation) {
                    setCurrentPage(currentPage - 1);
                    handleAnimationClick();
                  }
                }}
                disabled={currentPage === 1}
                active={currentPage === 1}
              >
                ▶
              </PaginationLeft>
              <RewardContainer>
                <StampRewardContainer show={showing}>
                  {currList.map((aiko, id) => (
                    <Nfts aiko={aiko} />
                  ))}
                </StampRewardContainer>
              </RewardContainer>
              <PaginationRight
                onClick={() => {
                  if (!playAnimation) {
                    setCurrentPage(currentPage + 1);
                    handleAnimationClick();
                  }
                }}
                disabled={endIndex >= aikoList.length}
                active={endIndex >= aikoList.length}
              >
                ▶
              </PaginationRight>
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
