import styled from "styled-components";
import AikoFade from "../../components/AikoFade";
import Hexify from "../../components/Hexify";

export interface TeamMemberType {
  image?: string;
  name: string;
  role: string;
}

const Container = styled.div`
  position: relative;
  cursor: pointer;

  :hover {
    div {
      opacity: 1;
    }
  }
`;

const OrangeBorder = styled.div`
  background: #fcd04d;
  clip-path: var(--hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 10px);
  height: calc(100% + 10px);
  @media only screen and (max-width: 1400px) {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
  }
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

const SecretMember = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(45deg, #799ece, #93aedb);
  clip-path: var(--hex);
`;

const NumberContainer = styled.div`
  position: absolute;

  right: 7px;
  bottom: 5%;
  @media only screen and (max-width: 1400px) {
    right: 3px;
    bottom: 5%;
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  height: 4.2rem;
  padding: 0 1.5rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2.4rem;
    height: 3.5rem;
    padding: 0 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: pink;
  opacity: 0;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  color: white;
  font-weight: 600;

  font-size: 3.5rem;
  @media only screen and (max-width: 1400px) {
    font-size: 3rem;
  }
`;

const Role = styled.div`
  color: white;
  font-weight: 600;

  font-size: 1.6rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
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
            {teamMember.image && (
              <Image
                src={teamMember.image}
                alt={`${teamMember.name} profile picture`}
              />
            )}
            {!teamMember.image && <SecretMember />}
            <Overlay>
              <OverlayContent>
                <Name>{teamMember.name}</Name>
                <Role>{teamMember.role}</Role>
              </OverlayContent>
            </Overlay>
          </InnerBorder>
        </StyledTeamMember>
        <NumberContainer>
          <Hexify>
            <Number>{index === 7 ? "#????" : `#000${index}`}</Number>
          </Hexify>
        </NumberContainer>
      </Container>
    </AikoFade>
  );
};

export default TeamMember;
