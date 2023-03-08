import { ReactNode, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingRewards,
  setShowingRewards,
  selectMuteAudio,
  setMuteAudio,
} from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import explorer from "../../assets/userpanel/explorer.png";

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
`;

const StampImgContainer = styled.div`
  background-color: #799eff;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(30%)"};
  opacity: ${(props: JumboStampSystemProps) => (props.active ? "1" : "0.70")};
  clip-path: var(--notched-md-tp);
  width: 250px;
  max-width: 250px;
  width: auto;
  height: 350px;
  max-height: 375px;
  transition: all ease 0.3s;
  &:before {
    filter: ${(props: JumboStampSystemProps) =>
      props.hover ? "saturate(30%)" : "saturate(30%)"};
  }
`;

const StampImg = styled.img`
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
  font-size: 3rem;
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
`;

const StampCollectedContainer = styled.div``;

const StampCollectedStar = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 0.25rem;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "grayscale(1)"};
`;

const Overlay = styled.div`
  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(234, 255, 0, 0.353);
    z-index: 3;
    transition: all 0.3s linear;
  } */
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
  const [stampActive, setActive] = useState(false);
  const [hoverActive, setHover] = useState(false);

  const mute = useSelector(selectMuteAudio);

  const audioHoverLarge = useRef<HTMLAudioElement>(null);
  const audioClickLarge = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverLarge.current && mute) {
      audioHoverLarge.current.currentTime = 0;
      audioHoverLarge.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickLarge.current && mute) {
      audioClickLarge.current.currentTime = 0;
      audioClickLarge.current.play();
    }
  };

  return (
    <Stamp
      visible={visible}
      onMouseEnter={() => {
        setActive(true);
        playHoverAudio();
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      onClick={() => playClickAudio()}
    >
      <audio ref={audioHoverLarge} src={soundHoverLarge}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickLarge} src={soundClickLarge}>
        <track kind="captions" />
      </audio>
      <StampShadow active={editionJumbo.tier1}>
        <StampContainer active={editionJumbo.tier1}>
          <Overlay />
          <StampImgContainer active={editionJumbo.tier1}>
            <StampImg active={editionJumbo.tier1} src={editionJumbo.image} />
          </StampImgContainer>
          <StampContentContainer>
            <StampGradient active={editionJumbo.tier1} />
            <StampTitle active={editionJumbo.tier1}>
              {editionJumbo.character}
            </StampTitle>
            <StampCollected active={editionJumbo.tier1}>
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
  );
};

export default StampEditionJumbo;
