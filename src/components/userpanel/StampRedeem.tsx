import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";

const RedeemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  padding: 0 0.75rem;
  background-color: #b3b5c5;
  clip-path: var(--notched-tp);
`;

const ShippingText = styled.span`
  padding-top: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.5rem;
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

const RedeemButtonContainer = styled.div`
  padding: 3px 3px 8px 3px;
  background-color: #393939;
  width: 90%;
  margin: auto;
  clip-path: var(--notched-sm);
`;

const StampRedeem = () => {
  return (
    <RedeemContainer>
      <ShippingText>
        SHIPPING FEE: &nbsp; <ShippingPrice>20 USD</ShippingPrice>
      </ShippingText>
      <ButtonBlue
        close={() => {
          console.log("Redeem");
        }}
        content="REDEEM"
      />

      <DecorHorizontal height={3} />
    </RedeemContainer>
  );
};

export default StampRedeem;
