import styled from "styled-components";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useEthers } from "@usedapp/core";
import { useDispatch, useSelector } from "react-redux";

import Popup from "./Popup";
import { INFURA_ID } from "../app/globals";
import { selectConnectingWallet, walletConnected } from "../state/uiSlice";

export const walletConnectConnector = new WalletConnectConnector({
  rpc: {
    1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    4: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
  },
  qrcode: true,
});

const Option = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  cursor: pointer;
  background: white;
  border: solid 1px var(--sub);

  padding: 0.9rem 1.2rem;
  @media (max-width: 600px) {
    padding: 0.8rem 1.6rem;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  font-weight: 600;
  font-size: 1.6rem;
  @media (max-width: 600px) {
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

const WalletSelector = (): JSX.Element => {
  const dispatch = useDispatch();
  const { account, activateBrowserWallet, activate } = useEthers();

  const connectingWallet = useSelector(selectConnectingWallet);

  return (
    <div>meow</div>
    // <Popup
    //   show={connectingWallet && !account}
    //   close={() => dispatch(walletConnected())}
    //   header="Connect to a wallet"
    // >
    //   <Option onClick={() => activateBrowserWallet()}>
    //     <Name>Metamask</Name>
    //   </Option>
    //   <Option onClick={() => activate(walletConnectConnector)}>
    //     <Name>Walletconnect</Name>
    //   </Option>
    // </Popup>
  );
};

export default WalletSelector;
