import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";

import holder from "../../assets/userpanel/holder.png";
import explorer from "../../assets/userpanel/explorer.png";
import creator from "../../assets/userpanel/creator.png";
import supporter from "../../assets/userpanel/supporter.png";

import JumboStamp, { StampType } from "./JumboStamp";
import ButtonBlue from "./ButtonBlue";

const stamp: StampType[] = [
  {
    image: holder,
    name: "Holder",
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
  },
  {
    image: explorer,
    name: "Explorer",
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
  },
  {
    image: creator,
    name: "Creator",
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
  },
  {
    image: supporter,
    name: "Supporter",
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
  },
];

const JumboContainer = styled.div`
  display: flex;
  position: relative;
  top: 5rem;
`;

const JumboShadow = styled.div`
  background-color: #393939;
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  clip-path: var(--notched-md);
`;

const JumboInnerBorder = styled.div`
  background-color: #cfd2da;
  padding: 2rem 1.5rem;
  clip-path: var(--notched-md);
`;

const JumboTabsContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: -2.5rem;
  left: 6rem;
  display: flex;
`;

const JumboTab = styled.button`
  cursor: pointer;
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#FCC453" : "#a9afb8"};
  text-shadow: ${(props: JumboStampSystemProps) =>
    props.active
      ? "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
      : ""};
  width: fit-content;
  padding: 1.5rem 3rem;
  clip-path: var(--notched-tp);
`;

const Tab = styled.p`
  color: ${(props: JumboStampSystemProps) =>
    props.active ? "white" : "#686868"};
  font-size: 2rem;
`;

const JumboInnerContainer = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  clip-path: var(--notched-md);
`;

const StampTopContainer = styled.div`
  position: relative;
`;

const SeasonTab = styled.div`
  top: 0;
  position: absolute;
  background-color: #414141;
  clip-path: var(--notched-bt);
  width: fit-content;
  padding: 1.5rem 5rem 0.75rem 5rem;
  right: 3.5rem;
`;

const SeasonText = styled.p`
  z-index: 100;
  color: white;
  font-size: 2rem;
`;

const StampTop = styled.div`
  clip-path: var(--notched-md-tp);
  background-color: #aeb8d6;
  padding: 1.75rem 1rem;
`;

const StampsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface JumboStampSystemProps {
  active?: boolean;
}

const JumboStampSystem = () => {
  const dispatch = useDispatch();
  const [stampActive, setActive] = useState(false);

  return (
    <JumboContainer>
      <JumboTabsContainer>
        <JumboTab>
          <Tab>Meepo Market</Tab>
        </JumboTab>
        <JumboTab active>
          <Tab active>Stamp System</Tab>
        </JumboTab>
      </JumboTabsContainer>

      <JumboShadow>
        <JumboInnerBorder>
          <JumboInnerContainer>
            <StampTopContainer>
              <StampTop />
              <SeasonTab>
                <SeasonText>Season 1</SeasonText>
              </SeasonTab>
            </StampTopContainer>
            <StampsRow>
              {stamp.map((stamp: StampType) => (
                <JumboStamp key={stamp.name} stamp={stamp} />
              ))}
            </StampsRow>

            <ButtonBlue
              content="Rewards"
              close={() => dispatch(setShowingRewards(true))}
            />
          </JumboInnerContainer>
        </JumboInnerBorder>
      </JumboShadow>
    </JumboContainer>
  );
};

export default JumboStampSystem;
