import styled from "styled-components";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 3rem;
`;

const Header = styled.div`
  width: 100%;
  font-size: 2.3rem;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Header>pages/home-page/HomePage.tsx</Header>
    </StyledHomePage>
  );
};

export default HomePage;
