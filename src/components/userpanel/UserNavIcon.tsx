import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HoverAudio from "./HoverAudio";

import cursorhover from "../../assets/svgs/cursorhover.svg";

import { selectMuteAudio } from "../../state/uiSlice";

import soundHoverSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_SMALL.wav";
import soundClickSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_DISABLED.wav";

export interface NavIconType {
  image?: string;
  name: string;
  color: string;
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-content: flex-start;
`;

const NavIconShadow = styled.div`
  background-color: #48484b;
  padding: 1.5px 1.5px 1.5px 1.5px;
  clip-path: var(--notched-sm);
`;

const NavIconBackground = styled.div`
  background-color: ${(props: NavProps) =>
    props.active ? "#48484B" : `${props.color}`};
  clip-path: var(--notched-sm);
  padding: 1px 1px 0px 1px;
`;

const NavTitleContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 5.35vh;
  display: flex;
`;

const NavTitleShadow = styled.div`
  transition: all ease 0.3s;
  margin-top: 1.5vh;
  background-color: #393939;
  padding: 0.2vh 0.2vh 0.5vh 0.2vh;
  clip-path: var(--notched-sm);
  transform: ${(props: NavProps) =>
    props.active ? "translate(0, 0px)" : "translate(0, -10px)"};
  opacity: ${(props: NavProps) => (props.active ? 1 : 0)};
  visibility: ${(props: NavProps) => (props.active ? "visible" : "hidden")};
`;

const NavIcon = styled.img`
  filter: ${(props: NavProps) =>
    props.active ? "brightness(0) invert(1)" : ""};
  transition: filter 0.6s;
  width: 6.5vh;
  height: 6.5vh;
  padding: 0.8vh;
  clip-path: var(--notched-sm);
  cursor: url(${cursorhover}), auto;
  opacity: 0.5;
`;

const NavTitleDiv = styled.div`
  background-color: #e9eaec;
  margin: auto;
  font-size: 1.95vh;
  font-weight: 300;
  padding: 0.75vh 0.5vh 0.25vh 0.5vh;
  clip-path: var(--notched-sm);
`;

const NavTitle = styled.p`
  text-transform: uppercase;
  font-size: 1.45vh;
  font-weight: 300;
  padding: 0 1vh 0 1vh;
`;

interface NavProps {
  active?: boolean;
  top?: number;
  left?: number;
  visible?: boolean;
  color?: string;
}

interface Props {
  navIcon: NavIconType;
}

const UserNavIcon = ({ navIcon }: Props) => {
  const [navActive, setActive] = useState(false);

  const soundActive = useSelector(selectMuteAudio);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [visible, setVisible] = useState(false);

  const audioHoverSmall = useRef<HTMLAudioElement>(null);
  const audioClickSmall = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverSmall.current && soundActive) {
      audioHoverSmall.current.currentTime = 0;
      audioHoverSmall.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickSmall.current && soundActive) {
      audioClickSmall.current.currentTime = 0;
      audioClickSmall.current.play();
    }
  };

  const handleClick = (event: any) => {
    playClickAudio();
    setTop(event.clientY);
    setLeft(event.clientY);
    setVisible(true);
  };

  useEffect(() => {
    let timeoutId: any;
    if (visible) {
      timeoutId = setTimeout(() => setVisible(false), 3000);
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  const handleMouseMove = (event: any) => {
    setLeft(event.clientX);
    setTop(event.clientY);
  };

  return (
    <IconContainer>
      <audio ref={audioHoverSmall} src={soundHoverSmall}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickSmall} src={soundClickSmall}>
        <track kind="captions" />
      </audio>
      <NavTitleContainer>
        <NavTitleShadow active={navActive}>
          <NavTitleDiv>
            <NavTitle>{navIcon.name}</NavTitle>
          </NavTitleDiv>
        </NavTitleShadow>
      </NavTitleContainer>
      <NavIconShadow>
        <HoverAudio hoverSound={soundHoverSmall} clickSound={soundClickSmall}>
          <NavIconBackground
            active={navActive}
            color={navIcon.color}
            onMouseEnter={() => {
              setActive(true);
              playHoverAudio();
            }}
            onMouseLeave={() => setActive(false)}
          >
            <NavIcon
              active={navActive}
              src={navIcon.image}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onClick={handleClick}
              top={top}
              left={left}
            />
          </NavIconBackground>
        </HoverAudio>
      </NavIconShadow>
    </IconContainer>
  );
};

export default UserNavIcon;
