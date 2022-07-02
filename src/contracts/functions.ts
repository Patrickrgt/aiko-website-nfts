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
