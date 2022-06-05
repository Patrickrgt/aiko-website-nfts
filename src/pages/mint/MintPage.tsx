import styled from "styled-components";
import Connector from "../../components/Connector";
import Hexify from "../../components/Hexify";
import MintInput from "./MintInput";
import MintProgress from "./MintProgess";

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

const Image = styled.div`
  height: 25rem;
  aspect-ratio: 1;
  background: pink;
`;

const Header = styled.h1`
  color: white;
  font-size: 2.9rem;
  font-weight: 500;
`;

const Icon = styled.div`
  height: 6rem;
  aspect-ratio: 1;
  background: pink;
`;

const MintPage = () => {
  return (
    <StyledMintPage>
      <Content>
        <IllustrationSection>illustration</IllustrationSection>
        <MainSection>
          <TopSection>
            <Hexify dark>
              <Stage>{"<stage one>"}</Stage>
            </Hexify>
            <Connector dark />
          </TopSection>
          <Image />
          <Header>{"A:\\How many Aiko's do you want to mint?"}</Header>
          <MintInput />
          <Icon />
          <MintProgress />
          <div>meow</div>
        </MainSection>
      </Content>
    </StyledMintPage>
  );
};

export default MintPage;
