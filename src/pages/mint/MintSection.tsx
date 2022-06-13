import { useState } from "react";
import styled from "styled-components";

import Connector from "../../components/Connector";
import Hexify from "../../components/Hexify";
import MintButton from "./MintButton";
import MintInput from "./MintInput";
import MintProgress from "./MintProgess";

import mintIllustration from "../../assets/mint/mint-illustration.svg";
import decal from "../../assets/mint/decal.svg";
import MintStage from "./MintStage";
import { useMintsRemaining } from "../../contracts/views";

const TopSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

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

const Image = styled.img`
  height: 30rem;
`;

const Icon = styled.img`
  height: 5.8rem;
`;

interface Props {
  action: () => void;
}

const MintSection = ({ action }: Props) => {
  const [amount, setAmount] = useState<number | null>(null);
  const mintsRemaining = useMintsRemaining();

  const error = () => {
    if (!amount) return "";
    if (amount <= 0) return "Amount must be greater than 0";
    if (amount > mintsRemaining)
      return `Amount can't be more than ${mintsRemaining}`;
    return "";
  };

  return (
    <>
      <TopSection>
        <MintStage />
        <Connector relative yellow />
      </TopSection>
      <Image src={mintIllustration} alt="Mint illustration" />
      <MintInput
        max={mintsRemaining}
        amount={amount}
        setAmount={(v: number | null) => setAmount(v)}
        error={error()}
      />
      <Icon src={decal} alt="Mint decal" />
      <MintProgress />
      <MintButton
        amount={amount ?? 0}
        error={!amount || !!error()}
        action={action}
      />
    </>
  );
};

export default MintSection;
