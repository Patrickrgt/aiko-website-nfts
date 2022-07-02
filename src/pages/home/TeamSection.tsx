import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";
import TeamMember, { TeamMemberType } from "./TeamMember";

import chase from "../../assets/team-members/chase.jpg";
import crystal from "../../assets/team-members/crystal.jpg";
import garrid from "../../assets/team-members/garrid.jpg";
import shvrkboy from "../../assets/team-members/sharkboy.jpg";
import kyo from "../../assets/team-members/kyo.jpg";
import matarelli from "../../assets/team-members/matarelli.jpg";
import vinne from "../../assets/team-members/vinne.jpg";
import kiwi from "../../assets/team-members/kiwi.jpg";

const teamMembers: TeamMemberType[] = [
  {
    image: vinne,
    name: "Vinne",
    role: "Artist & Co founder",
    twitter: "https://twitter.com/vinneart",
  },
  {
    image: kyo,
    name: "Kyo",
    role: "Design & Co founder",
    twitter: "https://twitter.com/dyinginkyoto",
  },
  {
    image: garrid,
    name: "Garrid",
    role: "Project & Art Director",
    twitter: "https://twitter.com/garridspen",
  },
  {
    image: matarelli,
    name: "Matarelli",
    role: "Public Relations",
    twitter: "https://twitter.com/yourboyez",
  },
  {
    image: crystal,
    name: "Crystal",
    role: "Social Media Manager",
    twitter: "https://twitter.com/chromedcrystals",
  },
  {
    image: shvrkboy,
    name: "Shvrkboy",
    role: "Community Manager",
    twitter: "https://twitter.com/0xignorance",
  },
  {
    image: kiwi,
    name: "Kiwi",
    role: "Technical Advisory",
    twitter: "https://twitter.com/0xKiwi_",
  },
  {
    image: chase,
    name: "Chase",
    role: "Developer",
    twitter: "https://twitter.com/chase_manning_",
  },
];

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: relative;

  margin-bottom: 5rem;
  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
  }
`;

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamMembers = styled.div`
  position: relative;
  display: grid;

  width: 66%;
  max-width: 125rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.1rem;
  grid-column-gap: 2.1rem;
  @media only screen and (max-width: 600px) {
    width: calc(100vw - 3rem);
    margin-bottom: 7rem;
    max-width: none;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0.7rem;
    grid-column-gap: 1.5rem;
  }
`;

const TeamMembersBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  height: 100%;
  width: 75%;
`;

const TeamSection = () => {
  return (
    <Section id="team-scroll">
      <Content>
        <HeaderContainer>
          <Header>A:\Team</Header>
        </HeaderContainer>
        <TeamContainer>
          <TeamMembers>
            <TeamMembersBackground />
            {teamMembers.map((teamMember: TeamMemberType) => (
              <TeamMember key={teamMember.name} teamMember={teamMember} />
            ))}
          </TeamMembers>
        </TeamContainer>
      </Content>
    </Section>
  );
};

export default TeamSection;
