import styled from "styled-components";

import NavItems from "../../components/NavItems";
import Section from "../../components/Section";

import heroImage from "../../assets/illustrations/hero.png";
import bg from "../../assets/illustrations/bg.svg";
import Connector from "../../components/Connector";
import Tabs from "../../components/Tabs";
import MintButton from "../../components/MintButton";

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
  @media only screen and (max-width: 600px) {
    transform: translate(6%, 7.4%);
    right: 0;
    top: 0;
    height: auto;
    width: 135%;
    margin: 4rem 0;
  }
`;

const HeroImage = styled.img`
  transform: translateX(5%);
  height: 82%;
  @media only screen and (max-width: 600px) {
    transform: none;
    height: auto;
    width: 100%;
  }
`;

const Wing = styled.video`
  position: absolute;
  top: 27%;
  left: 24.5%;
  width: 38.25%;

  @media only screen and (max-width: 600px) {
    left: 20.5%;
    width: 36%;
  }
`;

const MintButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 39%;
  left: calc(5.7% + 2.7rem);
  width: 33.1%;
  height: 27%;

  @media only screen and (max-width: 600px) {
    display: block;
    width: 42.5%;
    height: 12%;
    z-index: 10;
    top: 56%;
  }
`;

const HeroSection = () => {
  return (
    <Section id="home-scroll">
      <Background src={bg} alt="Background" />
      <ImageContainer>
        <HeroImage src={heroImage} alt="Hero image" />
        <Tabs />
        <MintButtonContainer>
          <MintButton />
        </MintButtonContainer>
        <Wing autoPlay muted loop>
          <source src="/assets/wing.mp4" type="video/mp4; codecs=hvc1" />
          <source src="/assets/wing.webm" type="video/webm" />
        </Wing>
      </ImageContainer>
      <Connector />
      <NavItems />
    </Section>
  );
};

export default HeroSection;
