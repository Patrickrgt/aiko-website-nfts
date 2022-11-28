import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-right: 2rem;
  justify-content: flex-end;
`;

const WarningHeaderContainer = styled.div`
  font-family: video, serif;
  border-radius: 15px 15px 0 0;
  color: #494949;
`;

const WarningHeader = styled.h2`
  width: fit-content;
  background-color: #b3b5c5;
  padding: 1.5rem 2rem 0 2rem;
  margin: 0;
  font-size: 2.5rem;
  clip-path: var(--notched-tp);
`;

const WarningTextContainer = styled.div`
  background-color: #b3b5c5;
  clip-path: var(--notched-tp-r);
`;

const WarningText = styled.p`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 0 15px 0 0;
  font-family: video, serif;
  color: #6e6e70;
  font-weight: 400;
  font-size: 2rem; /* 18px */
  line-height: 120%;
  letter-spacing: 0.25px;
`;

const StampWarning = () => {
  return (
    <WarningContainer>
      <WarningHeaderContainer>
        <WarningHeader>WARNING</WarningHeader>
      </WarningHeaderContainer>
      <WarningTextContainer>
        <WarningText>
          Redeem function will start on 23/01/2023. Don't forget it, to claim
          your rewards you will need to pay a shipping fee in ETH, the price
          decreases based on the number of stamps you've collected, going from
          30 USD to 0 USD.
        </WarningText>
      </WarningTextContainer>
    </WarningContainer>
  );
};

export default StampWarning;
