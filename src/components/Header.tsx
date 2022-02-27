import { ReactNode } from "react";
import styled from "styled-components";
import AikoFade from "./AikoFade";
import Hexify from "./Hexify";

const Text = styled.h2`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  white-space: nowrap;

  height: 4.5rem;
  font-size: 2.5rem;
  padding: 0 3rem;
  @media only screen and (max-width: 1400px) {
    height: 4rem;
    font-size: 2.2rem;
    padding: 0 2.5rem;
  }
`;

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <AikoFade>
      <Hexify>
        <Text>{children}</Text>
      </Hexify>
    </AikoFade>
  );
};

export default Header;
