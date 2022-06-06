import styled from "styled-components";
import MintConfirmation from "./MintConfirmation";
import MintSection from "./MintSection";

const StyledMintPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #383838;
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

const Copywrite = styled.div`
  width: 12rem;
  height: 3rem;
  background: pink;
`;

const Barcode = styled.div`
  height: 2.5rem;
  width: 6rem;
  background: pink;
`;

const MintPage = () => {
  const minted = true;

  return (
    <StyledMintPage>
      <Content>
        <IllustrationSection>illustration</IllustrationSection>
        <MainSection>
          {!minted && <MintSection />}
          {minted && <MintConfirmation />}
          <Footer>
            <Copywrite />
            <Barcode />
          </Footer>
        </MainSection>
      </Content>
    </StyledMintPage>
  );
};

export default MintPage;
