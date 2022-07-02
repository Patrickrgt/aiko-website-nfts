import { useContractCall } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
import useGlobals from "../app/hooks/use-globals";

import abi from "./aiko.json";

export const useTotalSupply = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "totalSupply",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};
