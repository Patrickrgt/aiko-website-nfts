import styled from "styled-components";
import Header from "../../components/Header";

import Section from "../../components/Section";
import RoadmapSeason, { RoadmapSeasonType } from "./RoadmapSeason";

import girl from "../../assets/illustrations/roadmap-girl.png";
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
      },
      {
        icon: airdrop,
        header: "Airdrop",
        body: "Exclusive genesis Aiko NFTs on Foundation will be airdropped to holders, in addition to 1/1 physical merch such as high quality t-shirts, hoodies, etc.",
      },
      {
        icon: headquarters,
        header: "Headquarters",
        body: "Creation of a physical shared space for the Aiko team work together.",
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
        body: "Launch of our official store website, where NFT holders and the public are able to purchase quality merch (some merch will be unique and exclusive for our holders).",
      },
      {
        icon: artists,
        header: "Supporting artists",
        body: "We will start to support NFT artists, and aikommunity will help us to choose what artists we will support! How you will do that? Buying their NFTs and airdropping for holders.",
      },
      {
        icon: events,
        header: "Events",
        body: "Aiko will take the world by storm and we want you to join us on our plans for world domination! (Translation: Aiko brand will spread across the world)",
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

const Background = styled.img`
  position: absolute;
  top: 0;
  height: 105%;

  left: 2vw;
  @media only screen and (max-width: 1400px) {
    left: -3vw;
  }
  @media only screen and (max-width: 600px) {
    left: -10vw;
    opacity: 0.8;
  }
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

  max-width: 80rem;
  margin-left: 42vw;
  @media only screen and (max-width: 1400px) {
    max-width: calc(58vw - 3rem);
  }
  @media only screen and (max-width: 600px) {
    max-width: none;
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const RoadmapSection = () => {
  return (
    <Section id="roadmap-scroll">
      <Container>
        <Background src={girl} alt="Roadmap Aiko" />
        <HeaderContainer>
          <Header>A:\Virtualmap</Header>
        </HeaderContainer>
        <ContentContainer>
          <RoadmapContainer>
            {roadmap.map((season) => (
              <RoadmapSeason season={season} />
            ))}
          </RoadmapContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default RoadmapSection;
