import styled from "styled-components";
import Logo from "../../components/Logo";
import Section from "../../components/Section";

const LogoContainer = styled.div`
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;

const HeroSection = () => {
  return (
    <Section socials index={1} bottomPlus>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Section>
  );
};

export default HeroSection;
