import { useState } from "react";
import styled from "styled-components";
import Connector from "../../components/Connector";
import Hexify from "../../components/Hexify";
import MintButton from "./MintButton";
import MintInput from "./MintInput";
import MintProgress from "./MintProgess";

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stage = styled.div`
  height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.7rem;
  text-transform: uppercase;
  color: white;
  font-size: 1.9rem;
  font-weight: 400;
`;

const Image = styled.div`
  height: 25rem;
  aspect-ratio: 1;
  background: pink;
`;

const Icon = styled.div`
  height: 6rem;
  aspect-ratio: 1;
  background: pink;
`;

const MintSection = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const max = 2;

  const error = () => {
    if (!amount) return "";
    if (amount <= 0) return "Amount must be greater than 0";
    if (amount > max) return `Amount must be less than ${max}`;
    return "";
  };

  return (
    <>
      <TopSection>
        <Hexify dark>
          <Stage>{"<stage one>"}</Stage>
        </Hexify>
        <Connector dark />
      </TopSection>
      <Image />
      <MintInput
        amount={amount}
        setAmount={(v: number | null) => setAmount(v)}
        error={error()}
      />
      <Icon />
      <MintProgress />
      <MintButton amount={amount ?? 0} error={!amount || !!error()} />
    </>
  );
};

export default MintSection;
