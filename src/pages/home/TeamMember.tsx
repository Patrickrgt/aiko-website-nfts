import styled from "styled-components";
import AikoFade from "../../components/AikoFade";
import Hexify from "../../components/Hexify";

export interface TeamMemberType {
  image: string;
  name: string;
  role: string;
}

const Container = styled.div`
  position: relative;
`;

const OrangeBorder = styled.div`
  background: #fcd04d;
  clip-path: var(--hex);
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTeamMember = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1;
`;

const InnerBorder = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #8493b9;
  padding: 2px;
  clip-path: var(--hex);
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  clip-path: var(--hex);
`;

const NumberContainer = styled.div`
  position: absolute;
  right: 7px;
  bottom: 5%;
`;

const Number = styled.div`
  font-size: 3rem;
  color: white;
  height: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;

interface Props {
  index: number;
  teamMember: TeamMemberType;
}

const TeamMember = ({ index, teamMember }: Props) => {
  return (
    <AikoFade>
      <Container>
        <StyledTeamMember>
          <OrangeBorder />
          <InnerBorder>
            <Image
              src={teamMember.image}
              alt={`${teamMember.name} profile picture`}
            />
          </InnerBorder>
        </StyledTeamMember>
        <NumberContainer>
          <Hexify>
            <Number>{`#000${index}`}</Number>
          </Hexify>
        </NumberContainer>
      </Container>
    </AikoFade>
  );
};

export default TeamMember;
