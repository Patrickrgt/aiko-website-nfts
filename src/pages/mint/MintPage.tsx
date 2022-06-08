import { useState } from "react";
import styled from "styled-components";

import MintConfirmation from "./MintConfirmation";
import MintSection from "./MintSection";

import footerLeft from "../../assets/mint/footer-left.svg";
import footerRight from "../../assets/mint/footer-right.svg";

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
`;

const Content = styled.div`
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
  flex: 1;
  height: 100%;
  background: #90a8d1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
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
  const [minted, setMinted] = useState(false);

  return (
    <StyledMintPage>
      <Content>
        <IllustrationSection>illustration</IllustrationSection>
        <Separator />
        <MainSection>
          {!minted && <MintSection />}
          {minted && <MintConfirmation />}
          <Footer>
            <Copywrite src={footerLeft} alt="Footer illustration" />
            <Barcode src={footerRight} alt="Footer illustration" />
          </Footer>
        </MainSection>
      </Content>
    </StyledMintPage>
  );
};

export default MintPage;
