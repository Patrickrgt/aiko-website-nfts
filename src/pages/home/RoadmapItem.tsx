import styled from "styled-components";

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
`;

const IconBorder = styled.div`
  height: 12rem;
  aspect-ratio: 1;
  clip-path: var(--hex);
  background: #becae3;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 2.3rem;
  font-weight: 300;
  color: #456893;
  line-height: 1.5;
`;

const Bold = styled.span`
  font-size: 2.3rem;
  font-weight: 600;
  color: #456893;
`;

interface Props {
  item: RoadmapItemType;
}

const RoadmapItem = ({ item }: Props) => {
  return (
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
  );
};

export default RoadmapItem;
