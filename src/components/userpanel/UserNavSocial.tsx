import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

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
  aspect-ratio: 1/1;
  max-width: 35px;
  max-height: 35px;
  filter: brightness(0) invert(1);
`;

interface SocialProps {
  active?: boolean;
}

interface Props {
  socialIcon: SocialIconType;
}

const UserNavSocial = ({ socialIcon }: Props) => {
  const [navActive, setActive] = useState(false);

  return (
    <NavUserSocialShadow>
      <NavLink href={socialIcon.link} target="_blank">
        <NavUserContainer>
          <NavUserSocial src={socialIcon.image} />
        </NavUserContainer>
      </NavLink>
    </NavUserSocialShadow>
  );
};

export default UserNavSocial;
