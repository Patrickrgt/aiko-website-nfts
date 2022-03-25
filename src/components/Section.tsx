import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7rem 0;

  min-height: 100vh;
  @media only screen and (max-width: 1400px) {
    padding: 3rem 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 3rem 0;
    min-height: 0;
  }
`;

interface Props {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: Props) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
