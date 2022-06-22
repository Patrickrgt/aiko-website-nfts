import styled from "styled-components";

import bg from "../../assets/mint/mint-bg.svg";
import image from "../../assets/mint/sold-out.svg";
import { useSoldOut } from "../../contracts/views";
import MintOpenseaButton from "./MintOpenseaButton";

const StyledMintSoldOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: #89a9d6;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 5rem;
`;

const ImageContainer = styled.div`
  height: calc(100% - 16.4rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBackground = styled.img`
  filter: brightness(100);
  height: calc(100% - 4rem);
`;

const Image = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EmptySpace = styled.div`
  width: 1rem;
  height: 6.2rem;
`;

const MintSoldOut = () => {
  const soldOut = useSoldOut();

  if (!soldOut) return null;

  return (
    <StyledMintSoldOut>
      <EmptySpace />
      <ImageContainer>
        <ImageBackground src={bg} alt="background" />
        <Image src={image} alt="sold out image" />
      </ImageContainer>
      <MintOpenseaButton />
    </StyledMintSoldOut>
  );
};

export default MintSoldOut;
