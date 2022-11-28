import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";

import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";
import DecorVertical from "./DecorVertical";
import StampReward, { StampRewardType } from "./StampReward";
import TitleBar from "./TitleBar";
import StampRedeem from "./StampRedeem";
import StampWarning from "./StampWarning";

// Takes image (str) in the future change to fetching from assets folder
// name (str) - name of reward
// collected (bool) - if yes changes to check and blue borders on reward and blue span link/connector
// required (number/int) - affects the number of stars required on the reward
// linked (bool) - really only for the last reward so that the span does not show
const stampRewards: StampRewardType[] = [
  {
    image: "https://via.placeholder.com/175x245",
    name: "A3 Season Print",
    collected: true,
    required: 3,
  },
  {
    image: "https://via.placeholder.com/175x245",
    name: "Inochi no Ki Pin",
    collected: true,
    required: 6,
  },
  {
    image: "https://via.placeholder.com/175x245",
    name: "Season Necklace",
    collected: false,
    required: 9,
  },
  {
    image: "https://via.placeholder.com/175x245",
    name: "Honorary Aiko",
    collected: false,
    required: 12,
  },
];

const MainContainer = styled.div`
  transition: all ease 0.25s;
  opacity: ${(props: Props) => (props.show ? "1" : "0")};
  transform: scale(${(props: Props) => (props.show ? 1 : 0)});
  visibility: ${(props: Props) => (props.show ? "" : "hidden")};

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  max-width: 48.88%;
`;

const StampShadowBorder = styled.div`
  transition: all ease 0.25s;
  transform: scale(${(props: Props) => (props.show ? 1 : 0)});
  position: relative;
  width: fit-content;
  margin: auto;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  background-color: #393939;
  clip-path: var(--notched-md);
`;

const StampBorder = styled.div`
  position: relative;
`;

const StampContainer = styled.div`
  background-color: #cfd2da;
  padding: 2rem 2rem 0 2rem;
  font-family: video, serif;
  clip-path: var(--notched-md-bt);
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
  justify-content: center;
`;

interface StampRewardProps {
  show: boolean;
}

interface Props {
  show?: boolean;
}

const StampRewards = ({ show }: Props) => {
  const showing = useSelector(selectShowingRewards);
  console.log(showing);
  return (
    // Still need to create background with blur and onclick it will close
    // Main Container with notched borders
    <MainContainer show={showing}>
      <StampShadowBorder show={showing}>
        <StampBorder>
          {/* Title Bar with close button */}
          <TitleBar />
          {/* Contains everything below Stamp Rewards Title Bar */}
          <StampContainer>
            <RewardContainer>
              <StampRewardContainer>
                {/* Maps the Stamps and names from the object above  */}
                {stampRewards.map((stampReward: StampRewardType) => (
                  <StampReward
                    key={stampReward.name}
                    stampReward={stampReward}
                  />
                ))}
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
  );
};

export default StampRewards;
