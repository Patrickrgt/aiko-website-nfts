import styled from "styled-components";
import play from "../assets/svgs/play.svg";
import pause from "../assets/svgs/question.svg";
import frog from "../assets/illustrations/frog.svg";
import { useTick } from "../app/hooks/use-tick";

const StyledMusic = styled.div`
  display: flex;
  position: fixed;
  transform: translate(0, 0);
  z-index: 3;

  bottom: 7rem;
  left: 7rem;
  height: 7rem;
  @media only screen and (max-width: 1400px) {
    bottom: 3rem;
    left: 3rem;
    height: 6rem;
  }
  @media only screen and (max-width: 600px) {
    bottom: 1.5rem;
    left: 1.5rem;
    height: 4.5rem;
  }
`;

const PlayButton = styled.button`
  height: 100%;
  aspect-ratio: 1;
  cursor: pointer;
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
  z-index: 1;

  transform: scale(1);
  transition: 0.3s all;
  :hover {
    transform: scale(1.05);
  }
`;

const PlayIcon = styled.img`
  height: 45%;
`;

const Details = styled.div`
  height: 100%;
  aspect-ratio: 3;
  background: linear-gradient(45deg, #b5cde9, white);
  clip-path: polygon(
    5% 0%,
    95% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    5% 100%,
    0% 90%,
    0% 10%
  );
  padding: 0.8rem 0.9rem;
  display: flex;
  flex-direction: column;
`;

const DetailsText = styled.div`
  font-weight: 600;
  color: #2a3441;
  line-height: 1;

  font-size: 1.6rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
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
  height: 172%;
`;

const audio = new Audio("/assets/aiko-theme.mp3");

const Music = () => {
  const tick = useTick();

  audio.volume = 0.65;

  const seconds = Math.round(audio.currentTime % 60);
  const minutes = Math.floor(audio.currentTime / 60);

  const padWithLeadingZeros = (number: number, length = 2) => {
    let string = number.toString();
    while (string.length < length) {
      string = `0${string}`;
    }
    return string;
  };

  return (
    <StyledMusic>
      <PlayButton
        onClick={() => {
          audio.paused ? audio.play() : audio.pause();
        }}
      >
        <PlayIcon src={audio.paused ? play : pause} alt="Play Icon" />
      </PlayButton>
      <Details>
        <DetailsText>{"A:\\01.>"}</DetailsText>
        <DetailsText>{`${padWithLeadingZeros(minutes)}:${padWithLeadingZeros(
          seconds
        )}`}</DetailsText>
      </Details>
      <ImageContainer>
        <Frog src={frog} alt="Frog" />
      </ImageContainer>
    </StyledMusic>
  );
};

export default Music;
