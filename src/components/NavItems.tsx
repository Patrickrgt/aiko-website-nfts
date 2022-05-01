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
  padding: 1.5rem 2.3rem;

  @media only screen and (max-width: 600px) {
    padding: 1.1rem 1.3rem;
    margin-top: 2rem;
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

  top: -0.5rem;
  height: calc(100% + 1rem);
  width: 12rem;
  @media only screen and (max-width: 600px) {
    top: -0.2rem;
    height: calc(100% + 0.4rem);
    width: 7.6rem;
  }
`;

const BookEnds = styled.div`
  position: relative;
  color: white;

  font-size: 1.9rem;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
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

  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 1.2rem;
  margin-right: ${(props: NavItemProps) =>
    props.active ? "2.4rem" : "1.2rem"};
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin: 0 0.6rem;
    margin-right: ${(props: NavItemProps) =>
      props.active ? "1.2rem" : "0.6rem"};
  }

  filter: brightness(1);
  transform: translateY(0);
  transition: filter 0.3s;
  :hover {
    filter: brightness(0.75);
    transform: translateY(2px);
  }
`;

const NavItems = () => {
  return (
    <AikoFade>
      <StyledNavItems>
        <Background />
        <Selection />
        <BookEnds>{"<"}</BookEnds>
        <ItemsContainer>
          {navItems.map((item: NavItem, index: number) => (
            <Link
              spy
              smooth
              key={item.component}
              to={item.component}
              offset={0}
              duration={1000}
            >
              <NavItem active={index === 0}>{item.name}</NavItem>
            </Link>
          ))}
        </ItemsContainer>
        <BookEnds>{">"}</BookEnds>
      </StyledNavItems>
    </AikoFade>
  );
};

export default NavItems;
