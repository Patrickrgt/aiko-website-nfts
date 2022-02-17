import { ReactNode, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Background = styled.img`
  height: 8rem;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  white-space: nowrap;
`;

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={containerRef}>
      <Background />
      <Content>{children}</Content>
    </Container>
  );
};

export default Title;
