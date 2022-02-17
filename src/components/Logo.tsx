import styled from "styled-components";
import logo from "../assets/svgs/aiko-logo.svg";

const StyledLogo = styled.img`
  width: 16rem;
`;

const Logo = () => {
  return <StyledLogo src={logo} alt="Aiko logo" />;
};

export default Logo;
