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

import computer from "../../assets/userpanel/aikocomputer.png";
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

const StyledPopup = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
  opacity: 1;
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
  opacity: 1;
  cursor: url(${cursorhover}), auto;
  background-color: white;
`;

const StampFullContainer = styled.div`
  max-width: 100%;
  margin: auto;
`;

const MainContainer = styled.div`
  transition: all ease 0.25s;
  opacity: 1;
  margin-left: auto;
  margin-right: auto;
`;

const StampShadowBorder = styled.div`
  transition: all ease 0.25s;
  width: fit-content;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  background-color: #393939;
  clip-path: var(--notched-md);
`;

const StampBorder = styled.div`
  position: relative;
`;

const StampContainer = styled.div`
  background-color: #c6d0eb;
  padding: 1rem 1rem;
  display: flex;
  transition: all 0.5s ease-in-out;
  max-width: 1050px;
  height: 100%;
  clip-path: var(--notched-md-bt);
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
  opacity: 1;
  z-index: -1;
`;

const WarningRedeemRow = styled.div`
  display: flex;
`;

const RewardContainer = styled.div`
  background-color: #edeef5;
  clip-path: var(--notched);
`;

const StampRewardContainer = styled.div`
  padding: 1.5rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
  height: 100%;
  justify-content: center;
`;

const Computer = styled.img`
  width: 300px;
  max-width: 300px;
`;

const ComputerText = styled.h2`
  max-width: 300px;
  width: 300px;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
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

  return (
    // Refractor background blur because using visiblity which affects performance...
    <StyledPopup>
      <Background />
      <StampFullContainer>
        <MainContainer>
          <StampShadowBorder>
            <StampOverlay />

            <StampBorder>
              {/* Title Bar with close button */}
              <TitleBar x={false} title="error_msg.exe" />
              {/* Contains everything below Stamp Rewards Title Bar */}

              <StampContainer>
                <RewardContainer>
                  <StampRewardContainer>
                    <Computer src={computer} />
                    <ComputerText>
                      A:\Please use your computer to access this page
                    </ComputerText>

                    {/* Maps the Stamps and names from the object above  */}
                  </StampRewardContainer>
                </RewardContainer>
                <WarningRedeemRow>
                  {/* Warning Container, separate from Redeem Container */}
                  {/* Redeem Container, contains Redeem Button */}
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
