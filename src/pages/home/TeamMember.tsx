import styled from "styled-components";
import AikoFade from "../../components/AikoFade";

import twitter from "../../assets/svgs/twitter.svg";
import decal from "../../assets/svgs/team-decal.png";

export interface TeamMemberType {
  image?: string;
  name: string;
  role: string;
  twitter: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImageBorder = styled.div`
  padding: 3px;
  background: #42689a;
  clip-path: polygon(
    6% 0%,
    94% 0%,
    100% 6%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 6%
  );
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  clip-path: polygon(
    5.5% 0%,
    94.5% 0%,
    100% 5.5%,
    100% 94.5%,
    94.5% 100%,
    5.5% 100%,
    0% 94.5%,
    0% 5.5%
  );
`;

const Image = styled.img`
  width: 100%;
`;

const DecalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  right: 0;
  width: 22%;
  height: 42%;
  background: linear-gradient(
    to bottom,
    #42689a 0%,
    #42689a 70%,
    transparent 71%,
    transparent 100%
  );
`;

const DecalBlue = styled.div`
  width: 100%;
  background: #42689a;
  aspect-ratio: 1;
  clip-path: var(--hex);
  padding: 5px;
`;

const DecalWhite = styled.div`
  width: 100%;
  background: var(--bg);
  aspect-ratio: 1;
  clip-path: var(--hex);
  padding: 5px;
`;

const DecalIcon = styled.img`
  width: 100%;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #42689a;
  transform: translateY(-1px);

  height: 5.6rem;
  padding: 1rem 0.7rem;
  @media only screen and (max-width: 1360px) {
    height: 5rem;
  }
  @media only screen and (max-width: 600px) {
    height: 4.5rem;
    padding: 0.8rem 0.7rem;
  }
`;

interface LineProps {
  width: number;
}

const Line = styled.div`
  height: 100%;
  width: ${(props: LineProps) => props.width}px;
  background: #ffce61;
  margin-right: 2px;
`;

const Bio = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 0.4rem;
`;

const Name = styled.div`
  font-weight: 600;
  line-height: 1;
  color: var(--bg);

  font-size: 2.2rem;
  @media only screen and (max-width: 1360px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Role = styled.div`
  font-weight: 600;
  color: var(--bg);
  line-height: 1;
  opacity: 0.9;

  font-size: 1.2rem;
  @media only screen and (max-width: 1360px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TwitterLink = styled.a`
  opacity: 0.5;
  cursor: pointer;

  height: 80%;
  @media only screen and (max-width: 600px) {
    height: 70%;
  }
`;

const TwitterImage = styled.img`
  height: 100%;
`;

interface Props {
  teamMember: TeamMemberType;
}

const TeamMember = ({ teamMember }: Props) => {
  return (
    <AikoFade>
      <Container>
        <ImageBorder>
          <ImageContainer>
            <Image
              src={teamMember.image}
              alt={`${teamMember.name} profile picture`}
            />
            <DecalContainer>
              <DecalBlue>
                <DecalWhite>
                  <DecalIcon src={decal} alt="Decal icon" />
                </DecalWhite>
              </DecalBlue>
            </DecalContainer>
          </ImageContainer>
        </ImageBorder>
        <Details>
          <Line width={2} />
          <Line width={3} />
          <Line width={5} />
          <Bio>
            <Name>{teamMember.name}</Name>
            <Role>{teamMember.role}</Role>
          </Bio>
          <TwitterLink
            href={teamMember.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterImage src={twitter} alt="twitter icon" />
          </TwitterLink>
        </Details>
      </Container>
    </AikoFade>
  );
};

export default TeamMember;
