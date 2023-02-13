import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingNfts,
  setShowingNfts,
  setGlobalNft,
  selectGlobalNft,
} from "../../state/uiSlice";

import { useBalanceOf, getAikoHoldings } from "../../contracts/views";

import Nfts from "./Nfts";

import honorary from "../../assets/userpanel/honorary.png";
import necklace from "../../assets/userpanel/necklace.png";
import pin from "../../assets/userpanel/pin.png";
import print from "../../assets/userpanel/print.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

const slideForward = keyframes`
   0% { height: 15%;  opacity: 1; width: 15%; }
   15% { width: 100%; }
   90% { height: 90%; opacity: 1; background-color: #2c2c2c;}
   100% { height: 100%; opacity: 0; background-color: #1f1f1f;}
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
  overflow-y: hidden;
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
`;

const StampContainer = styled.div`
  background-color: #c6d0eb;
  padding: 2rem;
  font-family: video, serif;
  clip-path: var(--notched-md);
  max-width: 910px;
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

const StampOverlay = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  clip-path: var(--notched);
  background-color: #282626;
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
`;

const WarningRedeemRow = styled.div`
  display: flex;
`;

const RewardContainer = styled.div`
  padding: 0.5rem;
  background-color: #edeef5;
  clip-path: var(--notched-md);
`;

const StampRewardContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-wrap: wrap;
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

const Pagination = styled.button`
  background-color: black;
  color: white;
  font-size: 6rem;
`;

interface NftProps {
  show?: boolean;
  active?: boolean;
}

interface Props {
  show?: boolean;
}

const StampRewards = ({ show }: Props) => {
  const aikos = getAikoHoldings();
  const [aikoList, setAikoList] = useState([""]);
  const [currList, setCurrList] = useState([""]);
  const [active, setActive] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (aikos !== undefined) {
      console.log("ah");
      aikos.then((res) => {
        if (
          Array.isArray(res) &&
          res.every((item) => typeof item === "string")
        ) {
          setAikoList(res);
          setGlobalNft(aikoList[0]);
          console.log(aikoList);
        }
      });
    }
  }, [aikos]);

  useEffect(() => {
    setCurrList(aikoList.slice(startIndex, endIndex));
  }, [aikoList]);

  const showing = useSelector(selectShowingNfts);
  const dispatch = useDispatch();

  const [stampsHeld, setStampsHeld] = useState(0);
  const stamps = useBalanceOf();

  return (
    // Refractor background blur because using visiblity which affects performance...
    <StyledPopup show={showing}>
      <Background
        show={showing}
        onClick={() => dispatch(setShowingNfts(false))}
      />
      <AikoFullContainer>
        <MainContainer show={showing}>
          <StampOverlay show={showing} />

          <StampBorder>
            {/* Title Bar with close button */}
            {/* Contains everything below Stamp Rewards Title Bar */}

            <StampContainer show={showing}>
              <RewardContainer>
                <StampRewardContainer show={showing}>
                  {currList.map((aiko, id) => (
                    <Nfts aiko={aiko} />
                  ))}
                </StampRewardContainer>
              </RewardContainer>
            </StampContainer>
            <Pagination
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ◀
            </Pagination>
            <Pagination
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= aikoList.length}
            >
              ◀
            </Pagination>
          </StampBorder>
        </MainContainer>
      </AikoFullContainer>
    </StyledPopup>
  );
};

export default StampRewards;
