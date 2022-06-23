import { useContractCall, useEthers } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
import useGlobals from "../app/hooks/use-globals";
import { useTick } from "../app/hooks/use-tick";

import abi from "./aiko.json";
import freeProofs from "./freeProofs.json";
import firstOrbProofs from "./firstOrbProofs.json";
import secondOrbProofs from "./secondOrbProofs.json";

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

export const useTeamPrice = (): BigNumber => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "TEAM_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useFirstOrbPrice = (): BigNumber => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "FIRST_ORB_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useSecondOrbPrice = (): BigNumber => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "SECOND_ORB_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useHolderPrice = (): BigNumber => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "PUBLIC_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useTeamMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "TEAM_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useFirstOrbMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "FIRST_ORB_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useSecondOrbMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "SECOND_ORB_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useHolderMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "PUBLIC_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useWalletMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "WALLET_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useFirstSaleStartTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "firstSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useFirstSaleEndTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "firstSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useSecondSaleStartTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "secondSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useSecondSaleEndTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "secondSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useHolderSaleStartTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "publicSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useHolderSaleEndTime = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "publicSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export interface AccountInfo {
  freeMinted: number;
  purchasedFirst: number;
  purchasedSecond: number;
  purchasedHolder: number;
}

export const useAccountInfo = (): AccountInfo => {
  const { account } = useEthers();
  const globals = useGlobals();

  const [freeMinted, purchasedFirst, purchasedSecond, purchasedPublic] =
    useContractCall({
      abi: new utils.Interface(abi),
      address: globals.AIKO,
      method: "accountInfo",
      args: [account],
    }) ?? [
      BigNumber.from(3),
      BigNumber.from(3),
      BigNumber.from(3),
      BigNumber.from(3),
    ];

  return {
    freeMinted: Number(freeMinted.toString()),
    purchasedFirst: Number(purchasedFirst.toString()),
    purchasedSecond: Number(purchasedSecond.toString()),
    purchasedHolder: Number(purchasedPublic.toString()),
  };
};

export const useStage = (): string => {
  const { account } = useEthers();
  const tick = useTick();
  const now = new Date().getTime() / 1000;
  const fistSaleStartTime = useFirstSaleStartTime();
  const firstSaleEndTime = useFirstSaleEndTime();
  const secondSaleEndTime = useSecondSaleEndTime();
  const holderSaleEndTime = useHolderSaleEndTime();

  if (!account) return "error0";
  if (now < fistSaleStartTime) return "error1";
  if (now <= firstSaleEndTime) return "one";
  if (now <= secondSaleEndTime) return "two";
  if (now <= holderSaleEndTime) return "three";
  return "error2";
};

export const useMintsRemaining = (): number => {
  const { account } = useEthers();
  const accountInfo = useAccountInfo();
  const firstOrbMax = useFirstOrbMax();
  const secondOrbMax = useSecondOrbMax();
  const holderMax = useHolderMax();
  const walletMax = useWalletMax();
  const stage = useStage();
  const totalSupply = useTotalSupply();
  const firstSaleMax = useFirstSaleMax();

  const remaining =
    walletMax -
    (accountInfo.freeMinted +
      accountInfo.purchasedFirst +
      accountInfo.purchasedSecond +
      accountInfo.purchasedHolder);

  if (!account) return 0;

  if (stage === "one") {
    const data = (firstOrbProofs as any)[account];
    if (!data || !data.Amount) return 0;
    return Math.min(
      firstOrbMax - accountInfo.purchasedFirst,
      data.Amount - accountInfo.purchasedFirst,
      remaining,
      firstSaleMax >= totalSupply ? firstSaleMax - totalSupply : 0
    );
  }
  if (stage === "two") {
    const data = (secondOrbProofs as any)[account];
    if (!data || !data.Amount) return 0;
    return Math.min(
      secondOrbMax - accountInfo.purchasedSecond,
      data.Amount - accountInfo.purchasedSecond,
      remaining
    );
  }
  if (stage === "three") {
    return Math.min(holderMax - accountInfo.purchasedHolder, remaining);
  }
  return 0;
};

export const usePrice = (): BigNumber => {
  const stage = useStage();
  const firstOrbPrice = useFirstOrbPrice();
  const secondOrbPrice = useSecondOrbPrice();
  const holderPrice = useHolderPrice();

  if (stage === "one") return firstOrbPrice;
  if (stage === "two") return secondOrbPrice;
  if (stage === "three") return holderPrice;
  return BigNumber.from(0);
};

export const useIsPending = (): boolean => {
  const tick = useTick();
  const now = new Date().getTime() / 1000;
  const fistSaleStartTime = useFirstSaleStartTime();
  const firstSaleEndTime = useFirstSaleEndTime();
  const secondSaleStartTime = useSecondSaleStartTime();
  const secondSaleEndTime = useSecondSaleEndTime();
  const holderSaleStartTime = useHolderSaleStartTime();
  const holderSaleEndTime = useHolderSaleEndTime();

  if (now < fistSaleStartTime) return true;
  if (now > firstSaleEndTime && now < secondSaleStartTime) return true;
  if (now > secondSaleEndTime && now < holderSaleStartTime) return true;
  return false;
};

export const useNextStage = (): Date => {
  const tick = useTick();
  const now = new Date().getTime() / 1000;
  const fistSaleStartTime = useFirstSaleStartTime();
  const firstSaleEndTime = useFirstSaleEndTime();
  const secondSaleStartTime = useSecondSaleStartTime();
  const secondSaleEndTime = useSecondSaleEndTime();
  const holderSaleStartTime = useHolderSaleStartTime();

  if (now < fistSaleStartTime) return new Date(fistSaleStartTime * 1000);
  if (now > firstSaleEndTime && now < secondSaleStartTime)
    return new Date(secondSaleStartTime * 1000);
  if (now > secondSaleEndTime && now < holderSaleStartTime)
    return new Date(holderSaleStartTime * 1000);
  return new Date();
};

export const useMaxSupply = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "MAX_SUPPLY",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useSoldOut = (): boolean => {
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();
  if (maxSupply === 0) return false;
  return totalSupply === maxSupply;
};

export const useHasFreeMint = (): boolean => {
  const { account } = useEthers();
  const accountInfo = useAccountInfo();
  if (!account) return false;
  const data = (freeProofs as any)[account];
  if (!data || !data.Amount) return false;
  return data.Amount - accountInfo.freeMinted > 0;
};

export const useFirstSaleMax = (): number => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "FIRST_SALE_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return Number(value.toString());
};

export const useFirstSaleSoldOut = (): boolean => {
  const firstSaleMax = useFirstSaleMax();
  const totalSupply = useTotalSupply();

  if (firstSaleMax === 0) return false;
  if (totalSupply === 0) return false;
  if (totalSupply >= firstSaleMax) return true;
  return true;
};
