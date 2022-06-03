import { useState } from "react";
import styled from "styled-components";

import Section from "../../components/Section";
import Header from "../../components/Header";
import AikoHex from "../../components/AikoHex";
import GallerySlide from "./GallerySlide";
import play from "../../assets/svgs/play.svg";
import background from "../../assets/svgs/background.svg";
import bubbles from "../../assets/svgs/bubbles.svg";

import a1 from "../../assets/gallery/01.jpg";
import a2 from "../../assets/gallery/02.jpg";
import a3 from "../../assets/gallery/03.jpg";
import a4 from "../../assets/gallery/04.jpg";
import a5 from "../../assets/gallery/05.jpg";
import a6 from "../../assets/gallery/06.jpg";
import a7 from "../../assets/gallery/07.jpg";
import a8 from "../../assets/gallery/08.jpg";
import a9 from "../../assets/gallery/09.jpg";
import a10 from "../../assets/gallery/10.jpg";
import a11 from "../../assets/gallery/11.jpg";
import a12 from "../../assets/gallery/12.jpg";
import a13 from "../../assets/gallery/13.jpg";
import a14 from "../../assets/gallery/14.jpg";
import a15 from "../../assets/gallery/15.jpg";
import a16 from "../../assets/gallery/16.jpg";
import a17 from "../../assets/gallery/17.jpg";
import a18 from "../../assets/gallery/18.jpg";
import a19 from "../../assets/gallery/19.jpg";
import GalleryDecal from "../../components/Decal";

const aikoList = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
];

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 10rem);
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #eff6ff, #90b5e8);
  z-index: -2;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const MainBackground = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 150vh;
  z-index: -1;

  top: 200%;
  @media only screen and (max-width: 600px) {
    top: 470%;
  }
`;

const BackgroundMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BackgroundBubbleContainer = styled.div`
  width: 18%;
  position: absolute;
  top: 0;
  left: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const BubbleImage = styled.img`
  width: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 27rem);
  background: linear-gradient(to right, #fed475, #fefaf0);
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
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  transform: translateY(-50%);

  top: 9rem;
  @media only screen and (max-width: 1400px) {
    top: 5rem;
  }
  @media only screen and (max-width: 600px) {
    top: 0;
  }
`;

const HeaderText = styled.h2`
  color: white;
  white-space: nowrap;

  font-size: 2.5rem;
  font-weight: 400;
  @media only screen and (max-width: 1400px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const Bold = styled.span`
  color: white;
  white-space: nowrap;

  font-size: 2.5rem;
  font-weight: 600;
  @media only screen and (max-width: 1400px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
    font-weight: 700;
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
  z-index: 50;
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
  const [index, setIndex] = useState(7);
  const [mainAiko, setMainAiko] = useState(aikoList[index]);

  return (
    <Section id="gallery-scroll">
      <MainBackground>
        <BackgroundMainContainer>
          <BackgroundImage src={background} alt="Background" />
          <BackgroundImage src={background} alt="Background" />
        </BackgroundMainContainer>
        <BackgroundBubbleContainer>
          <BubbleImage src={bubbles} alt="Background" />
          <BubbleImage src={bubbles} alt="Background" />
        </BackgroundBubbleContainer>
      </MainBackground>
      <Wrapper>
        <SectionBackground />
        <GalleryDecal />
        <HeaderContainer>
          <Header>
            <HeaderText>
              Be Part of our <Bold>Universe</Bold>
            </HeaderText>
          </Header>
        </HeaderContainer>
        <Container>
          <Background />
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
      </Wrapper>
    </Section>
  );
};

export default GallerySection;
