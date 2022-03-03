import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";

import heroImage from "../../assets/illustrations/hero.png";
import decal from "../../assets/svgs/hero-decal.svg";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
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
`;

const HeroImage = styled.img`
  height: 78vh;
  transform: translateX(1.8%);
`;

const InfoText = styled.div`
  position: absolute;
  bottom: 10.4%;
  left: 38.5%;
  height: 6.4%;
  width: 40%;
  display: flex;
  align-items: center;
  color: #6b9bd0;
  font-weight: 400;
  letter-spacing: 5px;

  font-size: 2.5rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2rem;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 23%;
  left: 25%;
  width: 24%;
`;

const HeroSection = () => {
  return (
    <Section id="home-scroll" socials bottomPlus>
      <HeroContainer>
        <OrangeBlock>
          <LeftDecal src={decal} alt="Decorative element" />
          <RightDecal src={decal} alt="Decorative element" />
        </OrangeBlock>
        <ImageContainer>
          <HeroImage src={heroImage} alt="Hero image" />
          <InfoText>(A:\MintDate\TBA)</InfoText>
          <Video autoPlay muted loop>
            <source src="/assets/flying.webm" type="video/webm" />
          </Video>
        </ImageContainer>
      </HeroContainer>
      <NavItems />
    </Section>
  );
};

export default HeroSection;
