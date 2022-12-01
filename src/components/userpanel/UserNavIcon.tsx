import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export interface NavIconType {
  image?: string;
  name: string;
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NavIconShadow = styled.div`
  background-color: #3c3c3d;
  clip-path: var(--notched-sm);
  padding: 1px;
`;

const NavTitleShadow = styled.div`
  transition: all ease 0.3s;
  margin-top: 1rem;
  background-color: #393939;
  padding: 0.2rem 0.2rem 0.5rem 0.2rem;
  clip-path: var(--notched-sm);
  transform: ${(props: NavProps) =>
    props.active ? "translate(0, 0px)" : "translate(0, -10px)"};
  opacity: ${(props: NavProps) => (props.active ? 1 : 0)};
  visibility: ${(props: NavProps) => (props.active ? "visible" : "hidden")};
`;

const NavIcon = styled.img`
  width: 6rem;
  height: 6rem;
  background-image: url("https://via.placeholder.com/100x100");
  clip-path: var(--notched-sm);
  cursor: pointer;
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

// interface NavProps {
//   nav?: boolean;
// }

interface NavProps {
  active?: boolean;
}

interface Props {
  navIcon: NavIconType;
}

const UserNavIcon = ({ navIcon }: Props) => {
  const [navActive, setActive] = useState(false);

  return (
    <IconContainer>
      <NavIconShadow>
        <NavIcon
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
      </NavIconShadow>
      <NavTitleShadow active={navActive}>
        <NavTitleDiv>
          <NavTitle>{navIcon.name}</NavTitle>
        </NavTitleDiv>
      </NavTitleShadow>
    </IconContainer>
  );
};

export default UserNavIcon;
