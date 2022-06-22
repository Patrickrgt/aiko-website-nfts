import { useEthers } from "@usedapp/core";
import styled from "styled-components";

import lock from "../../assets/mint/blue-lock.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMintInput = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 400;
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

const Error = styled.div`
  color: red;
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  position: relative;
  margin-left: 2rem;
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

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :disabled {
    ::placeholder {
      color: transparent;
    }
  }
`;

const Lock = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
`;

interface Props {
  setAmount: (v: number | null) => void;
  amount: number | null;
  error: string;
  max: number;
}

const MintInput = ({ setAmount, amount, error, max }: Props) => {
  const { account } = useEthers();

  return (
    <Container>
      <Intro>{"A:\\How many Aiko's do you want to mint?"}</Intro>
      <StyledMintInput>
        <TextContainer>
          <Header>Insert the Number Here</Header>
          {error && <Error>{error}</Error>}
          {!error && account && (
            <SubHeader>{`You have ${max} spots left`}</SubHeader>
          )}
        </TextContainer>
        <div>
          <InputContainer>
            <Input
              disabled={!account}
              type="number"
              maxLength={max}
              placeholder={max.toString()}
              value={amount ? amount.toString() : ""}
              onChange={(e) => {
                if (e.target.value === "") setAmount(null);
                if (Number(e.target.value) > 9) return;
                setAmount(Number(e.target.value));
              }}
            />
            {!account && <Lock src={lock} alt="lock" />}
          </InputContainer>
        </div>
      </StyledMintInput>
    </Container>
  );
};

export default MintInput;
