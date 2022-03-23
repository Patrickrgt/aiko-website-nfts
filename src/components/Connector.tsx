import styled from "styled-components";
import { shortenAddress, useEthers } from "@usedapp/core";
// import { useDispatch } from "react-redux";
// import { connectWallet } from "../state/uiSlice";
import Button from "./Button";
import { useDevice } from "../app/hooks/use-device";

const StyledConnector = styled.div`
  position: fixed;
  transform: translate(0, 0);
  z-index: 3;

  top: 7rem;
  right: 7rem;
  @media only screen and (max-width: 1400px) {
    top: 3rem;
    right: 3rem;
  }
  @media only screen and (max-width: 600px) {
    top: 1.5rem;
    right: 1.5rem;
  }
`;

const Connector = () => {
  // const dispatch = useDispatch();
  const { account } = useEthers();
  const { isMobile } = useDevice();

  return (
    <StyledConnector>
      {/* <Button click={() => dispatch(connectWallet())}> */}
      <Button disabled primary click={() => console.log("meow")}>
        {account
          ? shortenAddress(account)
          : isMobile
          ? "<A:\\Connect>"
          : "<A:\\Connect Wallet>"}
      </Button>
    </StyledConnector>
  );
};

export default Connector;
