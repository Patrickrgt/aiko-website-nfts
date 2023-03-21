import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";

import DecorVertical from "./DecorVertical";
import {
  selectShowingRewards,
  setShowingRewards,
  selectMuteAudio,
} from "../../state/uiSlice";

import soundHoverSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_SMALL.wav";
import soundClickSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_DISABLED.wav";

import cursorhover from "../../assets/userpanel/cursorhover.png";

const slideForward = keyframes`
   0% { height: 10%; width: 10%; visibility: 0 }
   100% { height: 100%; width: 100%; visibility: 1}
`;

const slideBack = keyframes`
   0% { height: 100%; width: 100%; visibility: 1 }
   100% { height: 10%; width: 10%; visibility: 0}
`;

const appear = keyframes`
   0% { opacity: 0; visibility: 0; font-size: 1rem; }
   75% { opacity: 0; visibility: 0; font-size: 3rem; }
   100% {  opacity: 1; visibility: 1}
`;

const disappear = keyframes`
   50% { opacity: 1; visibility: 1 }
   100% {  opacity: 0; visibility: 0}
`;

const StampRewardsTab = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  padding: 2rem 1.5rem 2rem 1.5rem;
  background-color: #90a9e1;
  justify-content: space-between;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  clip-path: var(--notched-md-tp);

  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${slideForward} .5s cubic-bezier(1,0,0,1)
        `
      : css`
          ${slideBack} .7s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
`;

const Stripes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #658ac7;
  clip-path: polygon(
    0% 0px,
    /* top left */ 38% 0%,
    /* top right */ 108% calc(100%),
    /* bottom right */ calc(100%) 100%,
    /* bottom left */ 0 calc(100%) /* bottom left */
  );

  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${slideForward} 1.25s cubic-bezier(1,0,0,1)
        `
      : css`
          ${slideBack} .7s ease-out forwards
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -3;
    background-color: #f0a460;
    clip-path: polygon(
      0% 0px,
      /* top left */ 33.33% 0%,
      /* top right */ 100% calc(100%),
      /* bottom right */ calc(100%) 100%,

      /* bottom left */ 0 calc(100%) /* bottom left */
    );
    animation: ${(props: StampRewardProps) =>
      props.show
        ? css`
            ${slideForward} 1.5s cubic-bezier(1,0,0,1)
          `
        : css`
            ${slideBack} 1s ease-out forwards
          `};
    animation-play-state: ${(props: StampRewardProps) =>
      props.show ? "running" : "paused"};
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    background-color: #ffd36a;
    clip-path: polygon(
      0% 0px,
      /* top left */ 25% 0%,
      /* top right */ 90% calc(100% - 4px),
      /* bottom right */ calc(100% - 4px) 100%,

      /* bottom left */ 0 calc(100% - 4px) /* bottom left */
    );
    animation: ${(props: StampRewardProps) =>
      props.show
        ? css`
            ${slideForward} 1.75s cubic-bezier(1,0,0,1)
          `
        : css`
            ${slideBack} 1.2s ease-out forwards
          `};
    animation-play-state: ${(props: StampRewardProps) =>
      props.show ? "running" : "paused"};
  }
`;

const DecorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StampRewardsText = styled.p`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-left: 0.5rem;

  animation: ${(props: StampRewardProps) =>
    props.show
      ? css`
          ${appear} 1.7s ease-in
        `
      : css`
          ${disappear} 1.7s ease-out
        `};
  animation-play-state: ${(props: StampRewardProps) =>
    props.show ? "running" : "paused"};
`;

const CloseTab = styled.button`
  color: white;
  font-size: 2.5rem;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  background-image: linear-gradient(to bottom, #fdbe7c, #e55f69);
  cursor: url(${cursorhover}), auto;
  width: 4rem;
  clip-path: var(--notched-xsm);
  border: none;
  font-family: arial, serif;
  padding-bottom: 0.25rem;
`;

const CloseTabShadow = styled.div`
  padding: 0.25rem;
  background-color: #393939;
  clip-path: var(--notched-xsm);
`;

interface StampRewardProps {
  show: boolean;
}

interface Props {
  title: string;
  x: boolean;
}

const TitleBar = ({ x, title }: Props) => {
  const showing = useSelector(selectShowingRewards);
  const dispatch = useDispatch();

  const mute = useSelector(selectMuteAudio);

  const audioHoverSmall = useRef<HTMLAudioElement>(null);
  const audioClickSmall = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverSmall.current && mute) {
      audioHoverSmall.current.currentTime = 0;
      audioHoverSmall.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickSmall.current && mute) {
      audioClickSmall.current.currentTime = 0;
      audioClickSmall.current.play();
    }
  };

  return (
    <StampRewardsTab show={showing}>
      <audio ref={audioHoverSmall} src={soundHoverSmall}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickSmall} src={soundClickSmall}>
        <track kind="captions" />
      </audio>
      <Stripes show={showing} />
      <DecorContainer>
        <DecorVertical width={3} />
        <StampRewardsText show={showing}>{title}</StampRewardsText>
      </DecorContainer>
      {!x && (
        <CloseTabShadow>
          <CloseTab
            onMouseEnter={() => playHoverAudio()}
            onClick={() => {
              dispatch(setShowingRewards(false));
              playClickAudio();
            }}
          >
            x
          </CloseTab>
        </CloseTabShadow>
      )}
    </StampRewardsTab>
  );
};

export default TitleBar;
