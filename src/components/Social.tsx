import styled from "styled-components";
import Hexify from "./Hexify";

const StyledSocial = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  aspect-ratio: 1;
`;

const Icon = styled.img`
  position: absolute;
  height: 100%;
`;

interface Props {
  link: string;
  icon: string;
}

const Social = ({ link, icon }: Props) => {
  return (
    <Hexify>
      <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
        <Icon src={icon} alt="Social Icon" />
      </StyledSocial>
    </Hexify>
  );
};

export default Social;
