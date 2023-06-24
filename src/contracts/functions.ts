import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";

import abiStamps from "./aikostamps.json";
import abi from "./aiko.json";
import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

const CONTRACT_ADDR = "0x7f60e977a7b9677be1795efe5ad5516866ab69a6";

type StampType = number;

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

export const useStamps = (
  provider: ethers.providers.Provider | undefined,
  chainId: number
) => {
  const [stamps, setStamps] = useState<StampType[] | null>(null);
  const { account } = useEthers();

  useEffect(() => {
    const getStamps = async () => {
      try {
        if (!provider || !account) return;

        const correctProvider = new ethers.providers.JsonRpcProvider(
          "https://polygon-mainnet.g.alchemy.com/v2/3UDAJ-dKtgB2PZHnFpfpGxz1xPM1WzI9"
        );

        const contract = new ethers.Contract(
          CONTRACT_ADDR,
          abiStamps,
          correctProvider
        );
        const ids = Array.from({ length: 12 }, (_, i) => i + 1);
        const results = await contract.balanceOfBatch(
          Array(ids.length).fill(account), // array of addresses
          ids // array of ids
        );
        const parsedResult = results.map((result: BigNumber) => Number(result));
        setStamps(parsedResult);
      } catch (error) {
        console.error("Failed to fetch stamps", error);
      }
    };

    getStamps();
  }, [provider, account, chainId]); // Update stamps whenever the account, provider, or chainId changes

  return stamps;
};
