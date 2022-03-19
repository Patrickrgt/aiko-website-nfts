import styled from "styled-components";
import play from "../assets/svgs/play.svg";
import frog from "../assets/illustrations/frog.svg";

const StyledMusic = styled.div`
  display: flex;
  position: fixed;
  height: 7rem;
  transform: translate(0, 0);
  z-index: 3;

  bottom: 7rem;
  left: 7rem;
  @media only screen and (max-width: 1400px) {
    bottom: 3rem;
    left: 3rem;
  }
  @media only screen and (max-width: 600px) {
    bottom: 1.5rem;
    left: 1.5rem;
  }
`;

const PlayButton = styled.button`
  height: 100%;
  aspect-ratio: 1;
  background: linear-gradient(45deg, #ffd062, #ffebbd);
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
`;

const PlayIcon = styled.img`
  height: 45%;
`;

const Details = styled.div`
  height: 100%;
  aspect-ratio: 3;
  background: linear-gradient(45deg, #b5cde9, white);
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 1;
`;

const Frog = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 160%;
`;

const Music = () => {
  return (
    <StyledMusic>
      <PlayButton>
        <PlayIcon src={play} alt="Play Icon" />
      </PlayButton>
      <Details>meow</Details>
      <ImageContainer>
        <Frog src={frog} alt="Frog" />
      </ImageContainer>
    </StyledMusic>
  );
};

export default Music;
