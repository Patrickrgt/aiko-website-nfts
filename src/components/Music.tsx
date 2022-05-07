import { useState } from "react";
import styled from "styled-components";
import play from "../assets/svgs/music-play.svg";
import pause from "../assets/svgs/music-pause.svg";
import next from "../assets/svgs/music-next.svg";
import frog from "../assets/illustrations/frog.svg";
import { useTick } from "../app/hooks/use-tick";
import AikoFade from "./AikoFade";

const StyledMusic = styled.div`
  display: flex;
  position: fixed;
  transform: translate(0, 0);
  z-index: 3;

  transition: 0.3s all;
  bottom: ${(props: Props) => (props.atBottom ? "12rem" : "7rem")};
  left: 7rem;
  height: 7rem;
  @media only screen and (max-width: 1400px) {
    bottom: ${(props: Props) => (props.atBottom ? "10rem" : "3rem")};
    left: 3rem;
    height: 5.5rem;
  }
  @media only screen and (max-width: 600px) {
    bottom: ${(props: Props) => (props.atBottom ? "8rem" : "1.5rem")};
    left: 1.5rem;
    height: 4.5rem;
  }
`;

const LeftSection = styled.div`
  height: 100%;
  width: 7rem;
  @media only screen and (max-width: 1400px) {
    width: 5.5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 4.5rem;
  }
  background: #ffd46c;
  clip-path: polygon(
    30% 0%,
    100% 0%,
    100% 0%,
    100% 100%,
    100% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  z-index: 1;

  transform: scale(1);
  transition: 0.3s all;
  :hover {
    transform: scale(1.05);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  height: calc(100% - 12px);
  background: #b8913f;
  display: flex;
  align-items: center;
  padding-left: 2px;

  clip-path: polygon(
    22% 0%,
    78% 0%,
    100% 30%,
    100% 70%,
    78% 100%,
    22% 100%,
    0% 70%,
    0% 30%
  );
`;

const Button = styled.button`
  height: 40%;
  margin-right: 2px;
  cursor: pointer;
`;

interface ButtonIconProps {
  rotate?: boolean;
}

const ButtonIcon = styled.img`
  height: 100%;
  transform: ${(props: ButtonIconProps) => props.rotate && "rotate(180deg)"};
`;

const Details = styled.div`
  height: 100%;
  width: 11.9rem;
  @media only screen and (max-width: 1400px) {
    width: 9rem;
  }
  @media only screen and (max-width: 600px) {
    width: 7.65rem;
  }
  background: #ffd46c;
  padding: 0.8rem 2.4rem;
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

  width: 7rem;
  @media only screen and (max-width: 1400px) {
    width: 6rem;
  }
  @media only screen and (max-width: 600px) {
    width: 4.5rem;
  }
`;

interface FrogProps {
  playing: boolean;
}

const Frog = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 172%;
  transition: 0.75s all;
  z-index: 2;
  transform: ${(props: FrogProps) =>
    props.playing ? "translateX(50%)" : "translateX(3%)"};
`;

const audio = new Audio("/assets/aiko-theme.mp3");

interface Props {
  atBottom: boolean;
}

const Music = ({ atBottom }: Props) => {
  const tick = useTick();
  const [active, setActive] = useState(false);

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
    <StyledMusic atBottom={atBottom}>
      <AikoFade>
        <LeftSection />
      </AikoFade>
      <AikoFade>
        <Details>
          <DetailsText>{"A:\\01.>"}</DetailsText>
          <DetailsText>{`${padWithLeadingZeros(minutes)}:${padWithLeadingZeros(
            seconds
          )}`}</DetailsText>
        </Details>
        <ImageContainer>
          <Frog playing={active} src={frog} alt="Frog" />
        </ImageContainer>
      </AikoFade>
      <ButtonContainer>
        <Button>
          <ButtonIcon rotate src={next} alt="Previous Icon" />
        </Button>
        <Button
          onClick={() => {
            if (audio.paused) {
              setActive(true);
              audio.play();
            } else {
              setActive(false);
              audio.pause();
            }
          }}
        >
          <ButtonIcon
            src={audio.paused ? play : pause}
            alt={`${audio.paused ? "Play" : "Pause"} Icon`}
          />
        </Button>
        <Button>
          <ButtonIcon src={next} alt="Next Icon" />
        </Button>
      </ButtonContainer>
    </StyledMusic>
  );
};

export default Music;
