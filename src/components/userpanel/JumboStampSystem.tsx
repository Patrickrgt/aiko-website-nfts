import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import arrow from "../../assets/userpanel/arrow.png";

import { useBalanceOf } from "../../contracts/views";

import holder from "../../assets/userpanel/holder.png";
import explorer from "../../assets/userpanel/explorer.png";
import creator from "../../assets/userpanel/creator.png";
import supporter from "../../assets/userpanel/supporter.png";
import cursorhover from "../../assets/userpanel/cursorhover.png";

import JumboStamp, { StampType } from "./JumboStamp";
import ButtonBlue from "./ButtonBlue";

const stamp: StampType[] = [
  {
    image: holder,
    name: "Holder",
    required: 3,
    tier1: false,
    tier2: false,
    tier3: false,
  },
  {
    image: explorer,
    name: "Explorer",
    required: 3,
    tier1: false,
    tier2: false,
    tier3: false,
  },
  {
    image: creator,
    name: "Creator",
    required: 3,
    tier1: false,
    tier2: false,
    tier3: false,
  },
  {
    image: supporter,
    name: "Supporter",
    required: 3,
    tier1: false,
    tier2: false,
    tier3: false,
  },
];

const slideForward = keyframes`
   0% { width: 80%;  }
   100% { width: 50%; }
`;

const slideBack = keyframes`
   0% { width: 50%;  }
   100% { width: 80%; }
`;

const fullForwardO = keyframes`
      0% { width: 10%;  }
   100% { width: 100%;}
`;

const fullBackO = keyframes`
   0% { width: 100%;  }
   100% { width: 10%;}
`;

const fullForwardY = keyframes`
      0% { width: 10%;  }
   100% { width: 100%;}
`;

const fullBackY = keyframes`
   0% { width: 100%;  }
   100% { width: 10%;}
`;

const JumboContainer = styled.div`
  display: flex;
  position: relative;
  top: 5rem;
`;

const JumboShadow = styled.div`
  background-color: #393939;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
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
  cursor: url(${cursorhover}), auto;
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

const RewardsContainer = styled.div`
  background-color: #cad7e3;
  clip-path: var(--notched-md);
  position: relative;
`;

const ArrowDecorationDiv = styled.div`
  height: 100%;
  transition: transform ease 1.25s;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;

  transform: ${(props: JumboStampSystemProps) =>
    props.active ? "translate(-50%, 0)" : "translate(0px, 0)"};

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #efa74c;
    clip-path: polygon(
      /* top left */ 0% 0,
      /* top right */ 85% 0%,
      /* bottom right */ 100% 85%,
      /* bottom left */ 100% 100%,
      /* bottom left */ 0% 100%
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
    background-color: #ffc13a;
    clip-path: polygon(
      /* top left */ 0% 0,
      /* top right */ 74% 0%,
      /* bottom right */ 90% 100%,
      /* bottom left */ 75% 100%,
      /* bottom left */ 0% 100%
    );
  }
`;

const ArrowDecoration = styled.img`
  position: absolute;
  z-index: 2;
  height: 100%;
  transform: ${(props: JumboStampSystemProps) =>
    props.active ? "translate(10%, 0)" : "translate(0px, 0)"};
  transition: transform 1.25s ease-out;
`;

const RewardsHeaderContainer = styled.div`
  background-color: #8397cf;
  clip-path: var(--notched-md-tp);
  display: flex;
  justify-content: flex-end;
`;

const RewardsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RewardsButtonInner = styled.div`
  padding: 1rem 1rem 1rem 0;
  width: fit-content;
`;

const RewardsHeader = styled.p`
  padding: 2rem 1rem;
  font-size: 2.25rem;
  color: white;
  letter-spacing: -1px;
`;

const RewardsDate = styled.span`
  padding: 0rem 1rem 0rem 1rem;
  font-size: 2.25rem;
  color: #e0ce83;
  letter-spacing: -1px;
`;

interface JumboStampSystemProps {
  active?: boolean;
}

const JumboStampSystem = () => {
  const dispatch = useDispatch();
  const [hoverActive, setHoverActive] = useState(false);

  const stamps = useBalanceOf();
  const stampObj = stamp;

  useEffect(() => {
    const stampTiers = stamps.replaceAll(",", "");
    const stampHoldings = [];
    for (let i = 0; i < stampTiers.length; i++) {
      if (stampTiers[i] === "1") {
        stampHoldings[i] = true;
      } else {
        stampHoldings[i] = false;
      }
    }

    // k is 0 - 11 for each in stampHoldings list/array could be either true or false. (1 - 12)
    // i is 0 - 3 for each stamp, ie. Explorer, Holder... (1- 4)
    // basically looping 3 times as if to say - Holder Tier i equals k of truth table
    let k = 0;
    for (let i = 0; i < Math.floor(stampHoldings.length / 3); i++) {
      if (i > 0) {
        k = i * 3;
      }
      stampObj[i].tier1 = stampHoldings[k];
      stampObj[i].tier2 = stampHoldings[k + 1];
      stampObj[i].tier3 = stampHoldings[k + 2];
    }
  }, [stamps]);

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
            <RewardsContainer
              onMouseEnter={() => setHoverActive(true)}
              onMouseLeave={() => setHoverActive(false)}
            >
              <ArrowDecorationDiv
                active={hoverActive}
                onMouseEnter={() => setHoverActive(true)}
                onMouseLeave={() => setHoverActive(false)}
              >
                <ArrowDecoration active={hoverActive} src={arrow} />
              </ArrowDecorationDiv>
              <RewardsHeaderContainer
                onMouseEnter={() => setHoverActive(true)}
                onMouseLeave={() => setHoverActive(false)}
              >
                <RewardsHeader>
                  Redeem rewards only will be available on
                  <RewardsDate>19/01/2023</RewardsDate>
                </RewardsHeader>
              </RewardsHeaderContainer>
              <RewardsButtonContainer
                onMouseEnter={() => setHoverActive(true)}
                onMouseLeave={() => setHoverActive(false)}
              >
                <RewardsButtonInner
                  onMouseEnter={() => setHoverActive(true)}
                  onMouseLeave={() => setHoverActive(false)}
                >
                  <ButtonBlue
                    content="Rewards"
                    close={() => dispatch(setShowingRewards(true))}
                  />
                </RewardsButtonInner>
              </RewardsButtonContainer>
            </RewardsContainer>
          </JumboInnerContainer>
        </JumboInnerBorder>
      </JumboShadow>
    </JumboContainer>
  );
};

export default JumboStampSystem;
