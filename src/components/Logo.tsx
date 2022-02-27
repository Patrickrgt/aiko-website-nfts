import styled from "styled-components";
import logo from "../assets/svgs/aiko-logo.svg";
import AikoFade from "./AikoFade";

const StyledLogo = styled.img`
  width: 10rem;
`;

const Logo = () => {
  return (
    <AikoFade>
      <StyledLogo src={logo} alt="Aiko logo" />
    </AikoFade>
  );
};

export default Logo;
