import styled from "styled-components";
import logo from "../assets/svgs/aiko-logo.svg";
import AikoFade from "./AikoFade";

interface LogoProps {
  primary?: boolean;
}

const StyledLogo = styled.img`
  width: ${(props: LogoProps) => (props.primary ? "10rem" : "9rem")};
  @media only screen and (max-width: 1400px) {
    width: ${(props: LogoProps) => (props.primary ? "8.5rem" : "7.7rem")};
  }
`;

interface Props {
  primary?: boolean;
}

const Logo = ({ primary }: Props) => {
  return (
    <AikoFade>
      <StyledLogo src={logo} alt="Aiko logo" primary={primary} />
    </AikoFade>
  );
};

export default Logo;
