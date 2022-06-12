import styled from "styled-components";

import Hexify from "../../components/Hexify";
import timer from "../../assets/mint/timer.svg";

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

const MintStage = () => {
  return (
    <Hexify dark>
      <Stage>
        {"<stage one>"}
        <CountdownContainer>
          <Image src={timer} alt="image" />
          <Countdown>12:12:12</Countdown>
        </CountdownContainer>
      </Stage>
    </Hexify>
  );
};

export default MintStage;
