import styled from "styled-components";
import { useEthers } from "@usedapp/core";

import Hexify from "../../components/Hexify";
import timer from "../../assets/mint/timer.svg";
import {
  useFirstSaleEndTime,
  useSecondSaleEndTime,
  useHolderSaleEndTime,
  useStage,
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
  vertical-align: middle;
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

const Countdown = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  font-weight: 900;
  color: #44679a;
  letter-spacing: 0rem;
  margin-right: 4px;
  vertical-align: middle;
`;

const padZeros = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const MintStage = () => {
  const { account } = useEthers();

  const tick = useTick();
  const stage = useStage();
  const firstSaleEndTime = useFirstSaleEndTime();
  const secondSaleEndTime = useSecondSaleEndTime();
  const holderSaleEndTime = useHolderSaleEndTime();

  const stageEnd = () => {
    if (!account) return new Date();
    if (stage === "one") return new Date(firstSaleEndTime * 1000);
    if (stage === "two") return new Date(secondSaleEndTime * 1000);
    if (stage === "three") return new Date(holderSaleEndTime * 1000);
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
        {`<stage ${stage.substring(0, 1) === "e" ? "one" : stage}>`}
        {account && (
          <CountdownContainer>
            <Image src={timer} alt="image" />
            <Countdown>{`${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
              seconds
            )}`}</Countdown>
          </CountdownContainer>
        )}
      </Stage>
    </Hexify>
  );
};

export default MintStage;
