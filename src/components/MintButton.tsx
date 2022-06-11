import styled from "styled-components";
import { useTick } from "../app/hooks/use-tick";
import Hexify from "./Hexify";

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  top: 39%;
  left: calc(5.7% + 2.7rem);
  width: 33.1%;
  height: 27%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ButtonArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.7rem;
`;

const StyledMintButton = styled.button`
  position: relative;
  height: 5.4vh;
  padding: 0 1.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4e73a4;
  cursor: pointer;
  clip-path: polygon(
    9.5% 0%,
    90.5% 0%,
    100% 25%,
    100% 75%,
    90.5% 100%,
    9.5% 100%,
    0% 75%,
    0% 25%
  );

  :disabled {
    filter: saturate(0) brightness(1.4);
    cursor: not-allowed;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-1px);
`;

const Text = styled.div`
  font-size: 2.4rem;
  font-size: 2.34vh;
  font-weight: 400;
`;

const WhiteText = styled(Text)`
  color: white;
`;

const YellowText = styled(Text)`
  color: #fed56c;
`;

const Countdown = styled.div`
  font-size: 3.7vh;
  font-weight: 500;
  color: white;
  margin: 0 1.327vh;
  display: flex;
  align-items: center;
`;

const CountdownHighlight = styled.div`
  font-size: 3.7vh;
  font-weight: 500;
  color: #ffd46c;
`;

const padZeros = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const MintButton = () => {
  const disabled = true;

  const tick = useTick();
  const END = new Date(1656172800000);
  const now = new Date();
  const remaining = END.getTime() - now.getTime();

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <ButtonContainer>
      <Hexify>
        <ButtonArea>
          <StyledMintButton
            disabled={disabled}
            onClick={() => console.log("meow")}
          >
            <ButtonContent>
              <YellowText>{"<"}</YellowText>
              <WhiteText>mint.exe</WhiteText>
              <YellowText>{">"}</YellowText>
            </ButtonContent>
          </StyledMintButton>
          <Countdown>
            <CountdownHighlight>{padZeros(days)}</CountdownHighlight>
            {`:${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)}`}
          </Countdown>
        </ButtonArea>
      </Hexify>
    </ButtonContainer>
  );
};

export default MintButton;
