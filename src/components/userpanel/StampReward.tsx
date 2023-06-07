import { useState } from "react";

import styled from "styled-components";

import HoverAudio from "./HoverAudio";

import check from "../../assets/placeholders/check.png";
import star from "../../assets/svgs/aikostarcrystal.svg";

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
  padding: 0.4vh 0.4vh 1.2vh 0.4vh;
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
  /* min-height: 250px; */
  /* max-height: 250px; */
`;

const Reward = styled.img`
  margin-bottom: auto;
  display: block;
  height: 25.8vh;
  clip-path: var(--notched);
`;

const StampLink = styled.div`
  width: 2.55vh;
  height: 1.7vh;
  background-color: ${(props: StampButtonProps) =>
    props.collected ? "#74d0ff" : "#CECECE"};
  border-top: 0.25vh solid white;
  border-bottom: 0.25vh solid white;
  box-shadow: 0px 0px 0px 4px #393939, 0px 4px 0px 0px #393939;
  position: relative;
  left: 0;
  top: 12vh;
  display: inline-block;
  z-index: 0;
`;

const RewardName = styled.p`
  font-size: 1.625vh;
  color: white;
  position: relative;
  bottom: 5.525vh;
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
  height: 5.2vh;
  border-radius: 0.5vh;
  border: 3px solid #393939;
  border-bottom: 12px solid #393939;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0.65vh 1.5vh 0.25vh 1.5vh;
  position: absolute;
  font-size: 2.55vh;
  font-weight: 300;
  background-color: ${(props: StampButtonProps) =>
    props.collected ? "#74d0ff" : "#CECECE"};
`;

const Star = styled.img`
  display: inline-block;
  width: 2.6vh;
  height: 2.6vh;
  position: relative;
  bottom: 2px;
  left: 2px;
`;

const Check = styled.img`
  display: inline-block;
  width: 2.6vh;
  height: 2.6vh;
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

  return (
    <>
      {stampReward.required !== 3 ? (
        <StampLink collected={stampReward.collected} />
      ) : (
        ""
      )}
      <StampOuter>
        <StampShadow>
          <StampInnerBorder collected={stampReward.collected}>
            <HoverAudio hoverSound={soundHoverTab} clickSound={soundClickTab}>
              <StampOverlay
                active={hoverActive}
                onMouseEnter={() => {
                  setHoverActive(true);
                }}
                onMouseLeave={() => setHoverActive(false)}
                collected={stampReward.collected}
              >
                <RewardContainer>
                  <Reward src={stampReward.image} alt={stampReward.name} />
                </RewardContainer>
              </StampOverlay>
            </HoverAudio>
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
            <HoverAudio hoverSound={soundHoverTab} clickSound={soundClickTab}>
              <RewardRequirement
                onMouseEnter={() => setHoverActive(true)}
                onMouseLeave={() => setHoverActive(false)}
                collected={stampReward.collected}
              >
                {stampReward.required}
                <Star src={star} alt="star" />
              </RewardRequirement>
            </HoverAudio>
          </RewardRequirementContainer>
        )}
      </StampOuter>
    </>
  );
};

export default StampReward;
