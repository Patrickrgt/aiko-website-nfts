import styled from "styled-components";

import Hexify from "../../components/Hexify";
import timer from "../../assets/mint/timer.svg";
import {
  useFirstSaleEndTime,
  useFirstSaleStartTime,
  useSecondSaleStartTime,
  useSecondSaleEndTime,
  useHolderSaleStartTime,
  useHolderSaleEndTime,
} from "../../contracts/views";
import { useTick } from "../../app/hooks/use-tick";

const Stage = styled.div`
  position: relative;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.7rem;
  text-transform: uppercase;
  color: white;
  font-size: 1.9rem;
  font-weight: 400;
`;

const CountdownContainer = styled.div`
  height: 100%;
  padding: 4px;
  background: #a9cbef;
  display: flex;
  clip-path: polygon(
    6% 0%,
    94% 0%,
    100% 25%,
    100% 75%,
    94% 100%,
    6% 100%,
    0% 75%,
    0% 25%
  );
  margin-left: 0.7rem;
`;

const Image = styled.img`
  height: 100%;
  margin-right: 0.8rem;
`;

const Countdown = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  font-weight: 900;
  color: #44679a;
  letter-spacing: 0rem;
  margin-right: 4px;
`;

const padZeros = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const MintStage = () => {
  const tick = useTick();

  const now = new Date().getTime() / 1000;

  const fistSaleStartTime = useFirstSaleStartTime();
  const firstSaleEndTime = useFirstSaleEndTime();
  const secondSaleEndTime = useSecondSaleEndTime();
  const holderSaleEndTime = useHolderSaleEndTime();

  const stage = () => {
    if (now < fistSaleStartTime) return "error1";
    if (now <= firstSaleEndTime) return "one";
    if (now <= secondSaleEndTime) return "two";
    if (now <= holderSaleEndTime) return "three";
    return "error2";
  };

  const stageEnd = () => {
    if (now <= firstSaleEndTime) return new Date(firstSaleEndTime * 1000);
    if (now <= secondSaleEndTime) return new Date(secondSaleEndTime * 1000);
    if (now <= holderSaleEndTime) return new Date(holderSaleEndTime * 1000);
    return new Date();
  };

  const remaining = stageEnd().getTime() - new Date().getTime();

  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <Hexify dark>
      <Stage>
        {`<stage ${stage()}>`}
        <CountdownContainer>
          <Image src={timer} alt="image" />
          <Countdown>{`${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
            seconds
          )}`}</Countdown>
        </CountdownContainer>
      </Stage>
    </Hexify>
  );
};

export default MintStage;
