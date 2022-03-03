import { ReactNode } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Socials from "./Socials";

const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 7rem 0;

  @media only screen and (max-width: 1400px) {
    padding: 3rem 0;
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 7rem;

  @media only screen and (max-width: 1400px) {
    top: 3rem;
    left: 3rem;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 7rem;
  right: 7rem;

  @media only screen and (max-width: 1400px) {
    top: 3rem;
    right: 3rem;
  }
`;

interface Props {
  id: string;
  socials?: boolean;
  logo?: boolean;
  children: ReactNode;
}

const Section = ({ id, socials, logo, children }: Props) => {
  return (
    <StyledSection id={id}>
      {children}
      {socials && (
        <SocialsContainer>
          <Socials />
        </SocialsContainer>
      )}
      {logo && (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      )}
    </StyledSection>
  );
};

export default Section;
