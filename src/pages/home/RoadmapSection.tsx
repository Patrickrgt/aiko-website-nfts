import styled from "styled-components";
import Header from "../../components/Header";

import Section from "../../components/Section";
import RoadmapSeason, { RoadmapSeasonType } from "./RoadmapSeason";

import charity from "../../assets/svgs/charity.svg";
import airdrop from "../../assets/svgs/airdrop.svg";
import headquarters from "../../assets/svgs/headquarters.svg";
import merch from "../../assets/svgs/merch.svg";
import artists from "../../assets/svgs/artists.svg";
import events from "../../assets/svgs/events.svg";
import question from "../../assets/svgs/question.svg";

const roadmap: RoadmapSeasonType[] = [
  {
    number: 1,
    name: "Temporis",
    items: [
      {
        icon: charity,
        header: "Charity",
        body: "Holders will decide between 3 charities to donate every month.",
        percent: 0,
      },
      {
        icon: airdrop,
        header: "Airdrop",
        body: "Exclusive genesis Aiko NFTs on Foundation will be airdropped to holders, in addition to 1/1 physical merch such as high quality t-shirts, hoodies, etc.",
        percent: 0,
      },
      {
        icon: headquarters,
        header: "Headquarters",
        body: "Creation of a physical shared space for the Aiko team work together.",
        percent: 0,
      },
    ],
  },
  {
    number: 2,
    name: "Solutum",
    items: [
      {
        icon: merch,
        header: "Official Merch",
        body: "Launch of our official store website, where NFT holders and the public are able to purchase quality merch (Some merch will be unique and exclusive for our holders).",
        percent: 0,
      },
      {
        icon: artists,
        header: "Supporting artists",
        body: "We will start to support NFT artists, and aikommunity are going to help us to choose what artists we will support! How? Buying their NFTs and Airdropping to holders.",
        percent: 0,
      },
      {
        icon: events,
        header: "Events",
        body: "Aiko will take the world by storm and we want you to join us on our plans for world domination! (Translation: Aiko brand will spread across the world)",
        percent: 0,
      },
    ],
  },
  {
    number: 3,
    name: "Exodus",
    items: [
      {
        icon: question,
        header: "????",
        body: "??????????",
        percent: 0,
      },
    ],
  },
];

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const RoadmapContainer = styled.div`
  position: relative;
  display: grid;
  max-width: 182rem;
  margin: auto;

  padding: 0 14rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 1400px) {
    padding: 0 6rem;
    grid-column-gap: 6rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
    grid-column-gap: 3rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RoadmapSection = () => {
  return (
    <Section id="roadmap-scroll">
      <Container>
        <HeaderContainer>
          <Header>A:\Virtualmap</Header>
        </HeaderContainer>
        <ContentContainer>
          <RoadmapContainer>
            {roadmap.map((season) => (
              <RoadmapSeason key={season.name} season={season} />
            ))}
          </RoadmapContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default RoadmapSection;
