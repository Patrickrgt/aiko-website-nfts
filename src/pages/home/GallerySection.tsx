import { useState } from "react";
import styled from "styled-components";

import Section from "../../components/Section";
import Header from "../../components/Header";
import AikoHex from "../../components/AikoHex";
import GallerySlide from "./GallerySlide";

import main from "../../assets/gallery/8.jpg";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 27rem);
  background: linear-gradient(45deg, #ffffff, #ffc32c);
  clip-path: polygon(
    2.5% 0%,
    97.5% 0%,
    100% 5%,
    100% 95%,
    97.5% 100%,
    2.5% 100%,
    0% 95%,
    0% 5%
  );

  @media only screen and (max-width: 1400px) {
    height: calc(100vh - 20rem);
  }
  @media only screen and (max-width: 600px) {
    height: calc(100vw + 3rem);
    clip-path: none;
  }
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;

  margin-top: 2.7rem;
  @media only screen and (max-width: 1400px) {
    margin-top: 2.3rem;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  display: flex;

  height: calc(100% - 18rem);
  @media only screen and (max-width: 1400px) {
    height: calc(100% - 16rem);
  }
  @media only screen and (max-width: 600px) {
    height: calc(100% - 4rem);
  }
`;

const MainAikoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 25;
  > div {
    height: 100%;
  }
  height: calc(100vh - 18rem - 27rem);
  width: calc(100vh - 18rem - 27rem);
  @media only screen and (max-width: 1400px) {
    height: calc(100vh - 16rem - 20rem);
    width: calc(100vh - 16rem - 20rem);
  }
  @media only screen and (max-width: 600px) {
    height: 100vw;
    width: 100vw;
  }
`;

const GallerySection = () => {
  const [mainAiko, setMainAiko] = useState(main);

  return (
    <Section id="gallery-scroll">
      <Container>
        <Background />
        <HeaderContainer>
          <Header>Be Part of our Universe</Header>
        </HeaderContainer>
        <Content>
          <MainAikoContainer>
            <AikoHex image={mainAiko} mega />
          </MainAikoContainer>
          <GallerySlide setMainAiko={(aiko: string) => setMainAiko(aiko)} />
        </Content>
      </Container>
    </Section>
  );
};

export default GallerySection;
