import styled from "styled-components";

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

interface Props {
  setAmount: (v: number | null) => void;
  amount: number | null;
  error: string;
}

const MintInput = ({ setAmount, amount, error }: Props) => {
  const max = 2;

  return (
    <Container>
      <Intro>{"A:\\How many Aiko's do you want to mint?"}</Intro>
      <StyledMintInput>
        <TextContainer>
          <Header>Insert the Number Here</Header>
          {error && <Error>{error}</Error>}
          {!error && <SubHeader>{`You have ${max} spots left`}</SubHeader>}
        </TextContainer>
        <Input
          type="number"
          maxLength={max}
          placeholder={max.toString()}
          value={amount ? amount.toString() : ""}
          onChange={(e) => {
            if (e.target.value === "") setAmount(null);
            setAmount(Number(e.target.value));
          }}
        />
      </StyledMintInput>
    </Container>
  );
};

export default MintInput;
