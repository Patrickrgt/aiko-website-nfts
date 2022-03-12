import styled from "styled-components";
import AikoFade from "../../components/AikoFade";
import Social from "../../components/Social";

import twitter from "../../assets/svgs/twitter.svg";

export interface TeamMemberType {
  image?: string;
  name: string;
  role: string;
  twitter: string;
}

const Container = styled.div`
  position: relative;

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
  @media only screen and (max-width: 600px) {
    width: calc(100% + 6px);
    height: calc(100% + 6px);
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

const SocialsContainer = styled.div`
  position: absolute;

  right: 7px;
  bottom: 5%;
  @media only screen and (max-width: 1400px) {
    right: 3px;
    bottom: 5%;
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
  @media only screen and (max-width: 1400px) {
    font-size: 2.2rem;
  }
`;

const Role = styled.div`
  color: white;
  font-weight: 600;

  font-size: 1.6rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 1.2rem;
  }
`;

interface Props {
  teamMember: TeamMemberType;
}

const TeamMember = ({ teamMember }: Props) => {
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
        {teamMember.image && (
          <SocialsContainer>
            <Social icon={twitter} link={teamMember.twitter} />
          </SocialsContainer>
        )}
      </Container>
    </AikoFade>
  );
};

export default TeamMember;
