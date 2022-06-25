import styled from "styled-components";

import { useSoldOut } from "../../contracts/views";
import MintOpenseaButton from "./MintOpenseaButton";

import bg from "../../assets/mint/mint-bg.svg";
import image from "../../assets/mint/sold-out.svg";
import pageBg from "../../assets/mint/sold-out-bg.png";
import overlay from "../../assets/mint/sold-out-overlay.svg";
import girl from "../../assets/mint/sold-out-girl.png";

const StyledMintSoldOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #44679a;
  z-index: 3;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    background: #89a9d6;
  }
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Overlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 87%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SoldOutContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  padding: 10rem;
  width: 70%;
  @media only screen and (max-width: 600px) {
    padding: 3rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 16.4rem);
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
  }
`;

const ImageBackground = styled.img`
  filter: brightness(100);

  height: calc(100% - 4rem);
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 140%;
  }
`;

const Image = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
  }
`;

const EmptySpace = styled.div`
  width: 1rem;
  height: 6.2rem;
`;

const Girl = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  left: 70%;
  transform: translateX(-50%);

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MintSoldOut = () => {
  const soldOut = useSoldOut();

  if (!soldOut) return null;

  return (
    <StyledMintSoldOut>
      <Background src={pageBg} alt="background" />
      <Overlay src={overlay} alt="overlay" />
      <SoldOutContainer>
        <EmptySpace />
        <ImageContainer>
          <ImageBackground src={bg} alt="background" />
          <Image src={image} alt="sold out image" />
        </ImageContainer>
        <MintOpenseaButton />
      </SoldOutContainer>
      <Girl src={girl} alt="girl" />
    </StyledMintSoldOut>
  );
};

export default MintSoldOut;
