// Ethers
import { useContractCall } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
// AlchemySDK
import { Network, Alchemy } from "alchemy-sdk";

import useGlobals from "../app/hooks/use-globals";
// useDApp useCall
import abi from "./aiko.json";

// Alchemy settings
const settings = {
  apiKey: "8iVRJ1Rswjzp0S3ySwiWOaS0jtoZ4uRg", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

export const getAikoHoldings = async (
  account: string
): Promise<string[] | undefined> => {
  if (account) {
    const response = await alchemy.nft.getNftsForOwner(account, {
      pageSize: 100,
      contractAddresses: ["0xb661ab9bcd2878c5f8c136f67fd550a9d7df7197"],
    });
    return response.ownedNfts.map((prop: any) =>
      prop.media[0].gateway.toString()
    );
  }
};

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

// export function useBalanceOf(): number[] | undefined {
//   const { account } = useEthers();
//   const ids = Array.from({ length: 12 }, (_, i) => i + 1);
//   const { value, error } =
//     useCall(
//       {
//         contract: ContractInstance,
//         method: "balanceOfBatch",
//         args: [ids.map((_) => account), ids],
//       },
//       {
//         chainId: 137,
//       }
//     ) ?? {};
//   if (error) {
//     console.error(error.message);
//     return undefined;
//   }
//   return value?.[0].map((result: BigNumber) => Number(result));
// }
