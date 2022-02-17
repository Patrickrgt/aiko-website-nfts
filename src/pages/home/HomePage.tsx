import styled from "styled-components";
import Section from "../../components/Section";

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
      <Section socials index={1} bottomPlus />
      <Section topPlus bottomPlus />
      <Section socials index={2} />
      <Section socials logo index={3} bottomPlus />
      <Section socials logo index={4} bottomPlus />
    </StyledHomePage>
  );
};

export default HomePage;
