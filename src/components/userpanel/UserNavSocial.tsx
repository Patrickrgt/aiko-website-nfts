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
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
`;

const NavUserSocial = styled.img`
  width: fit-content;
  clip-path: var(--notched-sm);
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
      <NavUserSocial src={socialIcon.image} />
    </NavUserSocialShadow>
  );
};

export default UserNavSocial;
