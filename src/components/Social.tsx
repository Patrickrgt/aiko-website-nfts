import styled from "styled-components";

const StyledSocial = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  background: #799ecf;
  clip-path: var(--hex);

  width: 5.5rem;
  @media only screen and (max-width: 1400px) {
    width: 5rem;
  }
`;

const Icon = styled.img`
  width: 62%;
`;

interface Props {
  link: string;
  icon: string;
}

const Social = ({ link, icon }: Props) => {
  return (
    <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
      <Icon src={icon} alt="Social Icon" />
    </StyledSocial>
  );
};

export default Social;
