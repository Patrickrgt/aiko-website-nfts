import styled from "styled-components";
import Section from "../../components/Section";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <GallerySection />
      <StorySection />
      <Section socials logo index={3} bottomPlus>
        meow
      </Section>
      <TeamSection />
    </StyledHomePage>
  );
};

export default HomePage;
