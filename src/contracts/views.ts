import { useContractCall } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
import useGlobals from "../app/hooks/use-globals";

import abi from "./aiko.json";

export const useTeamPrice = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "TEAM_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useFirstOrbPrice = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "FIRST_ORB_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useSecondOrbPrice = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "SECOND_ORB_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useHolderPrice = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "HOLDER_PRICE",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useTeamMax = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "TEAM_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useFirstOrbMax = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "FIRST_ORB_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useSecondOrbMax = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "SECOND_ORB_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useHolderMax = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "HOLDER_MAX",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useFirstSaleStartTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "firstSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useFirstSaleEndTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "firstSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useSecondSaleStartTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "secondSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useSecondSaleEndTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "secondSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useHolderSaleStartTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "holderSaleStartTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export const useHolderSaleEndTime = () => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "holderSaleEndTime",
    args: [],
  }) ?? [BigNumber.from(0)];

  return value;
};

export interface AccountInfo {
  freeMinted: BigNumber;
  purchasedFirst: BigNumber;
  purchasedSecond: BigNumber;
  purchasedHolder: BigNumber;
}

export const useAccountInfo = (): AccountInfo => {
  const globals = useGlobals();

  const [value] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.AIKO,
    method: "accountInfo",
    args: [],
  }) ?? [
    {
      freeMinted: BigNumber.from(0),
      purchasedFirst: BigNumber.from(0),
      purchasedSecond: BigNumber.from(0),
      purchasedHolder: BigNumber.from(0),
    },
  ];

  return value;
};
