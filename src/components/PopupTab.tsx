import { useRef, useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 41.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d4aa48;
  border-radius: 1rem;
  clip-path: polygon(
    0% 0%,
    85% 0%,
    100% 15%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 0%
  );
`;

interface ImageProps {
  opacity: number;
  blur?: number;
}

const Image = styled.img`
  width: calc(100% - 2.4rem);
  opacity: ${(props: ImageProps) => props.opacity};
  filter: blur(${(props: ImageProps) => (props.blur ? props.blur : 0)}px);
`;

const ImageOverlay = styled.img`
  width: calc(100% - 2.4rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props: ImageProps) => props.opacity};
`;

const DetailsContainer = styled.div`
  margin-left: 3.4rem;
  height: 100%;
  flex: 1;
  background: #e8bb52;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 12.8rem;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  background: #d4ab48;
  margin-left: 1rem;
  clip-path: polygon(
    7% 0%,
    93% 0%,
    100% 25%,
    100% 75%,
    93% 100%,
    7% 100%,
    0% 75%,
    0% 25%
  );
  padding: 3rem;
  color: rgb(62, 53, 29);
  font-size: 1.4rem;
  font-weight: 500;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  background: #d4aa49;
  border-radius: 1rem;
  padding: 1rem;

  /* width */
  ::-webkit-scrollbar {
    width: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ffcf61;
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d4ab49;
    border-radius: 1rem;
    width: 1rem;
    border: solid 2px #ffcf61;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d4ab49dd;
  }
`;

const TextArea = styled.div`
  width: 100%;
  height: 200%;
  color: rgb(62, 53, 29);
  font-size: 1.4rem;
  font-weight: 500;
`;

export interface TabType {
  label: string;
  image: string;
  coloredImage: string;
  icon: string;
}

interface Props {
  tab: TabType;
}

const PopupTab = ({ tab }: Props) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  return (
    <>
      <ImageContainer>
        <Image
          opacity={1 - opacity * 2}
          blur={opacity * 10}
          src={tab.image}
          alt="Decorative illustration"
        />
        <ImageOverlay
          opacity={opacity}
          src={tab.coloredImage}
          alt="Decorative illustration colored"
        />
      </ImageContainer>
      <DetailsContainer>
        <HeaderContainer>
          <Icon src={tab.icon} alt="Decorative icon" />
          <Header>meow</Header>
        </HeaderContainer>
        <TextAreaContainer
          ref={scrollAreaRef}
          onScroll={() => {
            if (!scrollAreaRef.current || !scrollContentRef.current) return;
            const scroll = scrollAreaRef.current.scrollTop;
            const contentHeight = scrollContentRef.current.offsetHeight;
            const areaHeight = scrollAreaRef.current.offsetHeight;
            const maxScroll = contentHeight - areaHeight;
            setOpacity(scroll / maxScroll);
          }}
        >
          <TextArea ref={scrollContentRef}>meow</TextArea>
        </TextAreaContainer>
      </DetailsContainer>
    </>
  );
};

export default PopupTab;
