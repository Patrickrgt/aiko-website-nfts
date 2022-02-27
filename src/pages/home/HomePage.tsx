import styled from "styled-components";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

// Sticky socials
// Implement navigation
// Wide screen support
// Small screen support
// Story logo add white background
// Add team member info
// Add secret team member

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
      <RoadmapSection />
      <TeamSection />
    </StyledHomePage>
  );
};

export default HomePage;
