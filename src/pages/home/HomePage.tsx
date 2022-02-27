import styled from "styled-components";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

// Sticky socials
// Favicon
// Name and description
// Preview image

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <GallerySection />
      <StorySection />
      <RoadmapSection />
      <TeamSection />
    </StyledHomePage>
  );
};

export default HomePage;
