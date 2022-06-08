import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import white from "../../assets/mint/home-white.svg";
import dark from "../../assets/mint/home-dark.svg";

const StyledMintHomeButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background: #769bcd;
  clip-path: var(--hex);
  cursor: pointer;

  transition: all 0.3s;
  :hover {
    img:last-child {
      opacity: 0;
    }
  }
`;

const Icon = styled.img`
  height: 61%;
`;

const BaseIcon = styled(Icon)``;

const OverlayIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 0.3s;
`;

const MintHomeButton = () => {
  const navigate = useNavigate();

  return (
    <StyledMintHomeButton onClick={() => navigate("/")}>
      <BaseIcon src={dark} />
      <OverlayIcon src={white} />
    </StyledMintHomeButton>
  );
};

export default MintHomeButton;
