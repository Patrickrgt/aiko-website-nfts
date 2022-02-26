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
  margin-bottom: 3rem;
`;

const IconBorder = styled.div`
  height: 10rem;
  aspect-ratio: 1;
  clip-path: var(--hex);
  background: #c3d0e1;
  padding: 1px;
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
  height: 70%;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
  font-size: 2.3rem;
  font-weight: 400;
  color: #456893;
`;

const Bold = styled.span`
  font-size: 2.3rem;
  font-weight: 500;
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
        <Bold>{`<A:\\${item.header}:`}</Bold>
        {item.body}
      </TextContainer>
    </StyledRoadmapItem>
  );
};

export default RoadmapItem;
