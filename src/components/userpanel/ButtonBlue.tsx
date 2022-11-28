import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const ButtonShadow = styled.div`
  padding: 3px 3px 8px 3px;
  background-color: #393939;
  width: 90%;
  margin: auto;
  clip-path: var(--notched-sm);
`;

const ButtonInner = styled.div`
  padding: 2px 2px 2px 2px;
  background-color: #5a6ca7;
  margin: auto;
  clip-path: var(--notched-sm);

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f38a65;
    z-index: -1;
    transition: opacity 0.25s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  margin: auto;
  position: relative;
  font-family: video, serif;
  font-size: 3.5rem;
  clip-path: var(--notched-sm);
  font-weight: 800;
  color: white;
  text-shadow: -2px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  background-image: linear-gradient(to bottom, #96c8fb, #667ecd);
  padding: 1.5rem 0;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, #f38a65, #ffca62);
    z-index: -1;
    transition: opacity 0.25s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
`;

interface Props {
  content: string;
  close: () => void;
}

const ButtonBlue = ({ content, close }: Props) => {
  return (
    <ButtonShadow>
      <ButtonInner>
        <Button onClick={() => close()}>{content}</Button>
      </ButtonInner>
    </ButtonShadow>
  );
};

export default ButtonBlue;
