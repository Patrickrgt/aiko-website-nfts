import { ReactNode } from "react";
import styled from "styled-components";
import leftEnd from "../assets/svgs/hex-left.svg";
import leftEndDark from "../assets/svgs/hex-left-dark.svg";
import rightEnd from "../assets/svgs/hex-right.svg";
import rightEndDark from "../assets/svgs/hex-right-dark.svg";

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

interface BackgroundProps {
  right?: boolean;
}

const BackgroundEnd = styled.img`
  height: 100%;
  transform: ${(props: BackgroundProps) =>
    props.right ? "translateX(-0.5px)" : "translateX(0.5px)"};
`;

interface HexifyProps {
  dark?: boolean;
}

const BackgroundMiddle = styled.div`
  height: 100%;
  flex: 1;
  background: ${(props: HexifyProps) => (props.dark ? "#4C6596" : "#8AAAD7")};
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: ReactNode;
  dark?: boolean;
}

const Hexify = ({ children, dark }: Props) => {
  return (
    <Container>
      <BackgroundContainer>
        <BackgroundEnd
          src={dark ? leftEndDark : leftEnd}
          alt="Background asset"
        />
        <BackgroundMiddle dark={dark} />
        <BackgroundEnd
          right
          src={dark ? rightEndDark : rightEnd}
          alt="Background asset"
        />
      </BackgroundContainer>
      <Content>{children}</Content>
    </Container>
  );
};

export default Hexify;
