import styled from "styled-components";
import AikoFade from "../../components/AikoFade";

export interface RoadmapItemType {
  icon: string;
  header: string;
  body: string;
}

const StyledRoadmapItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 4rem;
  @media only screen and (max-width: 1400px) {
    margin-bottom: 3rem;
  }
`;

const IconBorder = styled.div`
  aspect-ratio: 1;
  clip-path: var(--hex);
  background: #becae3;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 12rem;
  @media only screen and (max-width: 1400px) {
    height: 10.5rem;
  }
`;

const IconBackground = styled.div`
  height: 100%;
  width: 100%;
  clip-path: var(--hex);
  background: linear-gradient(45deg, #a2cbf1, #e3f1fc);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 108%;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
  font-weight: 300;
  color: #456893;

  font-size: 2.3rem;
  line-height: 1.5;
  @media only screen and (max-width: 1400px) {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

const Bold = styled.span`
  font-weight: 600;
  color: #456893;

  font-size: 2.3rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2rem;
  }
`;

interface Props {
  item: RoadmapItemType;
}

const RoadmapItem = ({ item }: Props) => {
  return (
    <AikoFade>
      <StyledRoadmapItem>
        <IconBorder>
          <IconBackground>
            <Icon src={item.icon} alt="Roadmap icon" />
          </IconBackground>
        </IconBorder>
        <TextContainer>
          <Bold>{`<A:\\${item.header}: `}</Bold>
          {item.body}
        </TextContainer>
      </StyledRoadmapItem>
    </AikoFade>
  );
};

export default RoadmapItem;
