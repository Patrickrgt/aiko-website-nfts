import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";
import teamDecal from "../../assets/svgs/team-decal.svg";
import TeamMember, { TeamMemberType } from "./TeamMember";

import chase from "../../assets/team-members/chase.jpg";
import crystal from "../../assets/team-members/crystal.jpg";
import garrid from "../../assets/team-members/garrid.jpg";
import kinoko from "../../assets/team-members/kinoko.jpg";
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
    role: "Project Manager",
    twitter: "https://twitter.com/garridspen",
  },
  {
    image: matarelli,
    name: "Matarelli",
    role: "Community Manager",
    twitter: "https://twitter.com/yourboyez",
  },
  {
    image: crystal,
    name: "Crystal",
    role: "Social Media Manager",
    twitter: "https://twitter.com/chromedcrystals",
  },
  {
    image: kinoko,
    name: "Kinoko",
    role: "Technical Advisory",
    twitter: "https://twitter.com/shroom_chan",
  },

  {
    image: chase,
    name: "Chase",
    role: "Developer",
    twitter: "https://twitter.com/chase_manning_",
  },
  {
    image: kiwi,
    name: "Kiwi",
    role: "Developer",
    twitter: "https://twitter.com/0xKiwi_",
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
  grid-gap: 5px;

  width: 66%;
  max-width: 120rem;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 600px) {
    width: calc(100vw - 6rem);
    max-width: none;
    grid-template-columns: repeat(2, 1fr);
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

const OrangeBanner = styled.div`
  height: 90%;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  background: #ffcf5f;
`;

const OrangeDecal = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  height: 57%;
  @media only screen and (max-width: 600px) {
    height: 30%;
  }
`;

const LeftDecal = styled(OrangeDecal)`
  left: 0;
`;

const RightDecal = styled(OrangeDecal)`
  right: 0;
  transform: translateY(-50%) rotate(180deg);
`;

const TeamSection = () => {
  return (
    <Section id="team-scroll" logo>
      <Content>
        <HeaderContainer>
          <Header>A:\Team</Header>
        </HeaderContainer>
        <TeamContainer>
          <OrangeBanner />
          <LeftDecal src={teamDecal} alt="Orange decal" />
          <RightDecal src={teamDecal} alt="Orange decal" />
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
