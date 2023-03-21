import React from "react";
import { useDispatch } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { setShowingRewards, setShowingStamp } from "../../state/uiSlice";

import explorer from "../../assets/userpanel/explorer.png";

import ButtonBlue from "./ButtonBlue";
import DecorVertical from "./DecorVertical";
import StampEdition, { EditionType } from "./StampEdition";
import StampEditionJumbo, { EditionJumboType } from "./StampEditionJumbo";

export interface IndividualStampType {
  name: string;
  image: string;
  id: number;
  character: string;
  description: string;
  required: number;
  edition: [
    {
      image: string;
      name: string;
      collected: boolean;
    },
    {
      image: string;
      name: string;
      collected: boolean;
    },
    {
      image: string;
      name: string;
      collected: boolean;
    }
  ];
  tier1: boolean;
  tier2: boolean;
  tier3: boolean;
  visible: boolean;
  show?: () => void;
}

const editionJumbo: EditionJumboType[] = [
  {
    image: explorer,
    name: "Mimi",
    character: "Mini",
    required: 3,
    tier1: true,
    tier2: false,
    tier3: false,
  },
];

const fadeUp = keyframes`
   0% { transition: all ease; opacity: 0; transform: translateY(100px);}
   40% { transition: all ease; opacity: 0; transform: translateY(100px);}
   100% { opacity: 1; transform: translateY(0);}
`;

const fadeDown = keyframes`
   0% { transition: all ease; opacity: 0; transform: translateY(-100px);}
   80% { transition: all ease; opacity: 0; transform: translateY(-100px);}
   100% { opacity: 1; transform: translateY(0);}
`;

const slideForward = keyframes`
   0% { height: 10%; width: 10%; visibility: 0 }
   100% { height: 100%; width: 100%; visibility: 1}
`;

const appear = keyframes`
   0% { transition: all ease; position: absolute; opacity: 0; }
   25% {   opacity: 1; position: static; display:block;}
   100% { opacity: 1;  display:block;  }
`;

const slideRight = keyframes`
   0% {opacity: 0;}
   40% {   width: 10%;  }
   100% { width: 100%;   }
`;

const Container = styled.div`
  z-index: -1;
  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${appear} 1s cubic-bezier(1,0,1,-0.07)
        `
      : css`
          ${appear} 1s cubic-bezier(1,0,1,-0.07)
        `};
  transition: all ease 3s;
  display: ${(props: StampIndividualProps) => (props.show ? "" : "none")};
`;

const IndividualStampTab = styled.div`
  background-color: #90a9e1;
  clip-path: var(--notched-md-tp);
  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${slideRight} 1.5s cubic-bezier(1,0,0,1)
        `
      : css``};
`;

const StampTabRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;

const StampTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: white;
  margin-left: 0.5rem;
  text-shadow: -3px 3px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  text-transform: uppercase;
  flex: 1;
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
    /* top left */ 27.77% 0%,
    /* top right */ 108% calc(100%),
    /* bottom right */ calc(100%) 100%,
    /* bottom left */ 0 calc(100%) /* bottom left */
  );

  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${slideForward} 2.5s cubic-bezier(1,0,0,1)
        `
      : css``};
  animation-play-state: ${(props: StampIndividualProps) =>
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
      /* top left */ 24.44% 0%,
      /* top right */ 100% calc(100%),
      /* bottom right */ calc(100%) 100%,

      /* bottom left */ 0 calc(100%) /* bottom left */
    );
    animation: ${(props: StampIndividualProps) =>
      props.show
        ? css`
            ${slideForward} 2.75s cubic-bezier(1,0,0,1)
          `
        : css``};
    animation-play-state: ${(props: StampIndividualProps) =>
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
      /* top left */ 16.66% 0%,
      /* top right */ 90% calc(100% - 4px),
      /* bottom right */ calc(100% - 4px) 100%,

      /* bottom left */ 0 calc(100% - 4px) /* bottom left */
    );
    animation: ${(props: StampIndividualProps) =>
      props.show
        ? css`
            ${slideForward} 3s cubic-bezier(1,0,0,1)
          `
        : css``};
    animation-play-state: ${(props: StampIndividualProps) =>
      props.show ? "running" : "paused"};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 1rem;
  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${fadeUp} 2.25s cubic-bezier(1,0,0,1)
        `
      : css``};
  animation-play-state: ${(props: StampIndividualProps) =>
    props.show ? "running" : "paused"};
`;

const ButtonMargin = styled.span`
  margin: 0 0.5rem;
`;

const IndividualStampContainer = styled.div`
  background-color: #d8dbe0;
  padding-bottom: 0.5rem;
  clip-path: var(--notched-md-bt);
`;

const IndividualStampRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StampEditionCol = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 0 1.5rem 0 0.5rem;
`;
const StampEditionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
// const StampEdition = styled.div``;

const TextContainer = styled.div`
  clip-path: var(--notched-md);
  background-color: white;
  width: 625px;
  margin: auto;

  &after: {
  }
`;

const TextShadow = styled.div`
  background-color: #494a4b;
  padding: 0.25rem 0.25rem 0.25rem 0.25rem;
  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${fadeDown} 2s cubic-bezier(1,0,0,1)
        `
      : css``};
`;

const StampText = styled.p`
  font-family: video-cond, serif;
  font-weight: 400;
  font-style: normal;
  background-color: white;
  position: relative;
  font-size: 2.25rem;
  letter-spacing: 0;
  padding: 1.5rem 1.5rem;
  clip-path: var(--notched-md);
  line-height: 1.25;
  overflow: hidden;
  font-weight: 400;
  color: #4a4b4c;
  animation: ${(props: StampIndividualProps) =>
    props.show
      ? css`
          ${fadeDown} 2.5s cubic-bezier(1,0,0,1)
        `
      : css``};
`;

interface StampIndividualProps {
  active?: boolean;
  show: boolean;
}

interface Props {
  stampIndividual: IndividualStampType;
}

const StampIndividual = ({ stampIndividual }: Props) => {
  const dispatch = useDispatch();

  return (
    <Container show={stampIndividual.visible}>
      <IndividualStampTab show={stampIndividual.visible}>
        <StampTabRow>
          <DecorVertical width={3} />
          <StampTitle>
            <Stripes show={stampIndividual.visible} />
            {stampIndividual.name}
          </StampTitle>
          <ButtonContainer show={stampIndividual.visible}>
            <ButtonBlue
              small={stampIndividual.visible}
              content="Rewards"
              close={() => dispatch(setShowingRewards(true))}
            />
            <ButtonMargin />
            <ButtonBlue
              small={stampIndividual.visible}
              symbol={stampIndividual.visible}
              content="◀"
              close={() => {
                dispatch(setShowingStamp(false));
                stampIndividual.visible = false;
              }}
            />
            <ButtonMargin />
          </ButtonContainer>
        </StampTabRow>
      </IndividualStampTab>
      <IndividualStampContainer>
        <IndividualStampRow>
          {editionJumbo.map((editionJumbo: EditionJumboType) => (
            <StampEditionJumbo
              visible={stampIndividual.visible}
              key={editionJumbo.name}
              editionJumbo={stampIndividual}
            />
          ))}
          <StampEditionCol>
            <TextContainer>
              <TextShadow show={stampIndividual.visible}>
                <StampText show={stampIndividual.visible}>
                  {stampIndividual.description} <br /> A:\Stay Virtual! -
                  {stampIndividual.character}
                </StampText>
              </TextShadow>
            </TextContainer>
            <StampEditionRow>
              {stampIndividual.edition.map((edition: EditionType, index) => (
                <StampEdition
                  numberId={index + 1}
                  visible={stampIndividual.visible}
                  key={index}
                  edition={edition}
                />
              ))}
            </StampEditionRow>
          </StampEditionCol>
        </IndividualStampRow>
      </IndividualStampContainer>
    </Container>
  );
};

export default StampIndividual;
