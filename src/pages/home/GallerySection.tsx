import styled from "styled-components";
import Section from "../../components/Section";
import background from "../../assets/svgs/gallery-bg.svg";

const Container = styled.div`
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: calc(100vh - 27rem);
`;

const GallerySection = () => {
  return (
    <Section topPlus bottomPlus>
      <Background src={background} alt="Gallery background" />
    </Section>
  );
};

export default GallerySection;
