import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import explorer from "../../assets/userpanel/explorer.png";

import cursorhover from "../../assets/userpanel/cursorhover.png";

export interface EditionJumboType {
  image: string;
  name: string;
  character: string;
  required: number;
  tier1: boolean;
  tier2: boolean;
  tier3: boolean;
}

const Stamp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  cursor: url(${cursorhover}), auto;
`;

const StampShadow = styled.div`
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#494a4b" : "#494a4b"};
  transition: background-color 0.2s;
  /* background-color: #494a4b; */
  padding: 0.35rem 0.215rem 1rem 0.25rem;
  clip-path: var(--notched-md);
`;

const StampContainer = styled.div`
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#72D2FF" : "#BDBDBD"};
  transition: background-color 0.4s;
  padding: 0.5rem;
  clip-path: var(--notched-md);
`;

const StampImgContainer = styled.div`
  background-color: #799eff;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(30%)"};
  opacity: ${(props: JumboStampSystemProps) => (props.active ? "1" : "0.70")};
  clip-path: var(--notched-md-tp);
  width: 250px;
  max-width: 250px;
  width: auto;
  height: 350px;
  max-height: 375px;
  transition: all ease 0.3s;
`;

const StampImg = styled.img`
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(50%)"};
  transform: scale(1.05) translateY(1rem);
  transition: all ease 0.3s;
`;

const StampContentContainer = styled.div`
  position: relative;
`;

const StampGradient = styled.div`
  position: absolute;
  width: 100%;
  background-image: ${(props: JumboStampSystemProps) =>
    props.active
      ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), #69A0F3)"
      : "linear-gradient(to bottom, rgba(255, 255, 255, 0), #EAEAEA)"};
  transition: background-color 0.6s;
  /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffba00); */
  bottom: 4rem;
  padding: 6rem 0 4rem 0;
`;

const StampTitle = styled.p`
  font-size: 3rem;
  color: white;
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#414141" : "#909295"};
  transition: background-color 0.8s;
  transition: margin 0.4s;
  clip-path: var(--notched-tp);
  padding: 0.75rem 0 0.5rem 0;
`;

const StampCollected = styled.div`
  clip-path: var(--notched-md-bt);
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#69A0F3" : "#EAEAEA"};
  transition: background-color 0.6s;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const StampCollectedContainer = styled.div``;

const StampCollectedStar = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 0.25rem;
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "grayscale(1)"};
`;

interface JumboStampSystemProps {
  active?: boolean;
}

interface Props {
  editionJumbo: EditionJumboType;
}

const StampEditionJumbo = ({ editionJumbo }: Props) => {
  const [stampActive, setActive] = useState(false);

  return (
    <Stamp
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <StampShadow active={editionJumbo.tier1}>
        <StampContainer active={editionJumbo.tier1}>
          <StampImgContainer active={editionJumbo.tier1}>
            <StampImg active={editionJumbo.tier1} src={editionJumbo.image} />
          </StampImgContainer>
          <StampContentContainer>
            <StampGradient active={editionJumbo.tier1} />
            <StampTitle active={editionJumbo.tier1}>
              {editionJumbo.character}
            </StampTitle>
            <StampCollected active={editionJumbo.tier1}>
              <StampCollectedContainer>
                <StampCollectedStar active={editionJumbo.tier1} src={star} />
                <StampCollectedStar active={editionJumbo.tier2} src={star} />
                <StampCollectedStar active={editionJumbo.tier3} src={star} />
              </StampCollectedContainer>
            </StampCollected>
          </StampContentContainer>
        </StampContainer>
      </StampShadow>
    </Stamp>
  );
};

export default StampEditionJumbo;
