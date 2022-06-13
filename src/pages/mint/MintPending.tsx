import styled from "styled-components";

import bg from "../../assets/mint/pending.jpg";

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
`;

const MintPending = () => {
  return (
    <StyledMintPending>
      <Background src={bg} alt="background" />
      <Content>meow</Content>
    </StyledMintPending>
  );
};

export default MintPending;
