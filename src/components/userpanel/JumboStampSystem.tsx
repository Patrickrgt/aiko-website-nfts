import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { useEthers } from "@usedapp/core";
import { useStamps } from "../../contracts/functions";

import { selectShowingStamp, setShowingRewards } from "../../state/uiSlice";

import arrow from "../../assets/svgs/arrowspanel.svg";

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

import cursorhover from "../../assets/svgs/cursorhover.svg";

import JumboStamp, { StampType } from "./JumboStamp";
import StampIndividual, { IndividualStampType } from "./StampIndividual";
import ButtonBlue from "./ButtonBlue";

// const CONTRACT_ADDR = "0x7f60e977a7b9677be1795efe5ad5516866ab69a6";
// const Interface = new utils.Interface(abiStamps);
// const ContractInstance = new Contract(CONTRACT_ADDR, Interface);

export const stampIndividual: IndividualStampType[] = [
  {
    name: "Holder",
    image: holder,
    id: 0,
    character: "Mitsu",
    description:
      "To collect my magazine covers you can just secure and hold any Aiko for a certain amount of time! If you don't have an Aiko, check our Opensea on the links to your right! We are rewarding everyone!",
    edition: [
      {
        image: holder1,
        name: "1st Edition",
        collected: false,
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
    tier1: false,
    tier2: false,
    tier3: false,
    visible: false,
  },
  {
    name: "Creator",
    image: creator,
    id: 1,
    character: "Megumi",
    description:
      "I'm an artist who wants to move people with my brushstrokes. Creating pieces that make virtuals feel amazing is my core! Why not make your own and show our Aikommunity?",
    edition: [
      {
        image: creator1,
        name: "1st Edition",
        collected: false,
      },
      {
        image: creator2,
        name: "2nd Edition",
        collected: false,
      },
      {
        image: creator3,
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
  {
    name: "Supporter",
    image: supporter,
    id: 2,
    character: "Marisa",
    description:
      "I love helping people, especially those who don't ask for it out loud but show it through their actions. I give stamps to virtuals who make our community happy with their awesome content!",
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
  {
    name: "Explorer",
    image: explorer,
    id: 3,
    character: "Mimi",
    description:
      "It's easy to find the Explorer Stamps, but not easy to collect them, you need to be an active member through our community, and explore our events, contests, with your virtual friends!",
    edition: [
      {
        image: explorer1,
        name: "1st Edition",
        collected: false,
      },
      {
        image: explorer2,
        name: "2nd Edition",
        collected: false,
      },
      {
        image: explorer3,
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

const changeView = keyframes`
   0% { transition: all ease; opacity: 1;  height: 100%;}
   10% { transition: all ease; opacity: 0;  height: 100%;}
   25% {  position: absolute; top: 0; left: 0; opacity: 0; height: 1px; }
   100% { position: absolute; top: 0; left: 0; opacity: 0; }
`;

const heightChange = keyframes`
   0% { transition: all ease; height: 100%;}
   10% { height: 10%;}
   100% { height: 100%; }
`;

const heightChangeBack = keyframes`
   0% { transition: all ease; height: 100%;}
   10% { height: 10%;}
   50% {   height: 17%; }
   75% {   height: 74%; }
   100% { height: 100%; }
`;

const widthChange = keyframes`
   0% { transition: all ease; width: 100%;}
   50% {   width: 100%; }
   75% {   width: 10%; }
   100% { width: 100%; }
`;

const widthChangeBack = keyframes`
   0% { opacity: 0; transition: all ease; width: 1%;}
   30% { opacity: 0; transition: all ease; width: 1%;}
   45% { opacity: 1; width: 100%;}
   100% { width: 100%; }
`;

const fadeIn = keyframes`
   0% { transition: all ease; opacity: 1;}
   75% {   opacity: 1; }
   85% {   opacity: 0; }
   100% { opacity: 1; }
`;

const fadeInBack = keyframes`
   0% { transition: all ease; opacity: 0; transform: translateY(100px);}
   70% { transition: all ease; opacity: 0; transform: translateY(100px);}
   75% { opacity: 1; transform: translateY(0);}
   100% { opacity: 1; transform: translateY(0);}
`;

const widthIn = keyframes`
   0% { transition: all ease; width: 100%;}
   100% { width: 0%; width: 100%;}
`;

const widthInBack = keyframes`
   0% { transition: all ease; width: 0%;}
   75% {   width: 0%; }
   85% {   width: 0%; }
   100% { width: 100%; }
`;

const moveIn = keyframes`
   0% { transition: all ease;}
   100% { width: 0%; width: 100%;}
`;

const moveInBack = keyframes`
   0% { transition: all ease; transform: translateX(-100%);}
   75% {   width: 0%; }
   85% {   width: 0%; }
   100% { width: 100%; }
`;

const JumboContainer = styled.div`
  display: flex;
  position: relative;
  top: 7rem;
  transition: all ease;
`;

const JumboShadow = styled.div`
  background-color: #393939;
  padding: 0.5vh 0.5vh 3vh 0.5vh;
  clip-path: var(--notched-md);
  transition: all ease;
  animation: ${(props: JumboStampSystemProps) =>
    props.active
      ? css`
          ${heightChange} 1.5s cubic-bezier(1,0,0,1)
        `
      : css`
          ${heightChangeBack} 1.5s cubic-bezier(1,0,0,1)
        `};
`;

const JumboInnerBorder = styled.div`
  background-color: #cfd2da;
  padding: 2vh 1.5vh;
  width: 100%;
  clip-path: var(--notched-md);
  transition: all ease;
  animation: ${(props: JumboStampSystemProps) =>
    props.active
      ? css`
          ${heightChange} 1.5s cubic-bezier(1,0,0,1)
        `
      : css`
          ${heightChangeBack} 1.5s cubic-bezier(1,0,0,1)
        `};
  animation-play-state: ${(props: JumboStampSystemProps) =>
    props.active ? "running" : "paused"};
`;

const JumboTabsContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: -2.5vh;
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
  padding: 1.35vh 2.75vh;
  clip-path: var(--notched-tp);
`;

const Tab = styled.p`
  color: ${(props: JumboStampSystemProps) =>
    props.active ? "white" : "#686868"};
  font-size: 2.3vh;
`;

const JumboInnerContainer = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  clip-path: var(--notched-md);
`;

const StampTopContainer = styled.div`
  position: relative;
  animation: ${(props: JumboStampSystemProps) =>
    props.active
      ? css`
          ${widthChange} 1.5s cubic-bezier(1,0,0,1)
        `
      : css`
          ${widthChangeBack} 1.5s cubic-bezier(1,0,0,1)
        `};
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
  font-size: 2.3vh;
  white-space: nowrap;
  z-index: 6;
`;

const StampTop = styled.div`
  clip-path: var(--notched-md-tp);
  background-color: #aeb8d6;
  padding: 1.75rem 1rem;
`;

const StampsRowContainer = styled.div`
  background-color: #d8dbe0;
`;

const StampsRow = styled.div`
  display: flex;
  flex-direction: row;
  animation: ${(props: JumboStampSystemProps) =>
    props.active
      ? css`
          ${fadeIn} 1.5s linear
        `
      : css`
          ${fadeInBack} 1.5s linear
        `};
`;

const RewardsContainer = styled.div`
  background-color: #cad7e3;
  clip-path: var(--notched-md);
  position: relative;
  height: 14.75vh;
`;

const ArrowDecorationDiv = styled.div`
  height: 16.25vh;
  transition: transform ease 1.25s;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;

  transform: ${(props: JumboStampSystemProps) =>
    props.active ? "translate(-50%, 0)" : "translate(0px, 0)"};
  animation: ${(props: JumboStampSystemProps) =>
    props.hide
      ? css`
          ${widthIn} 1.75s cubic-bezier(1,0,0,1)
        `
      : css`
          ${widthInBack} 1.75s cubic-bezier(1,0,0,1)
        `};

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: ${(props: JumboStampSystemProps) =>
      props.hide ? "#ffc13a" : "#efa74c"};
    clip-path: ${(props: JumboStampSystemProps) =>
      props.hide
        ? "polygon(0% 0,100% 0%,100% 100%,100% 100%,0% 100%)"
        : "polygon(0% 0,85% 0%,100% 85%,100% 100%,0% 100%)"};
    transition: all 0.5s ease-out;
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
    clip-path: ${(props: JumboStampSystemProps) =>
      props.hide
        ? "polygon(0% 0,85% 0%,100% 100%,100% 100%,0% 100%)"
        : "polygon(0% 0,74% 0%,90% 100%,75% 100%,0% 100%)"};
    transition: clip-path 0.25s ease;
  }
`;

const ArrowDecoration = styled.img`
  position: relative;
  z-index: 2;
  height: 100%;
  transform: ${(props: JumboStampSystemProps) =>
    props.active ? "translate(10%, 0)" : "translate(0px, 0)"};
  transform: ${(props: JumboStampSystemProps) =>
    props.hide ? "translate(5%) scale(1.6)" : ""};
  transition: all ease 1.25s;
  animation: ${(props: JumboStampSystemProps) =>
    props.hide
      ? css`
          ${moveIn} 1.6s cubic-bezier(1,0,0,1)
        `
      : css`
          ${moveInBack} 1.6s cubic-bezier(1,0,0,1)
        `};
`;

const RewardsHeaderContainer = styled.div`
  background-color: #8397cf;
  height: 4.05vh;
  clip-path: var(--notched-sm-tp);
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  padding-right: 3rem;
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
  font-size: 2.15vh;
  color: white;
  text-overflow: clip;
  white-space: nowrap;
  font-family: video-cond, serif;
  font-weight: 300;
`;

// const RewardsDate = styled.span`
//   padding: 0rem 1rem 0rem 1rem;
//   font-size: 2.25rem;
//   color: #e0ce83;
//   letter-spacing: -1px;
// `;

const MainContainer = styled.div`
  /* display: none; */
  animation: ${(props: JumboStampSystemProps) =>
    props.active
      ? css`
          ${changeView} 1s cubic-bezier(1,0,1,-0.07)
        `
      : css``};
  transition: visibility ease 2s;
  animation-fill-mode: forwards;
  visibility: ${(props: JumboStampSystemProps) =>
    props.active ? "hidden" : "visible"};
  /* display: ${(props: JumboStampSystemProps) =>
    props.active ? "none" : ""}; */
`;

interface JumboStampSystemProps {
  active?: boolean;
  hide?: boolean;
}

const JumboStampSystem = () => {
  const { library: provider } = useEthers();
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingStamp);

  const [hoverActive, setHoverActive] = useState(false);

  const stamps = useStamps(provider, 137);

  const updateStampIndividual = (
    stamps: number[],
    stampIndividual: IndividualStampType[]
  ) => {
    const iterations = Math.floor(stamps.length / 3);
    for (let i = 0; i < iterations; i++) {
      stampIndividual[i].edition[0].collected = Boolean(stamps[i]);
      stampIndividual[i].edition[1].collected = Boolean(stamps[i + 4]);
      stampIndividual[i].edition[2].collected = Boolean(stamps[i + 8]);

      stampIndividual[i].tier1 = Boolean(stamps[i]);
      stampIndividual[i].tier2 = Boolean(stamps[i + 4]);
      stampIndividual[i].tier3 = Boolean(stamps[i + 8]);
    }
  };

  useEffect(() => {
    if (stamps) {
      updateStampIndividual(stamps, stampIndividual);
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

      <JumboShadow active={showing}>
        <JumboInnerBorder active={showing}>
          <JumboInnerContainer>
            {stampIndividual.map((stampIndividual: IndividualStampType) => (
              <StampIndividual
                key={stampIndividual.name}
                stampIndividual={stampIndividual}
              />
            ))}

            <MainContainer active={showing}>
              <StampTopContainer active={showing}>
                <StampTop />
                <SeasonTab>
                  <SeasonText>Season 1</SeasonText>
                </SeasonTab>
              </StampTopContainer>
              <StampsRowContainer>
                <StampsRow active={showing}>
                  {stampIndividual.map((stamp: StampType) => (
                    <JumboStamp
                      key={stamp.id}
                      stamp={stamp}
                      show={() => (stamp.visible = true)}
                    />
                  ))}
                </StampsRow>
              </StampsRowContainer>
              <RewardsContainer
                onMouseEnter={() => {
                  setHoverActive(true);
                }}
                onMouseLeave={() => setHoverActive(false)}
              >
                <ArrowDecorationDiv
                  active={hoverActive}
                  hide={showing}
                  onMouseEnter={() => setHoverActive(true)}
                  onMouseLeave={() => setHoverActive(false)}
                >
                  <ArrowDecoration
                    hide={showing}
                    active={hoverActive}
                    src={arrow}
                  />
                </ArrowDecorationDiv>
                <RewardsHeaderContainer
                  onMouseEnter={() => setHoverActive(true)}
                  onMouseLeave={() => setHoverActive(false)}
                >
                  <RewardsHeader>
                    Redemption will be made available early July
                    {/* <RewardsDate>07/05/2023</RewardsDate> */}
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
