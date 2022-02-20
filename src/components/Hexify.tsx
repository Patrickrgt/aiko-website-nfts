import { ReactNode } from "react";
import styled from "styled-components";
import leftEnd from "../assets/svgs/hex-left.svg";
import rightEnd from "../assets/svgs/hex-right.svg";

const Container = styled.div`
  position: relative;
  display: flex;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
`;

const BackgroundEnd = styled.img`
  height: 100%;
`;

const BackgroundMiddle = styled.div`
  height: 100%;
  flex: 1;
  background: linear-gradient(to right, #748abd, #92a7c6);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: ReactNode;
}

const Hexify = ({ children }: Props) => {
  return (
    <Container>
      <BackgroundContainer>
        <BackgroundEnd src={leftEnd} alt="Background asset" />
        <BackgroundMiddle />
        <BackgroundEnd src={rightEnd} alt="Background asset" />
      </BackgroundContainer>
      <Content>{children}</Content>
    </Container>
  );
};

export default Hexify;
