import { ReactNode, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingRewards,
  selectGlobalAccount,
  setShowingRewards,
  setAnimationEnd,
  selectStampsHeld,
  selectMuteAudio,
  setMuteAudio,
} from "../../state/uiSlice";

import { useBalanceOf } from "../../contracts/views";

import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";
import DecorVertical from "./DecorVertical";
import StampReward, { StampRewardType } from "./StampReward";
import TitleBar from "./TitleBar";
import StampRedeem from "./StampRedeem";
import StampWarning from "./StampWarning";

import honorary from "../../assets/userpanel/honorary.png";
import necklace from "../../assets/userpanel/necklace.png";
import pin from "../../assets/userpanel/pin.png";
import print from "../../assets/userpanel/print.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

// Takes image (str) in the future change to fetching from assets folder
// name (str) - name of reward
// collected (bool) - if yes changes to check and blue borders on reward and blue span link/connector
// required (number/int) - affects the number of stars required on the reward
// linked (bool) - really only for the last reward so that the span does not show
const stampRewards: StampRewardType[] = [
  {
    image: print,
    name: "A3 Season Print",
    collected: false,
    required: 3,
  },
  {
    image: pin,
    name: "Inochi no Ki Pin",
    collected: false,
    required: 6,
  },
  {
    image: necklace,
    name: "Season Necklace",
    collected: false,
    required: 9,
  },
  {
    image: honorary,
    name: "Honorary Aiko",
    collected: false,
    required: 12,
  },
];

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
  0% {  opacity: 0;}
   80% { opacity: 0;}
   85% { opacity: 1;}
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
  backdrop-filter: blur(4px);
  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${backdrop} 0.6s ease-in-out forwards
        `
      : css`
          ${apparent} 0.6s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
`;

const StampFullContainer = styled.div`
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

const StampShadowBorder = styled.div`
  transition: all ease 0.25s;
  transform: scale(${(props: Props) => (props.show ? 1 : 0)});
  width: fit-content;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  background-color: #393939;
  clip-path: var(--notched-md);

  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${transparent} 1.2s cubic-bezier(1,0,1,-0.07)
        `
      : css`
          ${apparent} 1.2s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
`;

const StampBorder = styled.div`
  position: relative;
`;

const StampContainer = styled.div`
  background-color: #cfd2da;
  padding: 2rem 2rem 0 2rem;
  font-family: video, serif;
  clip-path: var(--notched-md-bt);

  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${appear} 2s cubic-bezier(.35,.01,.19,.83)
        `
      : css`
          ${disappear} 1s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
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
  opacity: 0;
  z-index: -1;
  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${slideForward} 1.2s cubic-bezier(1,0,0,1)
        `
      : css`
          ${slideBack} 1.2s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
  animation-delay: 0.25s;
`;

const WarningRedeemRow = styled.div`
  display: flex;
`;

const RewardContainer = styled.div`
  background-color: #edeef5;
  clip-path: var(--notched);
`;

const StampRewardContainer = styled.div`
  padding: 3rem 3rem;
  margin-bottom: 2rem;
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: center;
  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${appear} 2.2s ease-in
        `
      : css`
          ${disappear} 1s ease-out
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
`;

interface StampRewardProps {
  show: boolean;
}

interface Props {
  show?: boolean;
}

const StampRewards = ({ show }: Props) => {
  const showing = useSelector(selectShowingRewards);
  const account = useSelector(selectGlobalAccount);
  const stamps = useSelector(selectStampsHeld);

  const dispatch = useDispatch();

  const [rewards, setRewards] = useState(stampRewards);

  const rewardsObj = stampRewards;

  useEffect(() => {
    for (let i = 0; i < Object.keys(rewardsObj).length; i++) {
      if (stamps >= rewardsObj[i].required) {
        rewardsObj[i].collected = true;
      }
    }
  }, [stamps]);

  return (
    // Refractor background blur because using visiblity which affects performance...
    <StyledPopup show={showing}>
      <Background
        show={showing}
        onClick={() => dispatch(setShowingRewards(false))}
      />
      <StampFullContainer>
        <MainContainer show={showing}>
          <StampShadowBorder
            show={showing}
            onAnimationStart={() => {
              dispatch(setAnimationEnd(false));
            }}
            onAnimationEnd={() => {
              dispatch(setAnimationEnd(true));
            }}
          >
            <StampOverlay show={showing} />

            <StampBorder>
              {/* Title Bar with close button */}
              <TitleBar x={false} title="TEST" />
              {/* Contains everything below Stamp Rewards Title Bar */}

              <StampContainer show={showing}>
                <RewardContainer>
                  <StampRewardContainer show={showing}>
                    {/* Maps the Stamps and names from the object above  */}
                    {stampRewards.map(
                      (stampReward: StampRewardType, index: number) => (
                        <StampReward
                          key={index.toString()}
                          stampReward={stampReward}
                        />
                      )
                    )}
                  </StampRewardContainer>
                </RewardContainer>
                <WarningRedeemRow>
                  {/* Warning Container, separate from Redeem Container */}
                  <StampWarning />
                  {/* Redeem Container, contains Redeem Button */}
                  <StampRedeem />
                </WarningRedeemRow>
              </StampContainer>
            </StampBorder>
          </StampShadowBorder>
        </MainContainer>
      </StampFullContainer>
    </StyledPopup>
  );
};

export default StampRewards;
