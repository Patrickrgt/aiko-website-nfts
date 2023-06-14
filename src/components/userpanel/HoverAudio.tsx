import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMuteAudio } from "../../state/uiSlice";

const HoverAudioWrapper = styled.div`
  /* Add any styling here. */
`;

interface HoverAudioProps {
  children: React.ReactNode;
  hoverSound: string;
  clickSound: string;
}

const HoverAudio = ({ children, hoverSound, clickSound }: HoverAudioProps) => {
  const soundActive = useSelector(selectMuteAudio);
  const audioHover = useRef<HTMLAudioElement>(null);
  const audioClick = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHover.current && soundActive) {
      audioHover.current.currentTime = 0;
      audioHover.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClick.current && soundActive) {
      audioClick.current.currentTime = 0;
      audioClick.current.play();
    }
  };

  return (
    <HoverAudioWrapper onMouseEnter={playHoverAudio} onClick={playClickAudio}>
      <audio ref={audioHover} src={hoverSound}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClick} src={clickSound}>
        <track kind="captions" />
      </audio>
      {children}
    </HoverAudioWrapper>
  );
};

export default HoverAudio;
