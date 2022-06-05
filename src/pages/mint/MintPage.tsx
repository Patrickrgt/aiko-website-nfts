import styled from "styled-components";
import Connector from "../../components/Connector";
import Hexify from "../../components/Hexify";

const StyledMintPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
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

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stage = styled.div`
  height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.7rem;
  text-transform: uppercase;
  color: white;
  font-size: 1.9rem;
  font-weight: 400;
`;

const MintPage = () => {
  return (
    <StyledMintPage>
      <IllustrationSection>illustration</IllustrationSection>
      <MainSection>
        <TopSection>
          <Hexify dark>
            <Stage>{"<stage one>"}</Stage>
          </Hexify>
          <Connector dark />
        </TopSection>
      </MainSection>
    </StyledMintPage>
  );
};

export default MintPage;
