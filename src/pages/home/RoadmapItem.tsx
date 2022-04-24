import styled from "styled-components";
import AikoFade from "../../components/AikoFade";

export interface RoadmapItemType {
  icon: string;
  header: string;
  body: string;
  percent: number;
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 25rem;
  padding: 1.8rem;

  margin-bottom: 1rem;
  @media only screen and (max-width: 1400px) {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
`;

const BackgroundCorner = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  width: 50%;
  height: 50%;
  background: #50739e;
  border-radius: 1.3rem;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #a2bee6, #e6f0fd);
  clip-path: polygon(
    6.5% 0%,
    93.5% 0%,
    100% 26%,
    100% 74%,
    93.5% 100%,
    6.5% 100%,
    0% 74%,
    0% 26%
  );
`;

const DecalContainer = styled.div`
  position: relative;
`;

const DecalSection = styled.div`
  position: relative;
  width: 15rem;
  background: #5475a1;
  height: 100%;
  padding: 2px;

  clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 18%,
    100% 82%,
    75% 100%,
    25% 100%,
    0% 82%,
    0% 18%
  );
`;

const ConnectingLine = styled.div`
  width: 8px;
  background: #5475a1;
  height: 4rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ConnectingLineBottom = styled(ConnectingLine)`
  top: 99%;
`;

const ConnectingLineTop = styled(ConnectingLine)`
  bottom: 99%;
`;

const DecalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #a2bee6, #e6f0fd);
  padding: 7px;
  clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 18%,
    100% 82%,
    75% 100%,
    25% 100%,
    0% 82%,
    0% 18%
  );
`;

const IconBackground = styled.div`
  width: 100%;
  aspect-ratio: 1;
  clip-path: var(--hex);
  background: #50739e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 2rem;
  color: #4f729e;
  font-weight: 700;
  padding-bottom: 0.5rem;
`;

const Icon = styled.img`
  height: 108%;
`;

const TextContainer = styled.div`
  position: relative;
  flex: 1;
  height: 76%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 300;
  color: #456893;
  width: 80%;

  font-size: 1.6rem;
  line-height: 1.4;
  @media only screen and (max-width: 1400px) {
    font-size: 1.4rem;
    line-height: 1;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const Bold = styled.span`
  font-weight: 600;
  color: #456893;

  font-size: 2rem;
  line-height: 1;
  @media only screen and (max-width: 1400px) {
    font-size: 1.8rem;
    line-height: 1;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1;
  }
`;

interface Props {
  item: RoadmapItemType;
  first: boolean;
  last: boolean;
}

const RoadmapItem = ({ item, first, last }: Props) => {
  return (
    <AikoFade>
      <Container>
        <BackgroundContainer>
          <BackgroundCorner />
          <Background />
        </BackgroundContainer>
        <DecalContainer>
          {!first && <ConnectingLineTop />}
          {!last && <ConnectingLineBottom />}
          <DecalSection>
            <DecalContent>
              <IconBackground>
                <Icon src={item.icon} alt="Roadmap icon" />
              </IconBackground>
              <Percent>{`${(item.percent * 100).toLocaleString()}%`}</Percent>
            </DecalContent>
          </DecalSection>
        </DecalContainer>
        <TextContainer>
          <Text>
            <Bold>{`<A:\\${item.header}: `}</Bold>
            {item.body}
          </Text>
        </TextContainer>
      </Container>
    </AikoFade>
  );
};

export default RoadmapItem;
