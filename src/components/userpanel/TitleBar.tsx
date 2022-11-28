import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DecorVertical from "./DecorVertical";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";

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
    /* top right */ 108% calc(100% - 4px),
    /* bottom right */ calc(100% - 4px) 100%,
    /* bottom left */ 0 calc(100% - 4px) /* bottom left */
  );

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
      /* top right */ 100% calc(100% - 4px),
      /* bottom right */ calc(100% - 4px) 100%,

      /* bottom left */ 0 calc(100% - 4px) /* bottom left */
    );
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
  }
`;

const StampRewardsText = styled.p`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-left: 4rem;
`;

const CloseTab = styled.button`
  color: white;
  font-size: 2.5rem;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  background-image: linear-gradient(to bottom, #fdbe7c, #e55f69);
  cursor: pointer;
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

const TitleBar = () => {
  const dispatch = useDispatch();
  return (
    <StampRewardsTab>
      <Stripes />
      <DecorVertical width={3} />
      <StampRewardsText> STAMP REWARDS</StampRewardsText>
      <CloseTabShadow>
        <CloseTab onClick={() => dispatch(setShowingRewards(false))}>
          x
        </CloseTab>
      </CloseTabShadow>
    </StampRewardsTab>
  );
};

export default TitleBar;
