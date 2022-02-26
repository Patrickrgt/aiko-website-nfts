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
  margin-top: 4rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
  font-weight: 300;
  color: #456893;
`;

const BoldHeader = styled.span`
  font-size: 3rem;
  font-weight: 600;
  color: #456893;
  margin-left: 0.3rem;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: #ffab63;
  margin-bottom: 3rem;
`;

const SubHeaderLine = styled.div`
  width: 8rem;
  height: 5px;
  background: #ffab63;
  margin-right: 4px;
`;

interface Props {
  season: RoadmapSeasonType;
}

const RoadmapSeason = ({ season }: Props) => {
  return (
    <StyledRoadmapSeason>
      <HeaderContainer>
        Season<BoldHeader>{`${season.number}.0`}</BoldHeader>
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
