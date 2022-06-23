import styled from "styled-components";

import bg from "../../assets/mint/pending.jpg";
import decal from "../../assets/mint/pending-decal.svg";
import timer from "../../assets/mint/pending-timer.svg";
import {
  useFirstSaleSoldOut,
  useIsPending,
  useNextStage,
  useStage,
} from "../../contracts/views";
import { useTick } from "../../app/hooks/use-tick";

const StyledMintPending = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Decal = styled.img`
  width: 100%;
  width: 61rem;
`;

const Text = styled.div`
  font-weight: 700;
  color: #43679a;
  text-align: center;
  text-transform: uppercase;
  line-height: 0.8;
`;

const TopText = styled(Text)`
  font-size: 7rem;
`;

const BottomText = styled(Text)`
  font-size: 8.3rem;
`;

const Countdown = styled.div`
  display: flex;
  align-items: center;
  width: 61rem;
  height: 12rem;
  background: #43679a;
  padding: 1.5rem;
  margin-top: 1rem;
  clip-path: polygon(
    5% 0%,
    95% 0%,
    100% 25%,
    100% 75%,
    95% 100%,
    5% 100%,
    0% 75%,
    0% 25%
  );
`;

const Icon = styled.img`
  height: 100%;
`;

const Numbers = styled.div`
  height: 100%;
  flex: 1;
  font-size: 10rem;
  color: white;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const padZeros = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const MintPending = () => {
  const tick = useTick();
  const time = useNextStage();
  const show = useIsPending();
  const firstSaleSoldOut = useFirstSaleSoldOut();
  const stage = useStage();

  if (!show || !(stage === "one" && firstSaleSoldOut)) return null;

  const remaining = time.getTime() - new Date().getTime();

  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <StyledMintPending>
      <Background src={bg} alt="background" />
      <Content>
        <Decal src={decal} alt="decal" />
        <TopText>next mint stage</TopText>
        <BottomText>will begin in</BottomText>
        <Countdown>
          <Icon src={timer} alt="timer icon" />
          <Numbers>{`${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
            seconds
          )}`}</Numbers>
        </Countdown>
      </Content>
    </StyledMintPending>
  );
};

export default MintPending;
