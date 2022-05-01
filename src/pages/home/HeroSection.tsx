import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";
import Logo from "../../components/Logo";

import heroImage from "../../assets/illustrations/hero.png";
import heroImageMobile from "../../assets/illustrations/hero-mobile.png";
import decal from "../../assets/svgs/hero-decal.svg";
import AikoFade from "../../components/AikoFade";
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

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -2.2rem;

  @media only screen and (max-width: 600px) {
    top: -7.6rem;
  }
`;

const OrangeBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 17%;
  width: 100vw;
  height: 59%;
  background: #ffcf5f;
  overflow: hidden;
`;

const OrangeDecal = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 73%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LeftDecal = styled(OrangeDecal)`
  left: -3px;
`;

const RightDecal = styled(OrangeDecal)`
  right: -3px;
  transform: translateY(-50%) rotate(180deg);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    transform: translateY(7.4%);
    right: 0;
    top: 0;
  }
`;

const HeroImage = styled.img`
  transform: translateX(1.8%);
  height: 78vh;
  @media only screen and (max-width: 600px) {
    transform: none;
    width: calc(100% - 4rem);
    height: auto;
  }
`;

const InfoText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: #6b9bd0;

  font-size: 2.6rem;
  letter-spacing: 10px;
  font-weight: 400;
  bottom: 10.3%;
  left: 38.5%;
  height: 6.1%;
  width: 40%;
  @media only screen and (max-width: 1400px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10%;
    left: 24.3%;
    height: 5.6%;
    width: 40%;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: 400;
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

  top: 38.6%;
  left: 3.15%;
  width: 13%;
  height: 30%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const HeroSection = () => {
  const { isMobile } = useDevice();

  return (
    <Section id="home-scroll">
      <HeroContainer>
        <OrangeBlock>
          <LeftDecal src={decal} alt="Decorative element" />
          <RightDecal src={decal} alt="Decorative element" />
        </OrangeBlock>
        <AikoFade>
          <ImageContainer>
            <LogoContainer>
              <Logo primary />
            </LogoContainer>
            <HeroImage
              src={isMobile ? heroImageMobile : heroImage}
              alt="Hero image"
            />
            <InfoText>A:\MintDate\TBA</InfoText>
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
        </AikoFade>
      </HeroContainer>
      <Connector />
      <NavItems />
    </Section>
  );
};

export default HeroSection;
