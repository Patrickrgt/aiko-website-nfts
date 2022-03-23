import { useState } from "react";
import styled from "styled-components";

import AikoHex from "../../components/AikoHex";

import a1 from "../../assets/gallery/01.jpg";
import a2 from "../../assets/gallery/02.jpg";
import a3 from "../../assets/gallery/03.jpg";
import a4 from "../../assets/gallery/04.jpg";
import a5 from "../../assets/gallery/05.jpg";
import a6 from "../../assets/gallery/06.jpg";
import a7 from "../../assets/gallery/07.jpg";
import a8 from "../../assets/gallery/08.jpg";
import a9 from "../../assets/gallery/09.jpg";
import a10 from "../../assets/gallery/10.jpg";
import a11 from "../../assets/gallery/11.jpg";
import a12 from "../../assets/gallery/12.jpg";
import a13 from "../../assets/gallery/13.jpg";
import a14 from "../../assets/gallery/14.jpg";
import a15 from "../../assets/gallery/15.jpg";
import chase from "../../assets/team-members/chase.jpg";
import crystal from "../../assets/team-members/crystal.jpg";
import garrid from "../../assets/team-members/garrid.jpg";
import kyo from "../../assets/team-members/kyo.jpg";
import matarelli from "../../assets/team-members/matarelli.jpg";
import vinne from "../../assets/team-members/vinne.jpg";

const aikos: string[] = [
  a8,
  kyo,
  garrid,
  garrid,
  matarelli,
  crystal,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  chase,
  vinne,
  kyo,
  garrid,
  matarelli,
];

const StyledGallerySlide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const Aiko = styled.div`
  position: absolute;
  cursor: pointer;

  top: ${(props: AikoProps) =>
    props.index % 3 === 0
      ? "0"
      : (props.index + 2) % 3 === 0
      ? "calc((100vh - 18rem - 27rem) / 4)"
      : "calc((100vh - 18rem - 27rem) / 2)"};
  left: ${(props: AikoProps) =>
    `calc(((100vh - 18rem - 27rem) / 2) * ${Math.floor(props.index / 3)} - ${
      (props.index + 2) % 3 === 0 ? "((100vh - 18rem - 27rem) / 4)" : "0px"
    })`};
  height: calc((100vh - 18rem - 27rem) / 2);
  width: calc((100vh - 18rem - 27rem) / 2);
  @media only screen and (max-width: 1400px) {
    top: ${(props: AikoProps) =>
      props.index % 3 === 0
        ? "0"
        : (props.index + 2) % 3 === 0
        ? "calc((100vh - 16rem - 20rem) / 4)"
        : "calc((100vh - 16rem - 20rem) / 2)"};
    left: ${(props: AikoProps) =>
      `calc(((100vh - 16rem - 20rem) / 2) * ${Math.floor(props.index / 3)} - ${
        (props.index + 2) % 3 === 0 ? "((100vh - 16rem - 20rem) / 4)" : "0px"
      })`};
    height: calc((100vh - 16rem - 20rem) / 2);
    width: calc((100vh - 16rem - 20rem) / 2);
  }
  @media only screen and (max-width: 600px) {
    top: ${(props: AikoProps) =>
      props.index % 3 === 0
        ? "0"
        : (props.index + 2) % 3 === 0
        ? "calc(100vw / 4)"
        : "calc(100vw / 2)"};
    left: ${(props: AikoProps) =>
      `calc((100vw / 2) * ${Math.floor(props.index / 3)} - ${
        (props.index + 2) % 3 === 0 ? "(100vw / 4)" : "0px"
      })`};
    height: calc(100vw / 2);
    width: calc(100vw / 2);
  }
`;

const AikoShadow = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(35px);
`;

interface AikoProps {
  index: number;
  active: boolean;
}

const AikoContainer = styled.div`
  height: 100%;
  transition: all 0.5s;
  filter: ${(props: AikoProps) =>
    props.active ? "none" : "saturate(0) contrast(0.2) brightness(1.8)"};

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, white, transparent, transparent);
    z-index: 300;
    opacity: ${(props: AikoProps) => (props.active ? "0" : "1")};
    clip-path: var(--hex);
  }
`;

interface Props {
  setMainAiko: (aiko: string) => void;
}

const GallerySlide = ({ setMainAiko }: Props) => {
  const [active, setActive] = useState(13);

  return (
    <StyledGallerySlide>
      {aikos.map((aiko: string, index: number) => (
        <Aiko
          index={index}
          active={index === active}
          onMouseEnter={() => setActive(index)}
          style={{ zIndex: index === active ? 20 : index }}
          onClick={() => setMainAiko(aiko)}
        >
          <AikoShadow />
          <AikoContainer active={index === active} index={index}>
            <AikoHex image={aiko} />
          </AikoContainer>
        </Aiko>
      ))}
    </StyledGallerySlide>
  );
};

export default GallerySlide;
