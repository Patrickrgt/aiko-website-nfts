import { useRef } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMuteAudio } from "../../state/uiSlice";

import soundHoverSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_SMALL.wav";
import soundClickSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_SMALL.wav";

import cursorhover from "../../assets/userpanel/cursorhover.png";

export interface SocialIconType {
  image?: string;
  name: string;
  link: string;
}

const NavUserSocialShadow = styled.div`
  margin-top: 1rem;
  clip-path: var(--notched-sm);
  background-color: #393939;
  width: fit-content;
  padding: 0.25rem 0.25rem 0.75rem 0.25rem;
`;

const NavLink = styled.a`
  aspect-ratio: 1/1;
  background-color: #b2bcc3;
  clip-path: var(--notched-sm);
  display: flex;
  width: 50px;
  height: 50px;
  :hover {
    background-color: #619ee2;
  }
  transition: background-color 0.3s;
  cursor: url(${cursorhover}), auto;
`;

const NavUserContainer = styled.div`
  display: block;
  margin: auto;
`;

const NavUserSocial = styled.img`
  max-width: 36px;
  max-height: 36px;
  filter: brightness(0) invert(1);
`;

interface Props {
  socialIcon: SocialIconType;
}

const UserNavSocial = ({ socialIcon }: Props) => {
  const audioHoverSmall = useRef<HTMLAudioElement>(null);
  const audioClickSmall = useRef<HTMLAudioElement>(null);

  const mute = useSelector(selectMuteAudio);

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

  return (
    <NavUserSocialShadow>
      <audio ref={audioHoverSmall} src={soundHoverSmall}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickSmall} src={soundClickSmall}>
        <track kind="captions" />
      </audio>
      <NavLink
        href={socialIcon.link}
        target="_blank"
        onClick={() => playClickAudio()}
      >
        <NavUserContainer onMouseEnter={() => playHoverAudio()}>
          <NavUserSocial src={socialIcon.image} />
        </NavUserContainer>
      </NavLink>
    </NavUserSocialShadow>
  );
};

export default UserNavSocial;
