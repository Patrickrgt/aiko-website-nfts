import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 41.5%;
  margin-right: 3.4rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
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

interface DetailsProps {
  hasCorner: boolean;
}

const DetailsContainer = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  background: #e8bb52;
  border-radius: 1rem;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
`;

const Corner = styled.img`
  position: absolute;
  width: 8.5rem;
  background: #ffcf61;
  padding-right: 1.75rem;
  padding-bottom: 1.75rem;
  top: 0;
  left: 0;

  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 0%,
    100% 0%,
    0% 100%,
    0% 100%,
    0% 100%,
    0% 0%
  );
`;

const TextAreaContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  border-radius: 1rem;
  padding: ${(props: DetailsProps) =>
    props.hasCorner ? "4rem 4rem 0 4rem" : "1.5rem 2rem"};

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
`;

const TextSection = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;
  color: #7c693a;
  font-size: 1.9rem;
  font-weight: 400;

  :first-letter {
    font-weight: 900;
    font-size: 2.1rem;
  }
`;

const InfoSection = styled.p`
  width: 100%;
  margin-bottom: 0.3rem;
  margin-top: 0.7rem;
  color: #7c693a;
  font-size: 2rem;
  font-weight: 400;
`;

const Bold = styled.span`
  width: 100%;
  color: #7c693a;
  font-weight: 900;
  font-size: 2.2rem;
`;

const SubInfoSection = styled.p`
  width: 100%;
  margin-left: 3rem;
  margin-bottom: 0.5rem;
  color: #7c693a;
  font-size: 1.7rem;
  font-weight: 400;
`;

const SubBold = styled.span`
  width: 100%;
  color: #7c693a;
  font-weight: 900;
  font-size: 1.9rem;
`;

interface BadgeProps {
  larger?: boolean;
}

const Badge = styled.img`
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: ${(props: BadgeProps) => (props.larger ? "20%" : "19.5%")};
`;

interface InfoType {
  bold?: string;
  normal?: string;
  subInfo?: InfoType[];
}

export interface TabType {
  label: string;
  image?: string;
  coloredImage?: string;
  copy?: string[];
  info?: InfoType[];
  badge?: string;
  largerBadge?: boolean;
  corner?: string;
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
      {tab.image && tab.coloredImage && (
        <Container>
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
          {tab.badge && (
            <Badge larger={tab.largerBadge} src={tab.badge} alt="Badge" />
          )}
        </Container>
      )}
      <DetailsContainer>
        {tab.corner && <Corner src={tab.corner} alt="Decorative corner" />}
        <TextAreaContainer
          hasCorner={!!tab.corner}
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
          <TextArea ref={scrollContentRef}>
            {tab.copy &&
              tab.copy.map((text: string, index: number) => (
                <TextSection key={index}>{text}</TextSection>
              ))}
            {tab.info &&
              tab.info.map((info: InfoType) => (
                <>
                  <InfoSection>
                    <Bold>{info.bold}</Bold>
                    {info.normal}
                  </InfoSection>
                  {info.subInfo &&
                    info.subInfo.map((subInfo: InfoType) => (
                      <SubInfoSection>
                        <SubBold>{subInfo.bold}</SubBold>
                        {subInfo.normal}
                      </SubInfoSection>
                    ))}
                </>
              ))}
          </TextArea>
        </TextAreaContainer>
      </DetailsContainer>
    </>
  );
};

export default PopupTab;
