import styled from "styled-components";

export interface TeamMemberType {
  image: string;
  name: string;
  role: string;
}

const StyledTeamMember = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1;
  padding: 5px;
  background: #fcd04d;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

const InnerBorder = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #8493b9;
  padding: 2px;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

interface Props {
  index: number;
  teamMember: TeamMemberType;
}

const TeamMember = ({ index, teamMember }: Props) => {
  return (
    <StyledTeamMember>
      <InnerBorder>
        <Image
          src={teamMember.image}
          alt={`${teamMember.name} profile picture`}
        />
      </InnerBorder>
    </StyledTeamMember>
  );
};

export default TeamMember;
