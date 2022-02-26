import styled from "styled-components";
import Section from "../../components/Section";
import background from "../../assets/svgs/gallery-bg.svg";
import Header from "../../components/Header";
import AikoHex from "../../components/AikoHex";

import chase from "../../assets/team-members/chase.jpg";
import GallerySlide from "./GallerySlide";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Background = styled.img`
  width: 100%;
  height: calc(100vh - 27rem);
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.7rem;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: calc(100% - 18rem);
  display: flex;
  background: pink;
`;

const GallerySection = () => {
  return (
    <Section topPlus bottomPlus>
      <Container>
        <Background src={background} alt="Gallery background" />
        <HeaderContainer>
          <Header>Be Part of our Universe</Header>
        </HeaderContainer>
        <Content>
          <AikoHex image={chase} mega />
          <GallerySlide />
        </Content>
      </Container>
    </Section>
  );
};

export default GallerySection;
