import styled from "styled-components";

import AikoFade from "./AikoFade";
import lock from "../assets/svgs/lock.svg";

const SocialContainer = styled.div`
  position: relative;
  cursor: not-allowed;

  :hover {
    > img:first-child {
      transform: translate(-50%, -20%);
    }
  }
`;

const StyledSocial = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  background: #a0c0ed;
  clip-path: var(--hex);
  z-index: 2;

  width: 5.5rem;
  @media only screen and (max-width: 1400px) {
    width: 4.5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 4.5rem;
  }
`;

const Lock = styled.img`
  height: 50%;
  position: absolute;
  bottom: 95%;
  left: 50%;
  z-index: 1;

  transition: 0.3s all;
  transform: translate(-50%, 100%);
`;

const Icon = styled.img`
  width: 62%;
`;

interface Props {
  link?: string;
  icon: string;
}

const Social = ({ link, icon }: Props) => {
  return (
    <AikoFade>
      <>
        {link && (
          <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
            <Icon src={icon} alt="Social Icon" />
          </StyledSocial>
        )}
        {!link && (
          <SocialContainer>
            <Lock src={lock} alt="Lock" />
            <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
              <Icon src={icon} alt="Social Icon" />
            </StyledSocial>
          </SocialContainer>
        )}
      </>
    </AikoFade>
  );
};

export default Social;
