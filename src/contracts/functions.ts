import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";
import * as CryptoJS from "crypto-js";

import abiStamps from "./aikostamps.json";
import abi from "./aiko.json";
import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

const CONTRACT_ADDR = "0x7f60e977a7b9677be1795efe5ad5516866ab69a6";

type StampType = number;

export async function fetchDiscount(
  aikoAPI: string,
  existsId: number,
  stampsHeld: number,
  key: string
): Promise<string> {
  try {
    const response = await fetch(`${aikoAPI}/get-discount/${existsId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const object = {
      rewards: stampsHeld >= 9 ? 3 : stampsHeld >= 6 ? 2 : 1,
      wallet: data.discount_codes[0].code,
    };
    return encrypt(object, key);
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
}

export async function postDiscount(
  aikoAPI: string,
  walletAddress: string,
  stampsHeld: number,
  key: string
): Promise<string> {
  try {
    const response = await fetch(`${aikoAPI}/get-discounts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const discounts = data.price_rules;

    const exists = discounts.find(
      (discount: any) => discount.title === walletAddress
    );

    if (exists) {
      return fetchDiscount(aikoAPI, exists.id, stampsHeld, key);
    }

    const couponCode = generateRandomCouponCode(10);
    const object = {
      rewards: stampsHeld >= 9 ? 3 : stampsHeld >= 6 ? 2 : 1,
      wallet: couponCode,
    };
    const encryptedObject = encrypt(object, key);

    let products: string[] = [];

    if (stampsHeld >= 9) {
      products = [
        "gid://shopify/Product/8312585650467",
        "gid://shopify/Product/8312587583779",
        "gid://shopify/Product/8312588566819",
      ];
    } else if (stampsHeld >= 6) {
      products = [
        "gid://shopify/Product/8312585650467",
        "gid://shopify/Product/8312587583779",
      ];
    } else if (stampsHeld >= 3) {
      products = ["gid://shopify/Product/8312585650467"];
    }

    const basicCodeDiscount = {
      title: `${walletAddress}`,
      code: `${couponCode}`,
      startsAt: "2022-06-21T00:00:00Z",
      endsAt: "2023-09-21T00:00:00Z",
      customerSelection: { all: true },
      customerGets: {
        value: { percentage: 1 },
        items: {
          products: {
            productsToAdd: products,
          },
        },
      },
      appliesOncePerCustomer: false,
      usageLimit: 1,
    };

    const postResponse = await fetch(`${aikoAPI}/generate-discount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ basicCodeDiscount }),
    });

    if (!postResponse.ok) {
      throw new Error(`HTTP error! status: ${postResponse.status}`);
    }

    return encryptedObject;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export function toBase64Url(base64: string): string {
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
}

export function fromBase64Url(base64url: string): string {
  base64url = base64url.replace("-", "+").replace("_", "/");
  while (base64url.length % 4) {
    base64url += "=";
  }
  return base64url;
}

export function encrypt(object: Record<string, unknown>, key: string): string {
  const objectString: string = JSON.stringify(object);
  const ciphertext = CryptoJS.AES.encrypt(objectString, key);
  return toBase64Url(ciphertext.toString());
}

export interface DecryptedObject {
  rewards: number;
  wallet: number;
}

export function decrypt(ciphertext: string, key: string): DecryptedObject {
  const bytes = CryptoJS.AES.decrypt(fromBase64Url(ciphertext), key);
  const decryptedData: string = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData) as DecryptedObject;
}

export function isValidDecryptedObject(object: any): object is DecryptedObject {
  return (
    object &&
    typeof object === "object" &&
    "rewards" in object &&
    "wallet" in object
  );
}

export function generateRandomCouponCode(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

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
