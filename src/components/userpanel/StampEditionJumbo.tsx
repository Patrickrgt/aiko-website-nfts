import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { selectMuteAudio } from "../../state/uiSlice";
import star from "../../assets/svgs/aikostarcrystal.svg";
import HoverAudio from "./HoverAudio";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import soundHoverLarge from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_LARGE.wav";
import soundClickLarge from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_LARGE.wav";

export interface EditionJumboType {
  image: string;
  name: string;
  character: string;
  required: number;
  tier1: boolean;
  tier2: boolean;
  tier3: boolean;
}

const fadeLeft = keyframes`
   0% { transition: all ease; opacity: 0; transform: translateX(-100px);}
   30% { transition: all ease; opacity: 0; transform: translateX(-100px);}
   100% { opacity: 1; transform: translateY(0);}
`;

const Stamp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  cursor: url(${cursorhover}), auto;
  animation: ${(props: JumboStampSystemProps) =>
    props.visible
      ? css`
          ${fadeLeft} 2.15s cubic-bezier(1,0,0,1)
        `
      : css``};
  animation-play-state: ${(props: JumboStampSystemProps) =>
    props.visible ? "running" : "paused"};
`;

const StampShadow = styled.div`
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#494a4b" : "#494a4b"};
  transition: background-color 0.2s;
  /* background-color: #494a4b; */
  padding: 0.35rem 0.215rem 1rem 0.25rem;
  clip-path: var(--notched-md);
`;

const StampContainer = styled.div`
  position: relative;
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#72D2FF" : "#BDBDBD"};
  transition: all 0.4s;
  padding: 0.5rem;
  clip-path: var(--notched-md);
  &:hover {
    background-color: ${(props: JumboStampSystemProps) =>
      props.active ? "#FCC453" : ""};
  }
`;

const StampImgContainer = styled.div`
  background-color: #799eff;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(30%)"};
  opacity: ${(props: JumboStampSystemProps) => (props.active ? "1" : "0.70")};
  clip-path: var(--notched-md-tp);
  width: 29.3vw;
  max-width: 29.3vw;
  width: auto;
  height: 41.3vh;
  max-height: 41.3vh;
  transition: all ease 0.3s;

  &:before {
    filter: ${(props: JumboStampSystemProps) =>
      props.hover ? "saturate(30%)" : "saturate(30%)"};
  }
`;

const StampImg = styled.img`
  width: 28.5vh;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(50%)"};
  transform: scale(1.05) translateY(1rem);
  transition: all ease 0.3s;
`;

const StampContentContainer = styled.div`
  position: relative;
`;

const StampGradient = styled.div`
  position: absolute;
  width: 100%;
  background-image: ${(props: JumboStampSystemProps) =>
    props.active
      ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), #69A0F3)"
      : "linear-gradient(to bottom, rgba(255, 255, 255, 0), #EAEAEA)"};
  transition: background-color 0.6s;
  /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffba00); */
  bottom: 4rem;
  padding: 6rem 0 4rem 0;
`;

const StampTitle = styled.p`
  font-size: 3.25vh;
  color: white;
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#414141" : "#909295"};
  transition: background-color 0.8s;
  transition: margin 0.4s;
  clip-path: var(--notched-tp);
  padding: 0.75rem 0 0.5rem 0;
`;

const StampCollected = styled.div`
  clip-path: var(--notched-md-bt);
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#69A0F3" : "#EAEAEA"};
  transition: background-color 0.6s;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props: JumboStampSystemProps) =>
    props.hover ? "#fee390" : ""};
`;

const StampCollectedContainer = styled.div``;

const StampCollectedStar = styled.img`
  width: 3.25vh;
  height: 3.25vh;
  margin: 0 0.25rem;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "grayscale(1)"};
`;

interface JumboStampSystemProps {
  active?: boolean;
  visible?: boolean;
  hover?: boolean;
}

interface Props {
  editionJumbo: EditionJumboType;
  visible: boolean;
}

const StampEditionJumbo = ({ visible, editionJumbo }: Props) => {
  const [hover, setHover] = useState(false);
  const soundActive = useSelector(selectMuteAudio);

  const audioHoverLarge = useRef<HTMLAudioElement>(null);
  const audioClickLarge = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverLarge.current && soundActive) {
      audioHoverLarge.current.currentTime = 0;
      audioHoverLarge.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickLarge.current && soundActive) {
      audioClickLarge.current.currentTime = 0;
      audioClickLarge.current.play();
    }
  };

  return (
    <HoverAudio hoverSound={soundHoverLarge} clickSound={soundClickLarge}>
      <Stamp
        visible={visible}
        onMouseEnter={() => {
          playHoverAudio();
        }}
        onClick={() => playClickAudio()}
      >
        <StampShadow active={editionJumbo.tier1}>
          <StampContainer active={editionJumbo.tier1}>
            <StampImgContainer active={editionJumbo.tier1}>
              <StampImg
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                active={editionJumbo.tier1}
                src={editionJumbo.image}
              />
            </StampImgContainer>
            <StampContentContainer
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <StampGradient active={editionJumbo.tier1} />
              <StampTitle active={editionJumbo.tier1}>
                {editionJumbo.character}
              </StampTitle>
              <StampCollected
                hover={hover && editionJumbo.tier1}
                active={editionJumbo.tier1}
              >
                <StampCollectedContainer>
                  <StampCollectedStar active={editionJumbo.tier1} src={star} />
                  <StampCollectedStar active={editionJumbo.tier2} src={star} />
                  <StampCollectedStar active={editionJumbo.tier3} src={star} />
                </StampCollectedContainer>
              </StampCollected>
            </StampContentContainer>
          </StampContainer>
        </StampShadow>
      </Stamp>
    </HoverAudio>
  );
};

export default StampEditionJumbo;
