import styled from "styled-components";
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
  height: 4.9vh;
  padding: 0 1vh;
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
  font-size: 2.13vh;
  font-weight: 400;
`;

const WhiteText = styled(Text)`
  color: white;
`;

const YellowText = styled(Text)`
  color: #fed56c;
`;

const Countdown = styled.div`
  font-size: 3.55vh;
  color: white;
  margin: 0 1.2425vh;
`;

const MintButton = () => {
  const disabled = true;

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
          <Countdown>TBA</Countdown>
        </ButtonArea>
      </Hexify>
    </ButtonContainer>
  );
};

export default MintButton;
