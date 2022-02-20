import styled from "styled-components";
import Section from "../../components/Section";
import background from "../../assets/svgs/gallery-bg.svg";
import Header from "../../components/Header";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Background = styled.img`
  width: 100%;
  height: calc(100vh - 27rem);
`;

const HeaderContainer = styled.div`
  margin-top: 2rem;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GallerySection = () => {
  return (
    <Section topPlus bottomPlus>
      <Container>
        <Background src={background} alt="Gallery background" />
        <Content>
          <HeaderContainer>
            <Header>Be Part of our Universe</Header>
          </HeaderContainer>
        </Content>
      </Container>
    </Section>
  );
};

export default GallerySection;
