import { useContractCall, useEthers } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
import useGlobals from "../app/hooks/use-globals";

import abi from "./aiko.json";
import stampabi from "./aikostamps.json";

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

export const useBalanceOf = () => {
  const globals = useGlobals();

  const { account } = useEthers();

  const [batchBalance] = useContractCall({
    abi: new utils.Interface(stampabi),
    address: globals.AIKO,
    method: "balanceOfBatch",
    args: [
      [
        account,
        account,
        account,
        account,
        account,
        account,
        account,
        account,
        account,
        account,
        account,
        account,
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ],
  }) ?? [BigNumber.from(0)];

  return batchBalance.toString();
};
