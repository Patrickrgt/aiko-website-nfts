import { useEffect, useState } from "react";
import styled from "styled-components";
import { useEthers } from "@usedapp/core";
import {
  useMintFirstOrb,
  useMintFree,
  useMintHolders,
  useMintSecondOrb,
} from "../../contracts/functions";
import {
  useHasFreeMint,
  useMinted,
  useSoldOut,
  useWalletMax,
} from "../../contracts/views";

import freeProofs from "../../contracts/freeProofs.json";

const StyledFreeMint = styled.button`
  position: absolute;
  right: 3rem;
  height: 4.2rem;
  top: 8rem;
  height: 4.2rem;
  background: #ff6280;
  padding: 0 2.4rem;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;

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

  transition: filter 0.3s;
  :hover {
    filter: brightness(0.9);
  }
`;

const FreeMint = () => {
  const { account } = useEthers();
  const [minted, setMinted] = useState(0);
  const [amount, setAmount] = useState<number | null>(null);

  const hasFreeMint = useHasFreeMint();
  const { mintFirstOrbState } = useMintFirstOrb();
  const { mintSecondtOrbState } = useMintSecondOrb();
  const { mintHoldersState } = useMintHolders();
  const { mintFreeState, mintFree } = useMintFree();
  const walletMax = useWalletMax();
  const userMinted = useMinted();

  const soldOut = useSoldOut();

  const loading =
    mintFreeState.status === "Mining" ||
    mintFreeState.status === "PendingSignature" ||
    mintFirstOrbState.status === "Mining" ||
    mintFirstOrbState.status === "PendingSignature" ||
    mintSecondtOrbState.status === "Mining" ||
    mintSecondtOrbState.status === "PendingSignature" ||
    mintHoldersState.status === "Mining" ||
    mintHoldersState.status === "PendingSignature";

  const success =
    mintFreeState.status === "Success" ||
    mintFirstOrbState.status === "Success" ||
    mintSecondtOrbState.status === "Success" ||
    mintHoldersState.status === "Success";

  useEffect(() => {
    if (success) {
      if (amount) setMinted(amount);
      setAmount(null);
      return;
    }
    if (!loading) {
      setAmount(null);
    }
  }, [loading, success]);

  const mintFreeeee = () => {
    if (loading) return;
    if (!account) return;
    const data = (freeProofs as any)[account];
    if (!data || !data.Amount) return;
    mintFree(
      Math.min(walletMax - userMinted, data.Amount),
      data.Amount,
      data.Proof
    );
  };

  const actuallyHasFreeMint = hasFreeMint && minted === 0 && !soldOut;

  if (!actuallyHasFreeMint) return null;

  return (
    <StyledFreeMint onClick={mintFreeeee}>{"<freemint.exe>"}</StyledFreeMint>
  );
};

export default FreeMint;
