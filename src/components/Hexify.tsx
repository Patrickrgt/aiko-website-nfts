import { ReactNode } from "react";
import styled from "styled-components";
import leftEnd from "../assets/svgs/hex-left.svg";
import leftEndDark from "../assets/svgs/hex-left-dark.svg";
import leftEndYellow from "../assets/svgs/hex-left-yellow.svg";
import rightEnd from "../assets/svgs/hex-right.svg";
import rightEndDark from "../assets/svgs/hex-right-dark.svg";
import rightEndYellow from "../assets/svgs/hex-right-yellow.svg";

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
  yellow?: boolean;
}

const BackgroundMiddle = styled.div`
  height: 100%;
  flex: 1;
  background: ${(props: HexifyProps) =>
    props.dark ? "#4C6596" : props.yellow ? "#F7D173" : "#8AAAD7"};
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
  yellow?: boolean;
}

const Hexify = ({ children, dark, yellow }: Props) => {
  return (
    <Container>
      <BackgroundContainer>
        <BackgroundEnd
          src={dark ? leftEndDark : yellow ? leftEndYellow : leftEnd}
          alt="Background asset"
        />
        <BackgroundMiddle dark={dark} yellow={yellow} />
        <BackgroundEnd
          right
          src={dark ? rightEndDark : yellow ? rightEndYellow : rightEnd}
          alt="Background asset"
        />
      </BackgroundContainer>
      <Content>{children}</Content>
    </Container>
  );
};

export default Hexify;
