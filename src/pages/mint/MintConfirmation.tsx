import styled from "styled-components";
import { OPENSEA } from "../../app/globals";

import decal from "../../assets/mint/confirmation-header.svg";
import illustration from "../../assets/mint/confirmation-illustration.svg";
import opensea from "../../assets/mint/opensea.svg";

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

const Image = styled.img`
  width: 36rem;
`;

const ButtonContainer = styled.a`
  display: flex;
  cursor: pointer;
  background: #f7d173;
  width: 35.5rem;
  padding: 5px;
  clip-path: polygon(
    4.55% 0%,
    95.45% 0%,
    100% 25%,
    100% 75%,
    95.45% 100%,
    4.55% 100%,
    0% 75%,
    0% 25%
  );
`;

const Opensea = styled.img`
  height: 5.2rem;
  margin-right: 5px;
`;

const ButtonLabel = styled.div`
  flex: 1;
  height: 100%;
  background: #56729e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.1rem;
  font-weight: 400;
  white-space: nowrap;
  clip-path: polygon(
    5% 0%,
    95% 0%,
    100% 25%,
    100% 75%,
    95% 100%,
    5% 100%,
    0% 75%,
    0% 25%
  );
`;

const MintConfirmation = () => {
  return (
    <>
      <div />
      <TopContent>
        <Decal src={decal} alt="Decal" />
        <Header>congratulations!</Header>
        <SubHeader>welcome to aiko virtual</SubHeader>
      </TopContent>
      <Image src={illustration} alt="Illustration" />
      <ButtonContainer href={OPENSEA} target="_blank" rel="noopener noreferrer">
        <Opensea src={opensea} alt="Opensea Icon" />
        <ButtonLabel>{"<View In Opensea.exe>"}</ButtonLabel>
      </ButtonContainer>
    </>
  );
};

export default MintConfirmation;
