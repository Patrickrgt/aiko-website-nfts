import { useState } from "react";
import styled from "styled-components";

import chase from "../../assets/team-members/chase.jpg";
import AikoHex from "../../components/AikoHex";

const aikos: string[] = [
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
  chase,
];

const StyledGallerySlide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

interface AikoProps {
  index: number;
  active: boolean;
}

const AikoContainer = styled.div`
  position: absolute;
  z-index: ${(props: AikoProps) =>
    props.active ? 101 : Math.round(Math.random() * 100)};
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
  cursor: pointer;

  transition: all 0.5s ease-in-out;
  filter: ${(props: AikoProps) => (props.active ? "none" : "saturate(0)")};
`;

const GallerySlide = () => {
  const [active, setActive] = useState(Math.floor(Math.random() * 12));

  return (
    <StyledGallerySlide>
      {aikos.map((aiko: string, index: number) => (
        <AikoContainer
          index={index}
          active={index === active}
          onMouseEnter={() => setActive(index)}
        >
          <AikoHex image={aiko} />
        </AikoContainer>
      ))}
    </StyledGallerySlide>
  );
};

export default GallerySlide;
