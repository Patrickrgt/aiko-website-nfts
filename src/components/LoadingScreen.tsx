import styled from "styled-components";

const StyledLoadingScreen = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 100;
`;

const Loader = styled.video`
  height: 25%;
`;

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <Loader autoPlay muted loop>
        <source src="/assets/loader.webm" type="video/webm" />
      </Loader>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;
