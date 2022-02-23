import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";
import teamDecal from "../../assets/svgs/team-decal.svg";
import TeamMember, { TeamMemberType } from "./TeamMember";
import chase from "../../assets/team-members/chase.jpg";

const teamMembers: TeamMemberType[] = [
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
  },
  {
    image: chase,
    name: "Chase Manning",
    role: "Developer",
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
  background-color: pink;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 66%;
  /* max-width: 100rem; */
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
  height: 57%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
    <Section socials logo index={4} bottomPlus>
      <Content>
        <HeaderContainer>
          <Header>A:\Team</Header>
        </HeaderContainer>
        <TeamContainer>
          <OrangeBanner />
          <LeftDecal src={teamDecal} alt="Orange decal" />
          <RightDecal src={teamDecal} alt="Orange decal" />
          <TeamMembers>
            {teamMembers.map((teamMember: TeamMemberType, index: number) => (
              <TeamMember
                key={teamMember.name}
                index={index}
                teamMember={teamMember}
              />
            ))}
          </TeamMembers>
        </TeamContainer>
      </Content>
    </Section>
  );
};

export default TeamSection;
