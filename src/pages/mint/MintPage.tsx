import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useEthers } from "@usedapp/core";

import MintConfirmation from "./MintConfirmation";
import MintSection from "./MintSection";

import footerLeft from "../../assets/mint/footer-left.svg";
import footerRight from "../../assets/mint/footer-right.svg";
import bg from "../../assets/mint/mint-bg.svg";
import MintHomeButton from "./MintHomeButton";
import MintError from "./MintError";
import MintLoading from "./MintLoading";
import MintSoldOut from "./MintSoldOut";
import MintPending from "./MintPending";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledMintPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 83rem;
  max-width: 170rem;

  clip-path: polygon(
    1.5% 0%,
    98.5% 0%,
    100% 3%,
    100% 97%,
    98.5% 100%,
    1.5% 100%,
    0% 97%,
    0% 3%
  );
`;

const IllustrationSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: #4b6595;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.div`
  height: 100%;
  width: 1.2rem;
  background: #afcaec;
`;

const MainSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: #90a8d1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
`;

const Background = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: calc(100% - 4rem);
  filter: brightness(100);
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Copywrite = styled.img`
  height: 3rem;
`;

const Barcode = styled.img`
  height: 3rem;
`;

const MintPage = () => {
  const { account } = useEthers();
  const [minted, setMinted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const soldOut = false;

  return (
    <StyledMintPage>
      <Content>
        <IllustrationSection>
          <MintHomeButton />
          illustration
        </IllustrationSection>
        <Separator />
        <MainSection>
          <Background src={bg} alt="mint background image" />
          {!minted && (
            <MintSection
              action={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setMinted(true);
                }, 2000);
              }}
            />
          )}
          {minted && <MintConfirmation />}
          <Footer>
            <Copywrite src={footerLeft} alt="Footer illustration" />
            <Barcode src={footerRight} alt="Footer illustration" />
          </Footer>
          {!account && <Overlay />}
        </MainSection>
        <MintError show={error} close={() => setError(false)} />
        <MintLoading show={loading} />
        {soldOut && <MintSoldOut />}
        <MintPending />
      </Content>
    </StyledMintPage>
  );
};

export default MintPage;
