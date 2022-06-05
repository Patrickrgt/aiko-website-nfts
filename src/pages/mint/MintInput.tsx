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
  color: #4b6595;
  font-size: 4.5rem;
  font-weight: 700;
`;

const SubHeader = styled.div`
  color: #4b6595;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Input = styled.input`
  background: #4b6595;
  clip-path: var(--hex);
  font-size: 4.5rem;
  font-weight: 600;
  color: white;
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
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
