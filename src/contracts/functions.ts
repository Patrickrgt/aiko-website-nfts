import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

import abi from "./aiko.json";

export const useMintFree = () => {
  const globals = useGlobals();

  const { state: mintFreeState, send: mintFree } = useContract(
    globals.AIKO,
    abi,
    "freeAiko",
    "Mint free Aiko"
  );
  return { mintFreeState, mintFree };
};

export const useMintFirstOrb = () => {
  const globals = useGlobals();

  const { state: mintFirstOrbState, send: mintFirstOrb } = useContract(
    globals.AIKO,
    abi,
    "firstCyberOrbAiko",
    "Mint first orb"
  );
  return { mintFirstOrbState, mintFirstOrb };
};

export const useMintSecondOrb = () => {
  const globals = useGlobals();

  const { state: mintSecondtOrbState, send: mintSecondOrb } = useContract(
    globals.AIKO,
    abi,
    "secondCyberOrbAiko",
    "Mint second orb"
  );
  return { mintSecondtOrbState, mintSecondOrb };
};

export const useMintHolders = () => {
  const globals = useGlobals();

  const { state: mintHoldersState, send: mintHolders } = useContract(
    globals.AIKO,
    abi,
    "publicAikoSale",
    "Mint public"
  );
  return { mintHoldersState, mintHolders };
};
