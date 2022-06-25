import styled from "styled-components";
import { utils } from "ethers";
import { shortenAddress, useEtherBalance, useEthers } from "@usedapp/core";
import { useDevice } from "../app/hooks/use-device";
import Hexify from "./Hexify";

const StyledConnector = styled.div`
  position: ${(props: Props) => (props.relative ? "relative" : "fixed")};
  transform: translate(0, 0);
  z-index: 3;

  filter: brightness(1);
  :hover {
    transition: 0.3s filter;
    filter: brightness(0.9);
  }

  top: ${(props: Props) => (props.relative ? "auto" : "7rem")};
  right: ${(props: Props) => (props.relative ? "auto" : "7rem")};
  @media only screen and (max-width: 1400px) {
    top: ${(props: Props) => (props.relative ? "auto" : "3rem")};
    right: ${(props: Props) => (props.relative ? "auto" : "3rem")};
  }
  @media only screen and (max-width: 600px) {
    top: ${(props: Props) => (props.relative ? "auto" : "1.5rem")};
    right: ${(props: Props) => (props.relative ? "auto" : "1.5rem")};
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

  height: 4.2rem;
  padding: ${(props: ButtonProps) =>
    props.active ? "0.7rem 0.9rem" : "0 2.4rem"};
  @media only screen and (max-width: 1400px) {
    height: 3.9rem;
    padding: ${(props: ButtonProps) =>
      props.active ? "0.6rem 0.8rem" : "0 2.4rem"};
  }
`;

const Text = styled.span`
  font-weight: 500;
  vertical-align: middle;

  font-size: 2rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.7rem;
  }
`;

const WhiteText = styled(Text)`
  color: ${(props: Props) => (props.yellow ? "#b7944e" : "white")};
`;

const BlueText = styled(Text)`
  color: ${(props: Props) =>
    props.dark ? "white" : props.yellow ? "#b7944e" : "#4e73a4"};
`;

const Balance = styled.div`
  background: ${(props: Props) =>
    props.dark ? "#90A8D1" : props.yellow ? "#b7944e" : "#4e73a4"};
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

interface Props {
  dark?: boolean;
  yellow?: boolean;
  relative?: boolean;
}

const Connector = ({ dark, yellow, relative }: Props) => {
  const { account, activateBrowserWallet } = useEthers();
  const { isMobile } = useDevice();
  const ethBalance = useEtherBalance(account);

  return (
    <StyledConnector relative={relative}>
      <Hexify dark={dark} yellow={yellow}>
        <Button active={!!account} onClick={() => activateBrowserWallet()}>
          {account && (
            <>
              <WhiteText yellow={yellow}>{"<A:\\"}</WhiteText>
              <BlueText dark={dark} yellow={yellow}>
                {shortenAddress(account)}
              </BlueText>
              {ethBalance && (
                <Balance dark={dark} yellow={yellow}>{`${Number(
                  utils.formatEther(ethBalance)
                ).toPrecision(2)} ETH`}</Balance>
              )}
            </>
          )}
          {!account && (
            <>
              <WhiteText yellow={yellow}>{"<A:\\"}</WhiteText>
              <BlueText dark={dark} yellow={yellow}>
                {isMobile ? "Connect" : "Connect Wallet"}
              </BlueText>
              <WhiteText yellow={yellow}>{">"}</WhiteText>
            </>
          )}
        </Button>
      </Hexify>
    </StyledConnector>
  );
};

export default Connector;
