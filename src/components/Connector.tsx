import styled from "styled-components";
import { shortenAddress, useEthers } from "@usedapp/core";
// import { useDispatch } from "react-redux";
// import { connectWallet } from "../state/uiSlice";
import Button from "./Button";

const StyledConnector = styled.div`
  position: absolute;

  top: 7rem;
  right: 7rem;
  @media only screen and (max-width: 1400px) {
    top: 3rem;
    right: 3rem;
  }
`;

const Connector = () => {
  // const dispatch = useDispatch();
  const { account } = useEthers();

  return (
    <StyledConnector>
      {/* <Button click={() => dispatch(connectWallet())}> */}
      <Button primary click={() => console.log("meow")}>
        {account ? shortenAddress(account) : "<A:\\Connect Wallet>"}
      </Button>
    </StyledConnector>
  );
};

export default Connector;
