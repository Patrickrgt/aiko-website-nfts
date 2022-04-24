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

  margin-bottom: 1rem;
  height: 25rem;
  padding: 1.8rem;
  @media only screen and (max-width: 1400px) {
    margin-bottom: 1rem;
    height: 22rem;
    padding: 1.4rem;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
    height: 18rem;
    padding: 1rem;
  }
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 80%;
  @media only screen and (max-width: 1400px) {
    height: 75%;
  }
  @media only screen and (max-width: 600px) {
    height: 80%;
  }
`;

const BackgroundCorner = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background: #50739e;
  border-radius: 1.3rem;

  top: 0.7rem;
  left: 0.7rem;
  @media only screen and (max-width: 1400px) {
    top: 0.5rem;
    left: 0.5rem;
  }
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
  @media only screen and (max-width: 1400px) {
    clip-path: polygon(
      7.2% 0%,
      92.8% 0%,
      100% 26%,
      100% 74%,
      92.8% 100%,
      7.2% 100%,
      0% 74%,
      0% 26%
    );
  }
  @media only screen and (max-width: 600px) {
    clip-path: polygon(
      9% 0%,
      91% 0%,
      100% 26%,
      100% 74%,
      91% 100%,
      9% 100%,
      0% 74%,
      0% 26%
    );
  }
`;

const DecalContainer = styled.div`
  position: relative;
`;

const DecalSection = styled.div`
  position: relative;
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

  width: 15rem;
  @media only screen and (max-width: 1400px) {
    width: 13.5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 10.5rem;
  }
`;

const ConnectingLine = styled.div`
  background: #5475a1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  height: 4rem;
  width: 6px;
  @media only screen and (max-width: 600px) {
    height: 2rem;
    width: 5px;
  }
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
  color: #4f729e;
  font-weight: 700;
  padding-bottom: 0.5rem;

  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
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

  font-size: 1.6rem;
  line-height: 1.4;
  width: 80%;
  @media only screen and (max-width: 1400px) {
    font-size: 1.4rem;
    line-height: 1;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1;
    width: 85%;
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
