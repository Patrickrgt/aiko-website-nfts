import { ReactNode, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import { selectMuteAudio, setMuteAudio } from "../../state/uiSlice";

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
  top: 5.5rem;
  display: flex;
`;

const HoverText = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  color: green;
  opacity: ${(props: NavProps) => (props.visible ? 1 : 0)};
`;

const NavTitleShadow = styled.div`
  transition: all ease 0.3s;
  margin-top: 1.5rem;
  background-color: #393939;
  padding: 0.2rem 0.2rem 0.5rem 0.2rem;
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
  width: 6rem;
  height: 6rem;
  clip-path: var(--notched-sm);
  cursor: url(${cursorhover}), auto;
  opacity: 0.5;
`;

const NavTitleDiv = styled.div`
  background-color: #e9eaec;
  margin: auto;
  font-size: 2rem;
  font-weight: 300;
  padding: 0.75rem 0.5rem 0.25rem 0.5rem;
  clip-path: var(--notched-sm);
`;

const NavTitle = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0 1rem 0 1rem;
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

  const mute = useSelector(selectMuteAudio);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [visible, setVisible] = useState(false);

  const audioHoverSmall = useRef<HTMLAudioElement>(null);
  const audioClickSmall = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverSmall.current && mute) {
      audioHoverSmall.current.currentTime = 0;
      audioHoverSmall.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickSmall.current && mute) {
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
      </NavIconShadow>
    </IconContainer>
  );
};

export default UserNavIcon;
