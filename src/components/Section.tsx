import { ReactNode } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Socials from "./Socials";
import plus from "../assets/svgs/plus.svg";

const StyledSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 7rem 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 7rem;
  right: 7rem;
`;

const PlusSection = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 7rem;
  display: flex;
  justify-content: space-between; ;
`;

const TopPlus = styled(PlusSection)`
  top: 7rem;
`;

const BottomPlus = styled(PlusSection)`
  bottom: 7rem;
`;

const Plus = styled.img`
  width: 4.5rem;
`;

interface Props {
  index?: number;
  socials?: boolean;
  logo?: boolean;
  topPlus?: boolean;
  bottomPlus?: boolean;
  children: ReactNode;
}

const Section = ({
  index,
  socials,
  logo,
  topPlus,
  bottomPlus,
  children,
}: Props) => {
  return (
    <StyledSection>
      {socials && index && <Socials index={index} />}
      {logo && (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      )}

      {topPlus && (
        <TopPlus>
          <Plus src={plus} alt="Decorative cross" />
          <Plus src={plus} alt="Decorative cross" />
        </TopPlus>
      )}
      {bottomPlus && (
        <BottomPlus>
          <Plus src={plus} alt="Decorative cross" />
          <Plus src={plus} alt="Decorative cross" />
        </BottomPlus>
      )}
      {children}
    </StyledSection>
  );
};

export default Section;
