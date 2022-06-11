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
  white-space: nowrap;

  height: 4.5rem;
  font-size: 2.5rem;
  padding: 0 3rem;
  font-weight: 400;
  @media only screen and (max-width: 1400px) {
    height: 4rem;
    font-size: 2.2rem;
    padding: 0 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    height: 3rem;
    font-size: 1.8rem;
    padding: 0 2rem;
    font-weight: 500;
  }
`;

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <AikoFade>
      <Hexify dark>
        <Text>{children}</Text>
      </Hexify>
    </AikoFade>
  );
};

export default Header;
