import styled from "styled-components";

const StyledGalleryDecal = styled.div`
  display: flex;
  position: absolute;
  top: 70%;
  left: 0;
  z-index: 1;
  overflow: hidden;

  height: calc((100vh - 18rem - 27rem) * 0.8);
  width: calc((100vh - 18rem - 27rem) * 0.8);
  @media only screen and (max-width: 1400px) {
    height: calc((100vh - 16rem - 20rem) * 0.6);
    width: calc((100vh - 16rem - 20rem) * 0.6);
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const First = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #fefbf0, #ffd67b);
  top: 55%;
  left: -55%;
  transform: rotate(45deg);
`;

const Second = styled.div`
  position: absolute;
  width: 150%;
  height: 20%;
  background: linear-gradient(to right, #fefbf0, #ffd67b);
  top: 49%;
  left: -30%;
  transform: rotate(45deg);
`;

const GalleryDecal = () => {
  return (
    <StyledGalleryDecal>
      <First />
      <Second />
    </StyledGalleryDecal>
  );
};

export default GalleryDecal;
