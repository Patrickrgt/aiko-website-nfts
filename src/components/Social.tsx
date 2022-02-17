import styled from "styled-components";
// import background from "../assets/svgs/aiko-logo.svg";

const StyledSocial = styled.a`
  position: relative;
  display: flex;
`;

// const Background = styled.img`
//   height: 5rem;
// `;

const Background = styled.div`
  height: 5.5rem;
  aspect-ratio: 1;
  background: pink;
`;

const Icon = styled.img`
  position: absolute;
  height: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {
  link: string;
  icon: string;
}

const Social = ({ link, icon }: Props) => {
  return (
    <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
      {/* <Background src={background} alt="Social Background" /> */}
      <Background />
      <Icon src={icon} alt="Social Icon" />
    </StyledSocial>
  );
};

export default Social;
