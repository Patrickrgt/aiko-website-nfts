import { ReactNode, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { selectAnimationEnd } from "../../state/uiSlice";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import soundHoverMedium from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_MEDIUM.wav";
import soundClickMedium from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_MEDIUM.wav";

const ButtonShadow = styled.div`
  padding: 3px 3px 12px 3px;
  background-color: #393939;
  width: fit-content;
  /* margin: auto; */
  clip-path: var(--notched-sm);
`;

const ButtonInner = styled.div`
  padding: 2px 2px 2px 2px;
  background-color: #5a6ca7;
  margin: auto;
  clip-path: var(--notched-sm);

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f38a65;
    z-index: -1;
    transition: opacity 0.25s linear;
    opacity: ${(props: ButtonProps) => (props.active ? "1" : "0")};
  }
`;

const Button = styled.button`
  line-height: 1;
  text-transform: uppercase;
  width: 100%;
  margin: auto;
  position: relative;
  font-family: video, serif;
  font-size: ${(props: ButtonProps) => (props.small ? "3.25rem" : "4rem")};
  clip-path: var(--notched-sm);
  font-weight: 800;
  color: white;
  text-shadow: -2px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  background-image: linear-gradient(to bottom, #96c8fb, #667ecd);
  padding: ${(props: ButtonProps) =>
    props.small ? "1.5rem 1.5rem 1rem 1.5rem" : "1.5rem 2.75rem"};
  border: none;
  cursor: url(${cursorhover}), auto;
  z-index: 1;
  opacity: 1;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, #f38a65, #ffca62);
    z-index: -1;
    transition: opacity 0.25s linear;
    opacity: ${(props: ButtonProps) => (props.active ? "1" : "0")};
  }
`;

interface ButtonProps {
  active?: boolean;
  small?: boolean;
  symbol?: boolean;
}

interface Props {
  content: string;
  small?: boolean;
  symbol?: boolean;
  close: () => void;
}

const ButtonBlue = ({ content, close, small, symbol }: Props) => {
  const [hoverActive, setHoverActive] = useState(false);
  const animationEnd = useSelector(selectAnimationEnd);

  const audioHoverMedium = useRef<HTMLAudioElement>(null);
  const audioClickMedium = useRef<HTMLAudioElement>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const playHoverAudio = () => {
    if (audioHoverMedium.current) {
      audioHoverMedium.current.currentTime = 0;
      audioHoverMedium.current.play();
    }
  };

  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef.current.style.opacity);
    }
  }, [buttonRef]);

  const playClickAudio = () => {
    if (audioClickMedium.current) {
      audioClickMedium.current.currentTime = 0;
      audioClickMedium.current.play();
    }
  };

  return (
    <ButtonShadow>
      <audio ref={audioHoverMedium} src={soundHoverMedium}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickMedium} src={soundClickMedium}>
        <track kind="captions" />
      </audio>
      <ButtonInner active={hoverActive}>
        <Button
          ref={buttonRef}
          active={hoverActive}
          small={small}
          symbol={symbol}
          onMouseEnter={() => {
            setHoverActive(true);
            playHoverAudio();
          }}
          onMouseLeave={() => setHoverActive(false)}
          onClick={() => {
            playClickAudio();
            close();
          }}
        >
          {content}
        </Button>
      </ButtonInner>
    </ButtonShadow>
  );
};

export default ButtonBlue;
