import { useState } from "react";
import styled from "styled-components";
import exit from "../assets/svgs/exit.png";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Background = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.625);
  backdrop-filter: blur(7px);
`;

const Container = styled.div`
  position: relative;
  width: 120rem;
  height: 65rem;
  background-color: #ffcf61;
  border-radius: 1rem;
  border-top-left-radius: 0;
  padding: 3.4rem;
  display: flex;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.8rem 1.2rem;
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

const Image = styled.img`
  height: 100%;
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
`;

const ExitButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.3rem;
  cursor: pointer;
`;

const ExitImage = styled.img`
  width: 100%;
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
`;

const Tabs = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 100;
`;

interface TabProps {
  active: boolean;
  index: number;
}

const Tab = styled.button`
  width: 18rem;
  height: 3rem;
  background: ${(props: TabProps) =>
    props.active ? "#FFCF61" : props.index === 2 ? "#D4AA48" : "#E7BB52"};
  cursor: pointer;
  border-top-left-radius: 0.8rem;
  clip-path: polygon(
    0% 0%,
    88% 0%,
    100% 75%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 0%
  );
  color: #7e6537;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: left;
  padding: 0 1rem;
`;

interface TabType {
  label: string;
  image: string;
  icon: string;
}

interface Props {
  show: boolean;
  tabs: TabType[];
  close: () => void;
}

const Popup = ({ show, tabs, close }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!show) return null;

  const tab = tabs[activeTab];

  return (
    <StyledPopup>
      <Background onClick={() => close()} />
      <Container>
        <ImageContainer>
          <Image src={tab.image} alt="Decorative illustration" />
        </ImageContainer>
        <DetailsContainer>
          <HeaderContainer>
            <Icon src={tab.icon} alt="Decorative icon" />
            <Header>meow</Header>
          </HeaderContainer>
          <TextAreaContainer>
            <TextArea>meow</TextArea>
          </TextAreaContainer>
        </DetailsContainer>
        <ExitButton onClick={() => close()}>
          <ExitImage src={exit} alt="Exit button" />
        </ExitButton>
        <Tabs>
          {tabs.map((tab, index) => (
            <Tab
              active={index === activeTab}
              index={index}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </StyledPopup>
  );
};

export default Popup;
