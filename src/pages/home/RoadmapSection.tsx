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
        body: "Airdrop exclusive genesis Aiko NFTs to holders, in addition to 1/1 merch such as high quality t-shirts and hoodies (see Season 2).",
      },
      {
        icon: headquarters,
        header: "Headquarters",
        body: "We gonna be creating a space for our team work together full time in Aiko, and preparing the deliveres for Season 2.",
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
        body: "We gonna be launching our ecommerce for Public and Holders buy our merch and more. Merch will be unique and exclusive such an Aiko is / Holders gonna be receiving exclusive pieces and unique collections.",
      },
      {
        icon: artists,
        header: "Supporting artists",
        body: "We gonna be showing new artists for our community and every single artist we going support will be airdropped for holders.",
      },
      {
        icon: events,
        header: "Events",
        body: "The Aiko brand will be propagated around the world and our community will be a part of this.",
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
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const RoadmapContainer = styled.div`
  position: relative;
  margin-left: 42vw;

  max-width: 80rem;
  @media only screen and (max-width: 1400px) {
    max-width: calc(58vw - 3rem);
  }
`;

const RoadmapSection = () => {
  return (
    <Section id="roadmap-scroll" socials logo>
      <Container>
        <Background src={girl} alt="Roadmap Aiko" />
        <Header>A:\Virtualmap</Header>
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
