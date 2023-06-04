import styled from "styled-components";

import HoverAudio from "./HoverAudio";

import soundHoverSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_HOVER_-_SMALL.wav";
import soundClickSmall from "../../assets/userpanel/Market_SFX_-_BUTTON_PRESS_-_SMALL.wav";

import cursorhover from "../../assets/userpanel/cursorhover.png";

export interface SocialIconType {
  image?: string;
  name: string;
  link: string;
}

const NavUserSocialShadow = styled.div`
  margin-top: 1vh;
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
  width: 5.35vh;
  height: 5.35vh;
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
  max-width: 4vh;
  max-height: 4vh;
  filter: brightness(0) invert(1);
`;

interface Props {
  socialIcon: SocialIconType;
}

const UserNavSocial = ({ socialIcon }: Props) => {
  return (
    <NavUserSocialShadow>
      <HoverAudio hoverSound={soundHoverSmall} clickSound={soundClickSmall}>
        <NavLink href={socialIcon.link} target="_blank">
          <NavUserContainer>
            <NavUserSocial src={socialIcon.image} />
          </NavUserContainer>
        </NavLink>
      </HoverAudio>
    </NavUserSocialShadow>
  );
};

export default UserNavSocial;
