import styled from "styled-components";
import AikoFade from "../../components/AikoFade";
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
  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 300;
  color: #456893;

  font-size: 3rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const BoldHeader = styled.span`
  font-weight: 600;
  color: #456893;
  margin-left: 0.3rem;

  font-size: 3rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #ffab63;

  font-size: 3rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.1rem;
    margin-bottom: 1.9rem;
  }
`;

const SubHeaderLine = styled.div`
  background: #ffab63;
  margin-right: 4px;

  height: 5px;
  width: 8rem;
  @media only screen and (max-width: 1400px) {
    height: 4px;
    width: 6rem;
  }
  @media only screen and (max-width: 600px) {
    height: 3px;
    width: 4rem;
  }
`;

interface Props {
  season: RoadmapSeasonType;
}

const RoadmapSeason = ({ season }: Props) => {
  return (
    <StyledRoadmapSeason>
      <AikoFade>
        <HeaderContainer>
          Season<BoldHeader>{`${season.number}.0`}</BoldHeader>
        </HeaderContainer>
        <SubHeaderContainer>
          <SubHeaderLine />
          {season.name}
        </SubHeaderContainer>
      </AikoFade>
      {season.items.map((item, index) => (
        <RoadmapItem
          key={item.header}
          item={item}
          first={index === 0}
          last={index === season.items.length - 1}
        />
      ))}
    </StyledRoadmapSeason>
  );
};

export default RoadmapSeason;
