import React, {
  useState,
  // , useEffect
} from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
// import { selectGlobalAccount, selectStampsHeld } from "../../state/uiSlice";
import ButtonBlue from "./ButtonBlue";
import DecorHorizontal from "./DecorHorizontal";
// import { postDiscount } from "../../contracts/functions";

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
  // const walletAddress = useSelector(selectGlobalAccount);

  // const url = process.env.REACT_APP_STORE_URL;
  // const aikoAPI = process.env.REACT_APP_EXPRESS_SERVER_URL;
  const [disabled, setDisabled] = useState(false);
  // const [encryptedObject, setEncryptedObject] = useState("");

  // const [key] = useState("aikoaikoaiko");

  // const stampsHeld = useSelector(selectStampsHeld);

  // useEffect(() => {
  //   if (encryptedObject) {
  //     window.open(`${url}?coupon=${encryptedObject}`, "_blank");
  //   }
  // }, [encryptedObject, key]);

  const handleButtonClick = async () => {
    setDisabled(true);
    // if (stampsHeld >= 3) {
    //   const encryptedObject = await postDiscount(
    //     aikoAPI ?? "",
    //     walletAddress,
    //     stampsHeld,
    //     key
    //   );
    //   setEncryptedObject(encryptedObject);
    // } else {
    //   setDisabled(true);
    // }
  };

  return (
    <RedeemContainer>
      <ShippingText>
        <ShippingHighlight>CLOSED</ShippingHighlight>
      </ShippingText>
      <ButtonBlue
        disabled={disabled}
        close={() => {
          handleButtonClick();
        }}
        content="REDEEM"
      />

      <DecorHorizontal height={3} />
    </RedeemContainer>
  );
};

export default StampRedeem;
