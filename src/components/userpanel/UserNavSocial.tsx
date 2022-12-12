import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export interface SocialIconType {
  image?: string;
  name: string;
}

const NavUserSocialShadow = styled.div`
  margin-top: 1rem;
  clip-path: var(--notched-sm);
  background-color: #393939;
  width: fit-content;
  padding: 0.25rem 0.25rem 0.75rem 0.25rem;
`;

const NavUserContainer = styled.div`
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
  cursor: pointer;
`;

const NavUserSocial = styled.img`
  display: block;
  margin: auto;
  aspect-ratio: 1/1;
  max-width: 35px;
  max-height: 35px;
  clip-path: var(--notched-sm);
  filter: brightness(0) invert(1);
`;

// interface NavProps {
//   nav?: boolean;
// }

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
      <NavUserContainer>
        <NavUserSocial src={socialIcon.image} />
      </NavUserContainer>
    </NavUserSocialShadow>
  );
};

export default UserNavSocial;
