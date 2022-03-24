import { useEthers } from "@usedapp/core";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectError } from "../state/errorSlice";
import Hexify from "./Hexify";

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.div`
  filter: ${(props: ContainerProps) =>
    props.disabled
      ? "saturate(0) brightness(1.55)"
      : "saturate(1) brightness(1)"};
  transition: 0.3s all;
  :hover {
        props.disabled
      ? "saturate(0) brightness(1.55)"
      : "saturate(1) brightness(0.9)"};
  }
`;

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.primary ? "#FFCF61" : "white")};

  height: ${(props: ButtonProps) => (props.primary ? "5.4rem" : "5.9rem")};
  padding: ${(props: ButtonProps) => (props.primary ? "0 1.6rem" : "0 2rem")};
  font-size: ${(props: ButtonProps) => (props.primary ? "1.8rem" : "2.4rem")};
  letter-spacing: ${(props: ButtonProps) => (props.primary ? "1px" : "2px")};
  font-weight: ${(props: ButtonProps) => (props.primary ? "400" : "300")};

  @media only screen and (max-width: 600px) {
    height: 4.8rem;
    padding: 0 1.2rem;
    font-size: 1.6rem;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

interface Props {
  click: () => void;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const Button = ({ children, click, primary, disabled, loading }: Props) => {
  const { account, activateBrowserWallet } = useEthers();
  const error = useSelector(selectError);
  const [pending, setPending] = useState(false);

  const isWeb3 = loading !== undefined;

  useEffect(() => {
    if (error || loading) setPending(false);
  }, [error, loading]);

  return (
    <Container disabled={disabled}>
      <Hexify dark>
        <StyledButton
          onClick={() => {
            if (loading || disabled || pending) return;
            if (isWeb3) setPending(true);
            if (isWeb3 && !account) activateBrowserWallet();
            else click();
          }}
          disabled={disabled || loading || pending}
          primary={primary}
        >
          {isWeb3 && !account
            ? "Connect Wallet"
            : loading
            ? "Loading..."
            : children}
        </StyledButton>
      </Hexify>
    </Container>
  );
};

export default Button;
