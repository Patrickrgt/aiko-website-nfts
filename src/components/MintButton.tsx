import styled from "styled-components";
import Hexify from "./Hexify";

const ButtonArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.7rem;
`;

const Countdown = styled.div`
  font-size: 3.7vh;
  font-weight: 500;
  color: white;
  margin: 0 1.327vh;
  display: flex;
  align-items: center;
`;

const MintButton = () => {
  return (
    <Hexify>
      <ButtonArea>
        <Countdown>Sold Out!</Countdown>
      </ButtonArea>
    </Hexify>
  );
};

export default MintButton;
