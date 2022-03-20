import { useState } from "react";
import styled from "styled-components";

import Section from "../../components/Section";
import Header from "../../components/Header";
import AikoHex from "../../components/AikoHex";
import GallerySlide from "./GallerySlide";
import play from "../../assets/svgs/play.svg";

import a1 from "../../assets/gallery/8.jpg";
import a2 from "../../assets/gallery/2.jpg";
import a3 from "../../assets/gallery/3.jpg";
import a4 from "../../assets/gallery/4.jpg";
import a5 from "../../assets/gallery/5.jpg";
import a6 from "../../assets/gallery/6.jpg";
import a7 from "../../assets/gallery/7.jpg";
import a8 from "../../assets/gallery/1.jpg";
import a9 from "../../assets/gallery/9.jpg";

const aikoList = [a1, a2, a3, a4, a5, a6, a7, a8, a9];

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

interface ButtonProps {
  left?: boolean;
}

const Button = styled.button`
  position: absolute;
  left: ${(props: ButtonProps) => (props.left ? "1rem" : "auto")};
  right: ${(props: ButtonProps) => (!props.left ? "1rem" : "auto")};
  top: 50%;
  transform: translateY(-50%);

  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

const ButtonIcon = styled.img`
  height: 3rem;
  transform: ${(props: ButtonProps) =>
    props.left ? "rotate(180deg)" : "none"};
`;

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [mainAiko, setMainAiko] = useState(aikoList[index]);

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
            <Button
              left
              onClick={() => {
                if (index === 0) {
                  setMainAiko(aikoList[aikoList.length - 1]);
                  setIndex(aikoList.length - 1);
                  return;
                }
                setMainAiko(aikoList[index - 1]);
                setIndex(index - 1);
              }}
            >
              <ButtonIcon left src={play} alt="Left button" />
            </Button>
            <Button
              onClick={() => {
                if (index === aikoList.length - 1) {
                  setMainAiko(aikoList[0]);
                  setIndex(0);
                  return;
                }
                setMainAiko(aikoList[index + 1]);
                setIndex(index + 1);
              }}
            >
              <ButtonIcon src={play} alt="Right button" />
            </Button>
          </MainAikoContainer>
          <GallerySlide setMainAiko={(aiko: string) => setMainAiko(aiko)} />
        </Content>
      </Container>
    </Section>
  );
};

export default GallerySection;
