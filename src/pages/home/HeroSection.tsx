import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";

import heroImage from "../../assets/illustrations/hero.png";
import bg from "../../assets/illustrations/bg.svg";
import heroImageMobile from "../../assets/illustrations/hero-mobile.png";
import Button from "../../components/Button";
import Connector from "../../components/Connector";
import { useDevice } from "../../app/hooks/use-device";
import Tabs from "../../components/Tabs";

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 78vh;
  width: 100%;
  @media only screen and (max-width: 600px) {
    transform: translateY(7.4%);
    right: 0;
    top: 0;
  }
`;

const HeroImage = styled.img`
  transform: translateX(5%);
  height: 82%;
  @media only screen and (max-width: 600px) {
    transform: none;
    height: auto;
  }
`;

const Video = styled.video`
  position: absolute;

  top: 24%;
  left: 17%;
  width: 46.8%;
  @media only screen and (max-width: 600px) {
    left: -2%;
    top: 32%;
    width: 52%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 39%;
  left: 13%;
  width: 10.8%;
  height: 27%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const HeroSection = () => {
  const { isMobile } = useDevice();

  return (
    <Section id="home-scroll">
      <Background src={bg} alt="Background" />
      <ImageContainer>
        <HeroImage
          src={isMobile ? heroImageMobile : heroImage}
          alt="Hero image"
        />
        <Video autoPlay muted loop>
          <source src="/assets/flying.webm" type="video/webm" />
        </Video>
        <ButtonContainer>
          <Button disabled click={() => console.log("meow")}>
            {"<mint.exe>"}
          </Button>
        </ButtonContainer>
        <Tabs />
      </ImageContainer>
      <Connector />
      <NavItems />
    </Section>
  );
};

export default HeroSection;
