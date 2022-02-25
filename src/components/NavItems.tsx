import styled from "styled-components";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    name: "home",
    link: "",
  },
  {
    name: "gallery",
    link: "",
  },
  {
    name: "story",
    link: "",
  },
  {
    name: "roadmap",
    link: "",
  },
  {
    name: "team",
    link: "",
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

interface ItemsProps {
  items: number;
}

const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(${(props: ItemsProps) => props.items}, 1fr);
`;

const NavItem = styled.button`
  color: var(--primary);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      <BookEnds>{"<"}</BookEnds>
      <ItemsContainer items={navItems.length}>
        {navItems.map((item: NavItem) => (
          <NavItem>{item.name}</NavItem>
        ))}
      </ItemsContainer>
      <BookEnds>{">"}</BookEnds>
    </StyledNavItems>
  );
};

export default NavItems;
