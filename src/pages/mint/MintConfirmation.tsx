import styled from "styled-components";

import decal from "../../assets/mint/confirmation-header.svg";
import illustration from "../../assets/mint/confirmation-illustration.svg";
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

const Image = styled.img`
  width: 36rem;
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
      <MintOpenseaButton />
    </>
  );
};

export default MintConfirmation;
