import styled from "styled-components";

import decal from "../../assets/mint/confirmation-header.svg";
import illustration from "../../assets/mint/confirmation-illustration.svg";
import Hexify from "../../components/Hexify";
import MintOpenseaButton from "./MintOpenseaButton";

const TopContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Decal = styled.img`
  width: 55rem;
`;

const Header = styled.div`
  color: #f8d173;
  font-size: 6rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
`;

const SubHeader = styled.div`
  color: #4d6694;
  font-size: 4.2rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
`;

const Amount = styled.div`
  color: #4d6694;
  font-size: 2.6rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
`;

const Image = styled.img`
  width: 36rem;
`;

const BackButtonContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const BackButton = styled.button`
  height: 4rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 2rem;
  cursor: pointer;
`;

interface Props {
  amount: number;
  close: () => void;
}

const MintConfirmation = ({ amount, close }: Props) => {
  return (
    <>
      <BackButtonContainer>
        <Hexify dark>
          <BackButton onClick={() => close()}>back</BackButton>
        </Hexify>
      </BackButtonContainer>
      <div />
      <TopContent>
        <Decal src={decal} alt="Decal" />
        <Header>congratulations!</Header>
        <SubHeader>welcome to aiko virtual</SubHeader>
      </TopContent>
      <Image src={illustration} alt="Illustration" />
      <Amount>{`you minted ${amount} Aiko${amount > 1 ? "s" : ""}`}</Amount>
      <MintOpenseaButton />
    </>
  );
};

export default MintConfirmation;
