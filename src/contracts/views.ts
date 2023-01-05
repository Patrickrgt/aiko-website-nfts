import { useContractCall, useCall, useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils, BigNumber } from "ethers";
import useGlobals from "../app/hooks/use-globals";

import abi from "./aiko.json";
import abiStamps from "./aikostamps.json";

const CONTRACT_ADDR = "0x7f60e977a7b9677be1795efe5ad5516866ab69a6";
const Interface = new utils.Interface(abiStamps);
const ContractInstance = new Contract(CONTRACT_ADDR, Interface);

export const useTotalSupply = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "totalSupply",
    args: [1],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export function useBalanceOf(): number[] | undefined {
  const { account } = useEthers();
  const ids = Array.from({ length: 12 }, (_, i) => i + 1);
  const { value, error } =
    useCall(
      {
        contract: ContractInstance,
        method: "balanceOfBatch",
        args: [ids.map((_) => account), ids],
      },
      {
        chainId: 137,
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0].map((result: BigNumber) => Number(result));
}
