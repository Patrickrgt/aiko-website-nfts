import { useState } from "react";
import styled from "styled-components";

import Section from "../../components/Section";
import background from "../../assets/svgs/gallery-bg.svg";
import Header from "../../components/Header";
import AikoHex from "../../components/AikoHex";
import GallerySlide from "./GallerySlide";

import main from "../../assets/gallery/8.jpg";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Background = styled.img`
  width: 100%;
  height: calc(100vh - 27rem);

  @media only screen and (max-width: 1400px) {
    height: calc(100vh - 20rem);
  }
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 2.7rem;
  @media only screen and (max-width: 1400px) {
    margin-top: 2.3rem;
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
`;

const MainAikoContainer = styled.div`
  z-index: 25;
  > div {
    height: 100%;
  }
`;

const GallerySection = () => {
  const [mainAiko, setMainAiko] = useState(main);

  return (
    <Section id="gallery-scroll">
      <Container>
        <Background src={background} alt="Gallery background" />
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
