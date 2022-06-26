import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";

import AikoFade from "./AikoFade";
import MintButton from "./MintButton";

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
    name: "about us",
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
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  transform: translateY(-3.7rem);

  @media only screen and (max-width: 600px) {
    padding: 1.1rem 1.3rem;
    margin-top: 2rem;
    transform: translateY(0);
  }
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: #a1c1ed;
  clip-path: polygon(
    3% 0%,
    97% 0%,
    100% 25%,
    100% 75%,
    97% 100%,
    3% 100%,
    0% 75%,
    0% 25%
  );
`;

const Selection = styled.div`
  position: absolute;
  left: 0;
  background: #4e73a4;
  clip-path: polygon(
    17% 0%,
    83% 0%,
    100% 25%,
    100% 75%,
    83% 100%,
    17% 100%,
    0% 75%,
    0% 25%
  );

  transform: translateX(0);
  transition: transform 0.3s;

  top: -0.5rem;
  height: calc(100% + 1rem);
  width: 12rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const BookEnds = styled.div`
  position: relative;
  color: white;

  font-size: 1.9rem;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  z-index: 1;

  a {
    cursor: pointer;
  }
`;

interface NavItemProps {
  active: boolean;
}

const NavItem = styled.div`
  line-height: 1;
  color: ${(props: NavItemProps) => (props.active ? "#F3CE70" : "#557aab")};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 700;
  width: 12rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    width: auto;
    margin: 0 0.6rem;
    color: #557aab;
  }

  transition: all 0.3s;
`;

const NavItems = () => {
  const [active, setActive] = useState(0);
  const [selection, setSelection] = useState<number | null>(null);

  return (
    <AikoFade>
      <StyledNavItems
        onMouseLeave={() => {
          if (!selection) setActive(0);
          else
            setTimeout(() => {
              setActive(0);
              setSelection(null);
            }, 1000);
        }}
      >
        <Background />
        <Selection style={{ transform: `translateX(${active * 12}rem)` }} />
        <ItemsContainer>
          {navItems.map((item: NavItem, index: number) => (
            <Link
              onMouseEnter={() => setActive(index)}
              onClick={() => setSelection(index)}
              spy
              smooth
              key={item.component}
              to={item.component}
              offset={0}
              duration={1000}
            >
              <NavItem active={index === active}>
                {index === 0 && (
                  <BookEnds style={{ marginRight: "1rem" }}>{"<"}</BookEnds>
                )}
                {item.name}
                {index === navItems.length - 1 && (
                  <BookEnds style={{ marginLeft: "1rem" }}>{">"}</BookEnds>
                )}
              </NavItem>
            </Link>
          ))}
        </ItemsContainer>
      </StyledNavItems>
    </AikoFade>
  );
};

export default NavItems;
