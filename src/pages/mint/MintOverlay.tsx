import { useEffect, useState } from "react";
import styled from "styled-components";

import bg from "../../assets/mint/overlay-bg.svg";
import exitAsset from "../../assets/svgs/exit-white.svg";
import Hexify from "../../components/Hexify";

interface OverlayProps {
  show: boolean;
  closed: boolean;
}

const StyledMintOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 3;

  transition: opacity 0.3s;
  transform: scale(${(props: OverlayProps) => (props.closed ? 0 : 1)});
  opacity: ${(props: OverlayProps) => (props.show ? 1 : 0)};
`;

const Banner = styled.div`
  width: 100%;
  height: 72%;
  background: #364865;
  display: flex;
`;

const Section = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4rem;
  height: calc(100% - 8rem);
  filter: brightness(0);
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Model = styled.div`
  height: 43%;
  width: 50rem;
  background: white;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  overflow: hidden;
`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  height: 4rem;
  background: #4b6596;
  padding: 0.8rem;
`;

const ExitButton = styled.button`
  height: 100%;
  cursor: pointer;
`;

const ExitIcon = styled.img`
  height: 100%;
`;

const Illustration = styled.img`
  height: 65%;
`;

const ModelContent = styled.div`
  width: 100%;
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  font-size: 3rem;
  color: #364865;
  font-weight: 700;
`;

const SubHeader = styled.div`
  font-size: 2.6rem;
  color: #364865;
  font-weight: 500;
  text-align: center;
`;

const Button = styled.button`
  height: 3.9rem;
  min-width: 12rem;
  padding: 0 1.5rem;
  color: #b7944e;
  font-size: 2.3rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  cursor: pointer;

  transition: 0.3s filter;
  :hover {
    filter: brightness(0.9);
  }
`;

interface Props {
  show: boolean;
  asset: string;
  header: string;
  body: string;
  buttonText: string;
  buttonAction: () => void;
  exit?: () => void;
}

const MintOverlay = ({
  show,
  asset,
  header,
  body,
  buttonText,
  buttonAction,
  exit,
}: Props) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (show) {
      setClosed(false);
    } else {
      setTimeout(() => {
        setClosed(true);
      }, 300);
    }
  }, [show]);

  return (
    <StyledMintOverlay show={show} closed={closed}>
      <Banner>
        <Section>
          <Background src={bg} alt="background image" />
          <Content>
            <Illustration src={asset} alt="illustration" />
          </Content>
        </Section>
        <Section>
          <Background src={bg} alt="background image" />
          <Content>
            <Model>
              <NavBar>
                {exit && (
                  <ExitButton onClick={() => exit()}>
                    <ExitIcon src={exitAsset} alt="exit icon" />
                  </ExitButton>
                )}
              </NavBar>
              <ModelContent>
                <Header>{`A:\\${header}`}</Header>
                <SubHeader>{body}</SubHeader>
                <Hexify yellow>
                  <Button onClick={() => buttonAction()}>{buttonText}</Button>
                </Hexify>
              </ModelContent>
            </Model>
          </Content>
        </Section>
      </Banner>
    </StyledMintOverlay>
  );
};

export default MintOverlay;
