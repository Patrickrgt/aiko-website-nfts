import styled from "styled-components";

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background: linear-gradient(to right, #43679b, #43679b);

  height: 10rem;
  @media only screen and (max-width: 1400px) {
    height: 8rem;
  }
  @media only screen and (max-width: 1400px) {
    height: 6rem;
  }
`;

const Decal = styled.div`
  width: 4rem;
  aspect-ratio: 1;
  background: white;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Logo = styled.div`
  font-size: 2.3rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Decal />
    </StyledFooter>
  );
};

export default Footer;
