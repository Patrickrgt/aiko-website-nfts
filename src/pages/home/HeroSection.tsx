import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";
import Logo from "../../components/Logo";

import heroImage from "../../assets/illustrations/hero.png";
import decal from "../../assets/svgs/hero-decal.svg";
import AikoFade from "../../components/AikoFade";
import Button from "../../components/Button";

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
    display: none;
  }
`;

const MobileLogoContainer = styled.div`
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  @media only screen and (max-width: 600px) {
    display: flex;
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
  @media only screen and (max-width: 600px) {
    right: 0;
    top: 0;
  }
`;

const HeroImage = styled.img`
  transform: translateX(1.8%);
  height: 78vh;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 135vw;
    transform: translateX(-18%);
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
  bottom: 10.4%;
  left: 38.5%;
  height: 6.4%;
  width: 40%;
  @media only screen and (max-width: 1400px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 600px) {
    bottom: 11.2%;
    left: 18.8%;
    height: 6%;
    width: 40%;
    font-size: 1.3rem;
    letter-spacing: 2px;
    font-weight: 500;
  }
`;

const Video = styled.video`
  position: absolute;

  top: 35%;
  left: 23%;
  width: 36%;
  @media only screen and (max-width: 600px) {
    left: 7%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;

  top: 49%;
  left: 4%;
  @media only screen and (max-width: 600px) {
    left: 7%;
  }
`;

const HeroSection = () => {
  return (
    <Section id="home-scroll">
      <MobileLogoContainer>
        <Logo primary />
      </MobileLogoContainer>
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
            <HeroImage src={heroImage} alt="Hero image" />
            <InfoText>A:\MintDate\TBA</InfoText>
            <Video autoPlay muted loop>
              <source src="/assets/flying.webm" type="video/webm" />
            </Video>
            <ButtonContainer>
              <Button disabled click={() => console.log("meow")}>
                {"<mint.exe>"}
              </Button>
            </ButtonContainer>
          </ImageContainer>
        </AikoFade>
      </HeroContainer>
      <NavItems />
    </Section>
  );
};

export default HeroSection;
