import { useState } from "react";
import styled from "styled-components";

const StyledMintInput = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: #56729e;
  font-size: 4.5rem;
  font-weight: 600;
`;

const SubHeader = styled.div`
  color: #56729e;
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Input = styled.input`
  background: #4b6595;
  clip-path: var(--hex);
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 2rem;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const MintInput = () => {
  const [amount, setAmount] = useState("");
  const max = 2;

  return (
    <StyledMintInput>
      <TextContainer>
        <Header>Insert the Number Here</Header>
        <SubHeader>{`You have ${max} spots left`}</SubHeader>
      </TextContainer>
      <Input
        type="number"
        maxLength={max}
        placeholder={max.toString()}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </StyledMintInput>
  );
};

export default MintInput;
