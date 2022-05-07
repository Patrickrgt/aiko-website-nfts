import styled from "styled-components";
import { shortenAddress, useEtherBalance, useEthers } from "@usedapp/core";
import { useDevice } from "../app/hooks/use-device";
import Hexify from "./Hexify";

const StyledConnector = styled.div`
  position: fixed;
  transform: translate(0, 0);
  z-index: 3;

  filter: brightness(1);
  :hover {
    transition: 0.3s filter;
    filter: brightness(0.9);
  }

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

interface ButtonProps {
  active: boolean;
}

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.6rem;
  padding: ${(props: ButtonProps) =>
    props.active ? "0.7rem 0.9rem" : "0 2.8rem"};
  @media only screen and (max-width: 1400px) {
    height: 3.9rem;
    padding: ${(props: ButtonProps) =>
      props.active ? "0.6rem 0.8rem" : "0 2.4rem"};
  }
`;

const Text = styled.span`
  font-weight: 700;

  font-size: 2rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.7rem;
  }
`;

const WhiteText = styled(Text)`
  color: white;
`;

const BlueText = styled(Text)`
  color: #4e73a4;
`;

const Balance = styled.div`
  background: #4e73a4;
  height: 100%;
  padding: 0.5rem;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 25%,
    100% 75%,
    90% 100%,
    10% 100%,
    0% 75%,
    0% 25%
  );
  color: #f5d06e;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px;
  margin-left: 0.9rem;
  font-weight: 600;
  line-height: 1;

  font-size: 1.7rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const Connector = () => {
  const { account, activateBrowserWallet } = useEthers();
  const { isMobile } = useDevice();
  const ethBalance = useEtherBalance(account);

  return (
    <StyledConnector>
      <Hexify>
        <Button active={!!account} onClick={() => activateBrowserWallet()}>
          {account && (
            <>
              <WhiteText>{"<A:\\"}</WhiteText>
              <BlueText>{shortenAddress(account)}</BlueText>
              <Balance>{`${(Number(ethBalance ?? 0) / 10 ** 18).toPrecision(
                2
              )} ETH`}</Balance>
            </>
          )}
          {!account && (
            <>
              <WhiteText>{"<A:\\"}</WhiteText>
              <BlueText>{isMobile ? "Connect" : "Connect Wallet"}</BlueText>
              <WhiteText>{">"}</WhiteText>
            </>
          )}
        </Button>
      </Hexify>
    </StyledConnector>
  );
};

export default Connector;
