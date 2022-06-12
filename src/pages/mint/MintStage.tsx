import styled from "styled-components";

import Hexify from "../../components/Hexify";

const Stage = styled.div`
  position: relative;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  text-transform: uppercase;
  color: white;
  font-size: 1.9rem;
  font-weight: 400;
`;

const MintStage = () => {
  return (
    <Hexify dark>
      <Stage>{"<stage one>"}</Stage>
    </Hexify>
  );
};

export default MintStage;
