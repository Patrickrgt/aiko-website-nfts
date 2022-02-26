import styled from "styled-components";

interface AikoProps {
  mega?: boolean;
}

const StyledAikoHex = styled.div`
  position: relative;
  display: flex;
  height: ${(props: AikoProps) => (props.mega ? "100%" : "100%")};
  aspect-ratio: 1;
  padding: 4px;
  background: #fcd04d;
  clip-path: var(--hex);
`;

const Image = styled.img`
  height: 100%;
  clip-path: var(--hex);
`;

interface Props {
  image: string;
  mega?: boolean;
}

const AikoHex = ({ image, mega }: Props) => {
  return (
    <StyledAikoHex mega={mega}>
      <Image src={image} alt="Aiko image" />
    </StyledAikoHex>
  );
};

export default AikoHex;
