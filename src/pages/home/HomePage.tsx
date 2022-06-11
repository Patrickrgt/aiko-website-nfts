import styled from "styled-components";
import Footer from "../../components/Footer";
import Socials from "../../components/Socials";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

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
      <Socials />
      <HeroSection />
      <GallerySection />
      <StorySection />
      <RoadmapSection />
      <TeamSection />
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
