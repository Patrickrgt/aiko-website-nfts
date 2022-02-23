import styled from "styled-components";

export interface TeamMemberType {
  image: string;
  name: string;
  role: string;
}

const StyledTeamMember = styled.div`
  display: flex;
  background: pink;
  width: 100%;
  aspect-ratio: 1;
`;

interface Props {
  index: number;
  teamMember: TeamMemberType;
}

const TeamMember = ({ index, teamMember }: Props) => {
  return <StyledTeamMember>meow</StyledTeamMember>;
};

export default TeamMember;
