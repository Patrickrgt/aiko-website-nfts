import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

import abi from "./aiko.json";

export const useWrap = () => {
  const globals = useGlobals();

  const { state: wrapState, send: wrap } = useContract(
    globals.AIKO,
    abi,
    "deposit",
    "Wrap"
  );
  return { wrapState, wrap };
};
