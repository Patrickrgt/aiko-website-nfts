import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingNfts,
  setGlobalNft,
  selectGlobalNft,
  selectMuteAudio,
} from "../../state/uiSlice";

import check from "../../assets/placeholders/check.png";

import soundHoverMedium from "../../assets/userpanel/Market_SFX_-_TAB_HOVER.wav";
import soundClickMedium from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_MEDIUM.wav";

const slideDown = keyframes`
   0% { transform:  translate(0, 300px);}
   25% { transform: translate(0px, 0px);}
   65% { transform: translate(0px, 0px);}
   100% {  transform: translate(0px, 300px);}
`;

const slideDownShow = keyframes`
   0% { transform:  translate(0, 0px);}
   25% { transform: translate(0px, 300px);}
   65% { transform: translate(0px, 300px);}
   100% {  transform: translate(0px, 0px);}
`;

const AikoShadow = styled.div`
  flex-wrap: nowrap;
  padding: 0.5rem 0.25rem 0.75rem 0.25rem;
  transition: background-color 0.2s;
  background-color: ${(props: NftProps) =>
    props.active || props.selected ? "#363636;" : "#C6D0EB"};

  clip-path: var(--notched-md);
  margin: 1rem;
  position: relative;
`;

const Aiko = styled.div`
  flex-wrap: nowrap;
  max-width: 150px;
  max-height: 150px;
  min-width: 150px;
  min-height: 150px;
  position: relative;
  clip-path: var(--notched-md);
  transition: filter 0.2s;
  background-image: url(${(props) => props.pfp});
  animation: ${(props: NftProps) =>
    props.show
      ? css`
          ${slideDownShow} 0.8s  cubic-bezier(1,0,0,1) forwards 1
        `
      : "none"};
  animation-play-state: ${(props: NftProps) =>
    props.show ? "running" : "paused"};
  background-size: 150px 150px;
  background-blend-mode: color;
`;

const TransitionOverlay = styled.div`
  &:before {
    content: "";
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate(0, 300px);
    animation: ${(props: Props) =>
      props.play
        ? css`
            ${slideDown} .8s  cubic-bezier(1,0,0,1) forwards
          `
        : "none"};
    background: url("https://aikovirtual.mypinata.cloud/ipfs/QmZ2qm2nPdc7p6sATD1QKL4keShffYtFmaS66bFJde2GbR"),
      #676d7e;
    background-size: 150px 150px;
    transition: all 0.3s linear;
    filter: grayscale(90%);
  }
`;

const Overlay = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props: NftProps) =>
      props.selected ? `rgba(0, 132, 255, 0.5)` : ``};
    transition: all 0.3s linear;
  }
`;

const OverlayContainer = styled.div`
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: drop-shadow(1px 1px 3px #4fc5f1) drop-shadow(-1px 1px 3px #4fc5f1)
    drop-shadow(1px -1px 3px #4fc5f1) drop-shadow(-1px -1px 3px #4fc5f1);
`;

const OverlayCheck = styled.img`
  opacity: ${(props: NftProps) => (props.selected ? 1 : 0)};
  transform: ${(props: NftProps) =>
    props.selected ? "translate(0, 0)" : "translate(0, 40px)"};
  transition: all 0.2s cubic-bezier(1, 0, 0, 1);
  width: 50px;
  margin-bottom: 6px;
  filter: invert(1) drop-shadow(1px 1px 0 black) drop-shadow(-1px 1px 0 black)
    drop-shadow(1px -1px 0 black) drop-shadow(-1px -1px 0 black);
`;

const OverlayText = styled.div`
  flex-wrap: nowrap;
  opacity: ${(props: NftProps) => (props.selected ? 1 : 0)};
  transform: ${(props: NftProps) =>
    props.selected ? "translate(0, 0)" : "translate(0, 40px)"};
  transition: all 0.2s cubic-bezier(1, 0, 0, 1);
  &:before {
    content: "In Use";
    font-size: 2.25rem;
    text-shadow: -3px -3px 0 #000, 0 -3px 0 #000, 3px -3px 0 #000, 3px 0 0 #000,
      3px 3px 0 #000, 0 3px 0 #000, -3px 3px 0 #000, -3px 0 0 #000;
    color: white;
    position: relative;
    z-index: 100;
  }
`;

interface NftProps {
  pfp?: string;
  show?: boolean;
  active?: boolean;
  selected?: boolean;
}

interface Props {
  aiko?: string;
  play?: boolean;
}

const Nfts = ({ aiko, play }: Props) => {
  const [active, setActive] = useState(false);

  const showing = useSelector(selectShowingNfts);
  const nftPfp = useSelector(selectGlobalNft);
  const mute = useSelector(selectMuteAudio);

  const dispatch = useDispatch();

  const audioHoverMedium = useRef<HTMLAudioElement>(null);
  const audioClickMedium = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverMedium.current && showing === true && mute) {
      audioHoverMedium.current.currentTime = 0;
      audioHoverMedium.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickMedium.current && mute) {
      audioClickMedium.current.currentTime = 0;
      audioClickMedium.current.play();
    }
  };

  return (
    <AikoShadow active={active} selected={nftPfp === aiko}>
      <Aiko
        show={showing}
        selected={nftPfp === aiko}
        pfp={aiko}
        active={active}
        onMouseLeave={() => setActive(false)}
        onMouseEnter={() => {
          playHoverAudio();
          setActive(true);
        }}
        onClick={() => {
          if (aiko) {
            playClickAudio();
            dispatch(setGlobalNft(aiko));
          }
        }}
      >
        <audio ref={audioHoverMedium} src={soundHoverMedium}>
          <track kind="captions" />
        </audio>
        <audio ref={audioClickMedium} src={soundClickMedium}>
          <track kind="captions" />
        </audio>
        <TransitionOverlay play={play} />
        <Overlay selected={nftPfp === aiko} />
        <OverlayContainer>
          <OverlayCheck src={check} selected={nftPfp === aiko} />
          <OverlayText selected={nftPfp === aiko} />
        </OverlayContainer>
      </Aiko>
    </AikoShadow>
  );
};

export default Nfts;
