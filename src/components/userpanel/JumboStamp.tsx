import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectShowingRewards,
  setShowingRewards,
  selectShowingStamp,
  setShowingStamp,
} from "../../state/uiSlice";
import star from "../../assets/placeholders/star.png";
import cursorhover from "../../assets/userpanel/cursorhover.png";
import { stampIndividual } from "./JumboStampSystem";

export interface StampType {
  image?: string;
  name: string;
  id: number;
  required: number;
  tier1?: any;
  tier2?: any;
  tier3?: boolean;
  visible: boolean;
}

const Stamp = styled.button`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  cursor: url(${cursorhover}), auto;
  transition: width ease 1.5s;
  background-color: #d8dbe0;
  width: ${(props: JumboStampSystemProps) => (props.active ? "0%" : "100%")};
`;

const StampShadow = styled.div`
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#494a4b" : ""};
  transition: background-color 0.2s;
  /* background-color: #494a4b; */
  padding: 0.35rem 0.215rem 1rem 0.25rem;
  clip-path: var(--notched-md);
`;

const StampContainer = styled.div`
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#ffba00" : ""};
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
  width: 200px;
  max-width: 200px;
  width: auto;
  height: 275px;
  transition: all ease 0.3s;
`;

const StampImg = styled.img`
  filter: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "saturate(50%)"};
  transform: scale(0.9) translateX(-3.75rem) translateY(-3rem);
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
      ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffba00)"
      : "linear-gradient(to bottom, rgba(255, 255, 255, 0), #EAEAEA)"};
  transition: background-color 0.6s;
  /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffba00); */
  bottom: 4rem;
  padding: 6rem 0 4rem 0;
`;

const StampTitle = styled.p`
  font-size: 2rem;
  color: white;
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#414141" : "#909295"};
  transition: background-color 0.8s;
  transition: margin 0.4s;
  clip-path: var(--notched-tp);
  margin-left: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "0.5rem"};
  margin-right: ${(props: JumboStampSystemProps) =>
    props.active ? "" : "0.5rem"};
  padding: 0.75rem 0 0.5rem 0;
`;

const StampCollected = styled.div`
  clip-path: var(--notched-md-bt);
  background-color: ${(props: JumboStampSystemProps) =>
    props.active ? "#fee390" : "#EAEAEA"};
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
  stamp: StampType;
  show: () => void;
}

const JumboStamp = ({ stamp, show }: Props) => {
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingStamp);
  const [stampActive, setActive] = useState(false);

  const [change, setChange] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    stamp.visible = change;
    stamp = { ...stamp, visible: change };
    console.log(stamp.visible, stampIndividual[stamp.id].visible);
  }, [change]);

  return (
    <Stamp
      key={count}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => {
        if (!showing) {
          dispatch(setShowingStamp(true));
          show();
        }
      }}
      active={showing}
    >
      <StampShadow active={stampActive}>
        <StampContainer active={stampActive}>
          <StampImgContainer active={stampActive}>
            <StampImg active={stampActive} src={stamp.image} />
          </StampImgContainer>
          <StampContentContainer>
            <StampGradient active={stampActive} />
            <StampTitle active={stampActive}>{stamp.name}</StampTitle>
            <StampCollected active={stampActive}>
              <StampCollectedContainer>
                <StampCollectedStar active={stamp.tier1} src={star} />
                <StampCollectedStar active={stamp.tier2} src={star} />
                <StampCollectedStar active={stamp.tier3} src={star} />
              </StampCollectedContainer>
            </StampCollected>
          </StampContentContainer>
        </StampContainer>
      </StampShadow>
    </Stamp>
  );
};

export default JumboStamp;
