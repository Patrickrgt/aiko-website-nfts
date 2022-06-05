import styled from "styled-components";

const StyledMintProgress = styled.div`
  position: relative;
  height: 2.8rem;
  border-radius: 1.4rem;
  width: 70%;
  background: #4c6596;
  padding: 4px;
`;

interface BarProps {
  percent: number;
}

const Bar = styled.div`
  height: 100%;
  width: ${(props: BarProps) => Math.round(props.percent * 100)}%;
  background: #90a8d1;
  border-radius: 1rem;
`;

const Text = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MintProgress = () => {
  const supply = 3333;
  const sold = 2543;
  const percent = sold / supply;

  return (
    <StyledMintProgress>
      <Bar percent={percent} />
      <Text>{`${sold.toLocaleString()}/${supply.toLocaleString()}`}</Text>
    </StyledMintProgress>
  );
};

export default MintProgress;
