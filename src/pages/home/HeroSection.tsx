import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";
import Logo from "../../components/Logo";

import heroImage from "../../assets/illustrations/hero.png";
import heroImageMobile from "../../assets/illustrations/hero-mobile.png";
import Button from "../../components/Button";
import Connector from "../../components/Connector";
import { useDevice } from "../../app/hooks/use-device";
import Tabs from "../../components/Tabs";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 66vh;
  width: 100%;
  @media only screen and (max-width: 600px) {
    transform: translateY(7.4%);
    right: 0;
    top: 0;
  }
`;

const HeroImage = styled.img`
  transform: translateX(5%);
  height: 94%;
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

  top: 45%;
  left: 14%;
  width: 10.8%;
  height: 30.3%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const HeroSection = () => {
  const { isMobile } = useDevice();

  return (
    <Section id="home-scroll">
      <HeroContainer>
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
      </HeroContainer>
      <Connector />
      <NavItems />
    </Section>
  );
};

export default HeroSection;
