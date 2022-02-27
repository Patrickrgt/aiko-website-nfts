import styled from "styled-components";
import { Link } from "react-scroll";

import AikoFade from "./AikoFade";

interface NavItem {
  name: string;
  component: string;
}

const navItems: NavItem[] = [
  {
    name: "home",
    component: "home-scroll",
  },
  {
    name: "gallery",
    component: "gallery-scroll",
  },
  {
    name: "story",
    component: "story-scroll",
  },
  {
    name: "virtualmap",
    component: "roadmap-scroll",
  },
  {
    name: "team",
    component: "team-scroll",
  },
];

const StyledNavItems = styled.div`
  display: flex;
  align-items: center;
`;

const BookEnds = styled.div`
  color: var(--primary);
  font-size: 2.4rem;
  font-weight: 500;
`;

const ItemsContainer = styled.div`
  display: flex;
  z-index: 1;

  a {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  color: var(--primary);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1;
  margin: 0 1.7rem;
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      <BookEnds>{"<"}</BookEnds>
      <ItemsContainer>
        {navItems.map((item: NavItem) => (
          <Link
            spy
            smooth
            key={item.component}
            to={item.component}
            offset={0}
            duration={1000}
          >
            <NavItem>{item.name}</NavItem>
          </Link>
        ))}
      </ItemsContainer>
      <BookEnds>{">"}</BookEnds>
    </StyledNavItems>
  );
};

export default NavItems;
