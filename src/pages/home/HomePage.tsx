import styled from "styled-components";
import Section from "../../components/Section";
import HeroSection from "./HeroSection";

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
      <Section topPlus bottomPlus>
        meow
      </Section>
      <Section socials index={2}>
        meow
      </Section>
      <Section socials logo index={3} bottomPlus>
        meow
      </Section>
      <Section socials logo index={4} bottomPlus>
        meow
      </Section>
    </StyledHomePage>
  );
};

export default HomePage;
