import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { useEthers } from "@usedapp/core";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import arrow from "../../assets/userpanel/arrow.png";

// import { useBalanceOf } from "../../contracts/views";

import holder from "../../assets/userpanel/holder.png";
import holder1 from "../../assets/userpanel/holder1.png";
import holder2 from "../../assets/userpanel/holder2.png";
import holder3 from "../../assets/userpanel/holder3.png";

import explorer from "../../assets/userpanel/explorer.png";
import explorer1 from "../../assets/userpanel/explorer1.png";
import explorer2 from "../../assets/userpanel/explorer2.png";
import explorer3 from "../../assets/userpanel/explorer3.png";

import creator from "../../assets/userpanel/creator.png";
import creator1 from "../../assets/userpanel/creator1.png";
import creator2 from "../../assets/userpanel/creator2.png";
import creator3 from "../../assets/userpanel/creator3.png";

import supporter from "../../assets/userpanel/supporter.png";
import supporter1 from "../../assets/userpanel/supporter1.png";
import supporter2 from "../../assets/userpanel/supporter2.png";
import supporter3 from "../../assets/userpanel/supporter3.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import JumboStamp, { StampType } from "./JumboStamp";
import StampIndividual, { IndividualStampType } from "./StampIndividual";
import ButtonBlue from "./ButtonBlue";

export const stampIndividual: IndividualStampType[] = [
  {
    name: "Holder",
    image: holder,
    id: 0,
    character: "Mimi",
    edition: [
      {
        image: holder1,
        name: "1st Edition",
        collected: true,
      },
      {
        image: holder2,
        name: "2nd Edition",
        collected: false,
      },
      {
        image: holder3,
        name: "3rd Edition",
        collected: false,
      },
    ],
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
    visible: false,
  },
  {
    name: "Explorer",
    image: explorer,
    id: 1,
    character: "Mimi2",
    edition: [
      {
        image: explorer1,
        name: "1st Edition",
        collected: true,
      },
      {
        image: explorer2,
        name: "2nd Edition",
        collected: true,
      },
      {
        image: explorer3,
        name: "3rd Edition",
        collected: false,
      },
    ],
    required: 3,
    tier1: true,
    tier2: true,
    tier3: false,
    visible: false,
  },
  {
    name: "Creator",
    image: creator,
    id: 2,
    character: "Mimi3",
    edition: [
      {
        image: creator1,
        name: "1st Edition",
        collected: true,
      },
      {
        image: creator2,
        name: "2nd Edition",
        collected: true,
      },
      {
        image: creator3,
        name: "3rd Edition",
        collected: true,
      },
    ],
    required: 3,
    tier1: true,
    tier2: true,
    tier3: true,
    visible: false,
  },
  {
    name: "Supporter",
    image: supporter,
    id: 3,
    character: "Mimi4",
    edition: [
      {
        image: supporter1,
        name: "1st Edition",
        collected: false,
      },
      {
        image: supporter2,
        name: "2nd Edition",
        collected: false,
      },
      {
        image: supporter3,
        name: "3rd Edition",
        collected: false,
      },
    ],
    required: 3,
    tier1: false,
    tier2: false,
    tier3: false,
    visible: false,
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
  font-size: 2.25rem;
  color: white;
`;

const RewardsDate = styled.span`
  padding: 0rem 1rem 0rem 1rem;
  font-size: 2.25rem;
  color: #e0ce83;
  letter-spacing: -1px;
`;

const IndividualStampTab = styled.div`
  background-color: blue;
  clip-path: var(--notched-md-tp);
  width: 100%;
  z-index: 2;
`;

const StampTabRow = styled.div`
  display: flex;
  align-items: center;
`;

const StampTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: white;
  margin-left: 4rem;
  text-shadow: -3px 3px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  text-transform: uppercase;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 1rem;
`;

const IndividualStampContainer = styled.div`
  background-color: grey;
`;

const MainContainer = styled.div`
  display: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "  display: none"};
`;

interface JumboStampSystemProps {
  active?: boolean;
}

const JumboStampSystem = () => {
  const dispatch = useDispatch();
  const [hoverActive, setHoverActive] = useState(false);
  const [showLanding, setLanding] = useState(true);

  const { account } = useEthers();

  const [visible, setVisible] = useState(true);

  function handleShow() {
    setVisible(!visible);
  }

  // const stamps = useBalanceOf();
  // console.log(stamps, "stamps");
  // const stampObj = stamp;

  // useEffect(() => {
  //   const stampTiers = stamps.replaceAll(",", "");
  //   const stampHoldings = [];
  //   for (let i = 0; i < stampTiers.length; i++) {
  //     if (stampTiers[i] === "1") {
  //       stampHoldings[i] = true;
  //     } else {
  //       stampHoldings[i] = false;
  //     }
  //   }

  //   let k = 0;
  //   for (let i = 0; i < Math.floor(stampHoldings.length / 3); i++) {
  //     if (i > 0) {
  //       k = i * 3;
  //     }
  //     stampObj[i].tier1 = stampHoldings[k];
  //     stampObj[i].tier2 = stampHoldings[k + 1];
  //     stampObj[i].tier3 = stampHoldings[k + 2];
  //   }
  // }, [stamps]);

  if (!account) return null;

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
            {stampIndividual.map((stampIndividual: IndividualStampType) => (
              <StampIndividual
                key={stampIndividual.name}
                stampIndividual={stampIndividual}
              />
            ))}

            <MainContainer active={showLanding}>
              <StampTopContainer>
                <StampTop />
                <SeasonTab>
                  <SeasonText>Season 1</SeasonText>
                </SeasonTab>
              </StampTopContainer>
              <StampsRow>
                {stampIndividual.map((stamp: StampType) => (
                  <JumboStamp key={stamp.id} stamp={stamp} />
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
            </MainContainer>
          </JumboInnerContainer>
        </JumboInnerBorder>
      </JumboShadow>
    </JumboContainer>
  );
};

export default JumboStampSystem;
