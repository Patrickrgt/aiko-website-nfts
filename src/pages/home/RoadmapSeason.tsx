import styled from "styled-components";
import RoadmapItem, { RoadmapItemType } from "./RoadmapItem";

export interface RoadmapSeasonType {
  number: number;
  name: string;
  items: RoadmapItemType[];
}

const StyledRoadmapSeason = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 2.8rem;
  font-weight: 400;
  color: #456893;
`;

const BoldHeader = styled.span`
  font-size: 2.8rem;
  font-weight: 500;
  color: #456893;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.8rem;
  font-weight: 600;
  color: #ffab63;
  margin-bottom: 2rem;
`;

const SubHeaderLine = styled.div`
  width: 3rem;
  height: 5px;
  background: #ffab63;
`;

interface Props {
  season: RoadmapSeasonType;
}

const RoadmapSeason = ({ season }: Props) => {
  return (
    <StyledRoadmapSeason>
      <HeaderContainer>
        Season <BoldHeader>{`${season.number}.0`}</BoldHeader>
      </HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderLine />
        {season.name}
      </SubHeaderContainer>
      {season.items.map((item) => (
        <RoadmapItem key={item.header} item={item} />
      ))}
    </StyledRoadmapSeason>
  );
};

export default RoadmapSeason;
