import styled from "styled-components";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

// Update prixie face
// Sticky socials
// Fade in elements
// Update preview images
// Text update :Charity: A:\Charity -> Holders will decide between 3 charities to donate every month.
// :Airdrop:  A:\Airdrop  ->  airdrop exclusive genesis Aiko NFTs to holders, in addition to 1/1 merch such as high quality t-shirts and hoodies (see Season 2)
// Just change our roadmap name to Virtualmap on the site
// Horazontal scroll
// Gap between team members
// Text not aligned on hero and team numbers
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
