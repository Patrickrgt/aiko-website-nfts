import styled from "styled-components";
import Logo from "./Logo";
import Socials from "./Socials";

const StyledSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 7rem 0;
`;

interface Props {
  index?: number;
  socials?: boolean;
  logo?: boolean;
}

const Section = ({ index, socials, logo }: Props) => {
  return (
    <StyledSection>
      {socials && index && <Socials index={index} />}
      {logo && <Logo />}
    </StyledSection>
  );
};

export default Section;
