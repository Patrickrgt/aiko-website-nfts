import { ReactNode } from "react";
import styled from "styled-components";
import AikoFade from "./AikoFade";
import Hexify from "./Hexify";

const Text = styled.h2`
  height: 4.5rem;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 400;
  white-space: nowrap;
  padding: 0 3rem;
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
