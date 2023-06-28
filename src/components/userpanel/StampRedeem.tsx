import React, { useState, useEffect } from "react";
// import { BigNumber } from "ethers";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as CryptoJS from "crypto-js";
import { selectGlobalAccount, selectStampsHeld } from "../../state/uiSlice";
import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";
// import Countdown from "./Countdown";

interface DecryptedObjectShape {
  rewards: number;
  wallet: number;
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
  font-size: 2.425vh;
  font-weight: 800;
  color: white;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

const ShippingHighlight = styled.span`
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  color: #ead182;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

const StampRedeem = () => {
  const walletAddress = useSelector(selectGlobalAccount);

  const url = "https://djdqhstqa-1e5c099867295609acf8.myshopify.dev/";
  const aikoAPI = process.env.REACT_APP_EXPRESS_SERVER_URL;
  const [disabled, setDisabled] = useState(false);
  const [encryptedObject, setEncryptedObject] = useState("");

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

  function generateRandomCouponCode(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const fetchDiscount = async (existsId: number) => {
    try {
      const response = await fetch(`${aikoAPI}/get-discount/${existsId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // setCode(data.discount_codes[0].code);
      console.log(data.discount_codes[0].code);
      const object = {
        rewards: stampsHeld >= 9 ? 3 : stampsHeld >= 6 ? 2 : 1,
        wallet: data.discount_codes[0].code,
      };
      setEncryptedObject(encrypt(object, key));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (encryptedObject) {
      console.log("Encrypted object:", encryptedObject);
      window.open(`${url}?coupon=${encryptedObject}`, "_blank");
      const object = decrypt(encryptedObject, key);
      if (isValidDecryptedObject(object)) {
        console.log("Decrypted object:", object);
      } else {
        console.error(
          "Decrypted object does not have the expected shape:",
          object
        );
      }
    }
  }, [encryptedObject, key]);

  async function postDiscount() {
    try {
      const response = await fetch(`${aikoAPI}/get-discounts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const discounts = data.price_rules;

      console.log(discounts);

      const exists = discounts.find(
        (discount: any) => discount.title === walletAddress
      );

      if (exists) {
        console.log(
          "Discount exists. Will not generate new discount:",
          exists.id
        );
        fetchDiscount(exists.id);
      } else {
        console.log(
          "No discount found with the title. Generating new discount:",
          walletAddress
        );
        const couponCode = generateRandomCouponCode(10);
        const object = {
          rewards: stampsHeld >= 9 ? 3 : stampsHeld >= 6 ? 2 : 1,
          wallet: couponCode,
        };
        setEncryptedObject(encrypt(object, key));

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

        const response = await fetch(`${aikoAPI}/generate-discount`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ basicCodeDiscount }),
        });

        if (response.ok) {
          console.log("Successfully generated");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleButtonClick = async () => {
    if (stampsHeld >= 3) {
      await postDiscount();
    } else {
      setDisabled(true);
    }
  };

  return (
    <RedeemContainer>
      <ShippingText>
        <ShippingHighlight> Redeem NOW</ShippingHighlight>
        {/* EARLY JULY */}
        {/* Countdown to StampRedeem Functionality, used as placeholder */}
        {/* <Countdown /> */}
      </ShippingText>
      <ButtonBlue
        disabled={disabled}
        close={() => {
          handleButtonClick();
          console.log("euhuh");
        }}
        content="REDEEM"
      />

      <DecorHorizontal height={3} />
    </RedeemContainer>
  );
};

export default StampRedeem;
