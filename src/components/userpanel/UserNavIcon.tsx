import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export interface NavIconType {
  image?: string;
  name: string;
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
    props.active ? "#48484B" : "#F7E9A1"};
  clip-path: var(--notched-sm);
  padding: 1px 1px 0px 1px;
`;

const NavTitleContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 5.5rem;
  display: flex;
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
      <NavTitleContainer>
        <NavTitleShadow active={navActive}>
          <NavTitleDiv>
            <NavTitle>{navIcon.name}</NavTitle>
          </NavTitleDiv>
        </NavTitleShadow>
      </NavTitleContainer>
      <NavIconShadow>
        <NavIconBackground active={navActive}>
          <NavIcon
            active={navActive}
            src={navIcon.image}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        </NavIconBackground>
      </NavIconShadow>
    </IconContainer>
  );
};

export default UserNavIcon;
