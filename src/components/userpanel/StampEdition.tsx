import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectShowingRewards, setShowingRewards } from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import cursorhover from "../../assets/userpanel/cursorhover.png";
import explorer1 from "../../assets/userpanel/explorer1.png";

export interface EditionType {
  image: string;
  name: string;
  collected: boolean;
}

const Stamp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem 0;
  text-align: center;
  cursor: url(${cursorhover}), auto;
`;

const StampShadow = styled.div`
  background-color: #494a4b;
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
  width: 175px;
  max-width: 175px;
  width: auto;
  height: 225px;
  transition: all ease 0.3s;
`;

const StampOverlay = styled.div`
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    clip-path: var(--notched);
    z-index: 2;
    background: ${(props: JumboStampSystemProps) =>
      props.active
        ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #282626)"
        : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #282626)"};
    transition: opacity 0.25s ease-out;
    padding-top: 6rem;
    opacity: ${(props: JumboStampSystemProps) => (props.active ? "0" : "1")};
  }
`;

const StampImg = styled.img`
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(50%)"};
  transition: all ease 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transform: scale(1.1) translateY(1rem);
`;

const StampContentContainer = styled.div`
  position: relative;
`;

const StampGradient = styled.div`
  position: absolute;
  width: 100%;
  background-image: ${(props: JumboStampSystemProps) =>
    props.active
      ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), #799eff)"
      : "linear-gradient(to bottom, rgba(255, 255, 255, 0), #A5A6A7)"};
  transition: background-color 0.6s;
  /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffba00); */
  bottom: 4rem;
  padding: 3rem 0 4rem 0;
`;

const StampTitle = styled.p`
  font-size: 2rem;
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
    props.active ? "#799eff" : "#A3A4A4"};
  transition: background-color 0.6s;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const StampCollectedContainer = styled.div``;

const StampCollectedText = styled.p`
  font-size: 1.75rem;
  text-shadow: ${(props: JumboStampSystemProps) =>
    props.active
      ? "-2px 2px 0 #2966d5, 2px 2px 0 #2966d5, 2px -2px 0 #2966d5, -2px -2px 0 #2966d5"
      : "-2px 2px 0 #7A7A7A, 2px 2px 0 #7A7A7A, 2px -2px 0 #7A7A7A, -2px -2px 0 #7A7A7A"};
  color: white;
  text-transform: uppercase;
`;

interface JumboStampSystemProps {
  active?: boolean;
}

interface Props {
  edition: EditionType;
}

const StampEdition = ({ edition }: Props) => {
  const [stampActive, setActive] = useState(false);

  return (
    <Stamp
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <StampShadow>
        <StampContainer active={edition.collected}>
          <StampImgContainer active={edition.collected}>
            {!edition.collected && <StampOverlay active={stampActive} />}

            <StampImg active={stampActive} src={edition.image} />
          </StampImgContainer>
          <StampContentContainer>
            <StampGradient active={edition.collected} />
            <StampTitle active={edition.collected}>{edition.name}</StampTitle>
            <StampCollected active={edition.collected}>
              <StampCollectedContainer>
                {edition.collected && (
                  <StampCollectedText active={edition.collected}>
                    Collected
                  </StampCollectedText>
                )}
                {!edition.collected && (
                  <StampCollectedText active={edition.collected}>
                    Locked
                  </StampCollectedText>
                )}
              </StampCollectedContainer>
            </StampCollected>
          </StampContentContainer>
        </StampContainer>
      </StampShadow>
    </Stamp>
  );
};

export default StampEdition;
