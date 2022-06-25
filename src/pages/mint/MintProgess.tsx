import { useEthers } from "@usedapp/core";
import styled from "styled-components";
import { useMaxSupply, useTotalSupply } from "../../contracts/views";

const StyledMintProgress = styled.div`
  position: relative;
  height: 4rem;
  border-radius: 2rem;
  width: 70%;
  background: #afcaec;
  border: solid 3px #4c6596;
  padding: 4px;
  cursor: default;

  transition: all 0.3s;
  :hover {
    border: solid 3px #afcaec;

    div:first-child {
      background: #afcaec;
    }
    div:last-child {
      color: #4c6596;
      font-size: 2.2rem;
      font-weight: 800;
    }
  }
`;

interface BarProps {
  percent: number;
}

const Bar = styled.div`
  height: 100%;
  width: ${(props: BarProps) => Math.round(props.percent * 100)}%;
  background: #4c6596;
  border-radius: 1.55rem;
  transition: all 0.3s;
`;

const Text = styled.div`
  color: white;
  font-size: 1.4rem;
  position: absolute;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
`;

const MintProgress = () => {
  const { account } = useEthers();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();

  const percent = maxSupply === 0 ? 0 : totalSupply / maxSupply;

  if (!account) return null;

  return (
    <StyledMintProgress>
      <Bar percent={percent} />
      <Text>{`${totalSupply.toLocaleString()}/${maxSupply.toLocaleString()}`}</Text>
    </StyledMintProgress>
  );
};

export default MintProgress;
