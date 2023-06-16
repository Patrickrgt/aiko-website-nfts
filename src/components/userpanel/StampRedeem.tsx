// import dotenv from "dotenv";
import React, { useState, useEffect } from "react";
// import { BigNumber } from "ethers";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as CryptoJS from "crypto-js";
import { selectGlobalAccount, selectStampsHeld } from "../../state/uiSlice";
import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";

interface DecryptedObjectShape {
  rewards: number;
  wallet: number;
}

interface BasicCodeDiscount {
  title: string;
  code: string;
  startsAt: string;
  endsAt: string;
  customerSelection: { all: boolean };
  customerGets: {
    value: { percentage: number };
    items: {
      products: {
        productsToAdd: string[];
      };
    };
  };
  appliesOncePerCustomer: boolean;
  usageLimit: number;
}

const RedeemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  padding: 0 0.75vh;
  background-color: #b3b5c5;
  clip-path: var(--notched-tp);
`;

const ShippingText = styled.span`
  padding-top: 1.5vh;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.425vh;
  font-weight: 800;
  color: white;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

const ShippingPrice = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ead182;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

// const DiscountCode = styled.div`
//   position: relative;
//   width: 100px;
//   height: 100px;
//   font-size: 18px;
// `;

const StampRedeem = () => {
  const walletAddress = useSelector(selectGlobalAccount);

  // const ShopifyKey = process.env.SHOPIFY_API_PASSWORD;
  const url = "http://localhost:3000/";

  // const [title, setTitle] = useState("");
  // const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [shortWallet, setShortWallet] = useState("");
  const [addProducts, setAddProducts] = useState([""]);
  const [disabled, setDisabled] = useState(false);

  const [encryptedObject, setEncryptedObject] = useState("");
  const [decryptedObject, setDecryptedObject] = useState<DecryptedObjectShape>({
    rewards: 0,
    wallet: 0,
  });

  const [basicCodeDiscount, setBasicCodeDiscount] = useState<BasicCodeDiscount>(
    {
      title: "",
      code: "",
      startsAt: "",
      endsAt: "",
      customerSelection: { all: false },
      customerGets: {
        value: { percentage: 0 },
        items: {
          products: {
            productsToAdd: [""],
          },
        },
      },
      appliesOncePerCustomer: false,
      usageLimit: 0,
    }
  );

  const [key] = useState("aikoaikoaiko");

  const stampsHeld = useSelector(selectStampsHeld);

  function toBase64Url(base64: string): string {
    return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
  }

  function fromBase64Url(base64url: string): string {
    base64url = base64url.replace("-", "+").replace("_", "/");
    while (base64url.length % 4) {
      base64url += "=";
    }
    return base64url;
  }

  function encrypt(object: object, key: string): string {
    const objectString: string = JSON.stringify(object);
    const ciphertext = CryptoJS.AES.encrypt(objectString, key);
    return toBase64Url(ciphertext.toString());
  }

  function decrypt(ciphertext: string, key: string): DecryptedObjectShape {
    const bytes = CryptoJS.AES.decrypt(fromBase64Url(ciphertext), key);
    const decryptedData: string = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }

  function isValidDecryptedObject(object: any): object is DecryptedObjectShape {
    return (
      object &&
      typeof object === "object" &&
      "rewards" in object &&
      "wallet" in object
    );
  }

  useEffect(() => {
    if (walletAddress) {
      const firstFive = walletAddress.slice(0, 5);
      const lastFive = walletAddress.slice(-5);
      setShortWallet(`${firstFive}...${lastFive}`);
    }
  }, [walletAddress]);

  useEffect(() => {
    if (encryptedObject) {
      console.log("Encrypted object:", encryptedObject);
      window.open(`${url}?coupon=${encryptedObject}`, "_blank");

      // Set basicCodeDiscount with the decrypted object
      setBasicCodeDiscount({
        title: `${walletAddress}`,
        code: `${encryptedObject}`,
        startsAt: "2022-06-21T00:00:00Z",
        endsAt: "2023-09-21T00:00:00Z",
        customerSelection: { all: true },
        customerGets: {
          value: { percentage: 1 },
          items: {
            products: {
              productsToAdd: addProducts,
            },
          },
        },
        appliesOncePerCustomer: false,
        usageLimit: 1,
      });
      const object = decrypt(encryptedObject, key);
      if (isValidDecryptedObject(object)) {
        setDecryptedObject(object);
        console.log("Decrypted object:", object);
      } else {
        console.error(
          "Decrypted object does not have the expected shape:",
          object
        );
      }
    }
  }, [encryptedObject, key]);

  useEffect(() => {
    const postDiscount = async () => {
      try {
        fetch("/get-discounts")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(async (data) => {
            // Do something with 'data', which contains the response from the Express endpoint
            const discounts = data.price_rules;
            const exists = discounts.find(
              (discount: any) => discount.title === walletAddress
            );

            if (exists) {
              console.log(
                "Discount exists. Will not generate new discount:",
                exists
              );
            } else {
              console.log(
                "No discount found with the title. Generating new discount:",
                walletAddress
              );
              const response = await fetch("/generate-discount", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ basicCodeDiscount }),
              });

              const data = await response.json();

              if (response.ok) {
                setResult(
                  `Discount code created: ${data.discountCode.codeDiscount.codes.nodes[0].code}`
                );
              } else {
                setResult(`Error: ${data.errors[0].message}`);
              }
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        setResult(`Error: ${(error as Error).message}`);
      }
    };
    console.log(basicCodeDiscount);
    postDiscount();
  }, [basicCodeDiscount]);

  const handleButtonClick = async () => {
    // const walletCode = BigNumber.from(walletAddress);
    // const decimalString = walletCode.toString();
    // const number = Number(decimalString);

    if (stampsHeld >= 9) {
      const object = {
        rewards: 3,
        wallet: shortWallet,
      };
      await setAddProducts([
        "gid://shopify/Product/8312585650467",
        "gid://shopify/Product/8312587583779",
        "gid://shopify/Product/8312588566819",
      ]);
      await setEncryptedObject(encrypt(object, key));
    } else if (stampsHeld >= 6) {
      const object = {
        rewards: 2,
        wallet: shortWallet,
      };
      await setAddProducts([
        "gid://shopify/Product/8312585650467",
        "gid://shopify/Product/8312587583779",
      ]);
      await setEncryptedObject(encrypt(object, key));
    } else if (stampsHeld >= 3) {
      const object = {
        rewards: 1,
        wallet: shortWallet,
      };
      await setAddProducts(["gid://shopify/Product/8312585650467"]);
      await setEncryptedObject(encrypt(object, key));
    } else {
      setDisabled(true);
    }
  };

  return (
    <RedeemContainer>
      <ShippingText>
        SHIPPING FEE: &nbsp; <ShippingPrice>ETA</ShippingPrice>
      </ShippingText>
      <ButtonBlue
        disabled={disabled}
        close={() => {
          handleButtonClick();
        }}
        content="REDEEM"
      />

      <DecorHorizontal height={3} />
      {/* <DiscountCode>{result}</DiscountCode> */}
    </RedeemContainer>
  );
};

export default StampRedeem;
