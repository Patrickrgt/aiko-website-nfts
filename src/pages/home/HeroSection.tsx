import styled from "styled-components";
import Logo from "../../components/Logo";
import NavItems from "../../components/NavItems";
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
      <NavItems />
    </Section>
  );
};

export default HeroSection;
