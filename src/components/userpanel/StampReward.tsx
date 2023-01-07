import { ReactNode, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { selectAnimationEnd } from "../../state/uiSlice";

import check from "../../assets/placeholders/check.png";
import star from "../../assets/placeholders/star.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import soundHoverTab from "../../assets/userpanel/Market_SFX_-_TAB_HOVER.wav";
import soundClickTab from "../../assets/userpanel/Market_SFX_-_TAB_PRESS.wav";

export interface StampRewardType {
  image?: string;
  name: string;
  collected: boolean;
  required: number;
}

const StampOuter = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const StampShadow = styled.div`
  background-color: #393939;
  padding: 4px 4px 12px 4px;
  clip-path: var(--notched);
`;

const StampInnerBorder = styled.div`
  background-color: ${(props: StampButtonProps) =>
    props.collected ? "#74d0ff" : "#CECECE"};
  padding: 3px;
  clip-path: var(--notched);
`;

const StampOverlay = styled.div`
  position: relative;
  display: inline-block;
  clip-path: var(--notched);

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    clip-path: var(--notched);
    background: ${(props: StampButtonProps) =>
      props.collected
        ? "linear-gradient(rgba(0, 0, 0, 0) 0%, #282626)"
        : "linear-gradient(rgba(0, 0, 0, 0) 0%, #282626)"};
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
    transition: opacity 0.25s ease-out;
    opacity: ${(props: StampButtonProps) => (props.active ? "0" : "1")};
  }

  /* &:hover::after {
    opacity: 0;
  } */
`;

const RewardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 250px;
  max-height: 250px;
`;

const Reward = styled.img`
  margin-bottom: auto;
  width: auto;
  display: block;
  clip-path: var(--notched);
`;

const StampLink = styled.div`
  width: 2.75rem;
  height: 1.75rem;
  background-color: ${(props: StampButtonProps) =>
    props.collected ? "#74d0ff" : "#CECECE"};
  border-top: 0.25rem solid white;
  border-bottom: 0.25rem solid white;
  box-shadow: 0px 0px 0px 4px #393939, 0px 4px 0px 0px #393939;
  position: relative;
  left: 0;
  top: 115px;
  display: inline-block;
  z-index: 0;
`;

interface StampBorderProps {
  collected: boolean;
}

const RewardName = styled.p`
  font-size: 1.75rem;
  color: white;
  position: relative;
  bottom: 6rem;
  color: ${(props: StampButtonProps) => (props.active ? "black" : "white")};
  transition: color 0.3s linear;
  cursor: url(${cursorhover}), auto;
  pointer-events: none;
`;

const RewardRequirementContainer = styled.div`
  display: flex;
`;

const RewardRequirement = styled.button`
  cursor: url(${cursorhover}), auto;
  position: relative;
  display: inherit;
  width: fit-content;
  height: 5.5rem;
  border-radius: 0.5rem;
  border: 3px solid #393939;
  border-bottom: 12px solid #393939;
  margin: auto;
  display: flex;
  justify-content: center;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0.65rem 1.5rem 0.25rem 1.5rem;
  position: absolute;
  font-size: 2.75rem;
  font-weight: 300;
  background-color: ${(props: StampButtonProps) =>
    props.collected ? "#74d0ff" : "#CECECE"};
`;

const Star = styled.img`
  display: inline-block;
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 2px;
  left: 2px;
`;

const Check = styled.img`
  display: inline-block;
  width: 25px;
  height: 25px;
`;

interface StampButtonProps {
  collected: boolean;
  active?: boolean;
}

interface Props {
  stampReward: StampRewardType;
}

const StampReward = ({ stampReward }: Props) => {
  const [hoverActive, setHoverActive] = useState(false);
  const animationEnd = useSelector(selectAnimationEnd);

  const audioHoverTab = useRef<HTMLAudioElement>(null);
  const audioClickTab = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverTab.current && animationEnd) {
      audioHoverTab.current.currentTime = 0;
      audioHoverTab.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickTab.current) {
      audioClickTab.current.currentTime = 0;
      audioClickTab.current.play();
    }
  };

  return (
    <>
      {stampReward.required !== 3 ? (
        <StampLink collected={stampReward.collected} />
      ) : (
        ""
      )}
      <StampOuter>
        <audio ref={audioHoverTab} src={soundHoverTab}>
          <track kind="captions" />
        </audio>
        <audio ref={audioClickTab} src={soundClickTab}>
          <track kind="captions" />
        </audio>
        <StampShadow>
          <StampInnerBorder collected={stampReward.collected}>
            <StampOverlay
              active={hoverActive}
              onMouseEnter={() => {
                setHoverActive(true);
                playHoverAudio();
              }}
              onMouseLeave={() => setHoverActive(false)}
              onClick={() => playClickAudio()}
              collected={stampReward.collected}
            >
              <RewardContainer>
                <Reward src={stampReward.image} alt={stampReward.name} />
              </RewardContainer>
            </StampOverlay>
          </StampInnerBorder>
        </StampShadow>

        <RewardName
          onMouseEnter={() => setHoverActive(true)}
          onMouseLeave={() => setHoverActive(false)}
          active={hoverActive}
          collected={stampReward.collected}
        >
          {stampReward.name}
        </RewardName>
        {stampReward.collected ? (
          <RewardRequirement
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
            collected={stampReward.collected}
          >
            <Check src={check} alt="check" />
          </RewardRequirement>
        ) : (
          <RewardRequirementContainer>
            <RewardRequirement
              onMouseEnter={() => setHoverActive(true)}
              onMouseLeave={() => setHoverActive(false)}
              onClick={() => playClickAudio()}
              collected={stampReward.collected}
            >
              {stampReward.required}
              <Star src={star} alt="star" />
            </RewardRequirement>
          </RewardRequirementContainer>
        )}
      </StampOuter>
    </>
  );
};

export default StampReward;
