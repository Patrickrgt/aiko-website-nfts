import styled from "styled-components";
import Hexify from "../../components/Hexify";

import lock from "../../assets/mint/orange-lock.svg";

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
`;

const StyledMintButton = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 6.6rem;
  padding: 6px;
  justify-content: space-between;
`;

const TextArea = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 4rem;
`;

const TextItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextHeader = styled.div`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
`;

const TextValue = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
`;

interface ButtonProps {
  error: boolean;
}

const Button = styled.button`
  position: relative;
  background: #f7d173;
  height: 100%;
  width: 17rem;
  color: #b7944e;
  font-size: 2.6rem;
  font-weight: 400;
  clip-path: polygon(
    8% 0%,
    92% 0%,
    100% 25%,
    100% 75%,
    92% 100%,
    8% 100%,
    0% 75%,
    0% 25%
  );

  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

const LockContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8d173;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lock = styled.img`
  height: 70%;
`;

interface Props {
  amount: number;
  error: boolean;
  action: () => void;
}

const MintButton = ({ amount, error, action }: Props) => {
  const price = 0.09;

  return (
    <Container>
      <Hexify dark>
        <StyledMintButton>
          <TextArea>
            <TextItem>
              <TextHeader>Price</TextHeader>
              <TextValue>{`${price}E`}</TextValue>
            </TextItem>
            <TextItem>
              <TextHeader>Aikos</TextHeader>
              <TextValue>{amount}</TextValue>
            </TextItem>
            <TextItem>
              <TextHeader>Total</TextHeader>
              <TextValue>{`${price * amount}E`}</TextValue>
            </TextItem>
          </TextArea>
          <Button disabled={error} onClick={() => action()}>
            {"<mint.exe>"}
            {error && (
              <LockContainer>
                <Lock src={lock} alt="lock" />
              </LockContainer>
            )}
          </Button>
        </StyledMintButton>
      </Hexify>
    </Container>
  );
};

export default MintButton;
