import styled from "styled-components";

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-right: 2vh;
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
  padding: 1.5vh 2vh 0 2vh;
  margin: 0;
  font-size: 2.325vh;
  clip-path: var(--notched-tp);
`;

const WarningTextContainer = styled.div`
  background-color: #b3b5c5;
  clip-path: var(--notched-tp-r);
`;

const WarningText = styled.p`
  padding: 1vh 2vh 3vh 2vh;
  border-radius: 0 15px 0 0;
  font-family: video, serif;
  color: #6e6e70;
  font-weight: 400;
  font-size: 2vh; /* 18px */
  line-height: 120%;
  letter-spacing: 0.25px;
  width: 78.65vh;
`;

const StampWarning = () => {
  return (
    <WarningContainer>
      <WarningHeaderContainer>
        <WarningHeader>WARNING</WarningHeader>
      </WarningHeaderContainer>
      <WarningTextContainer>
        <WarningText>
          Clicking on redeem will redirect you to one of our Shopify pages once
          the redeem functionality is live. Be aware that you will have to pay a
          shipping fee upon checkout. Rewards are free with coupon provided
          given that you have enough stamps for a reward.
        </WarningText>
      </WarningTextContainer>
    </WarningContainer>
  );
};

export default StampWarning;
