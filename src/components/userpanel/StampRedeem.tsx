import styled from "styled-components";
import { useState } from "react";
import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";
// import Countdown from "./Countdown";

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
  font-size: 2vh;
  font-weight: 800;
  color: white;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

const StampRedeem = () => {
  const [disabled] = useState(true);

  return (
    <RedeemContainer>
      <ShippingText>
        EARLY JULY
        {/* Countdown to StampRedeem Functionality, used as placeholder */}
        {/* <Countdown /> */}
      </ShippingText>
      <ButtonBlue
        disabled={disabled}
        close={() => {
          return;
        }}
        content="REDEEM"
      />

      <DecorHorizontal height={3} />
    </RedeemContainer>
  );
};

export default StampRedeem;
