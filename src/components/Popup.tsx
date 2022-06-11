import { useEffect, useState } from "react";
import styled from "styled-components";
import exit from "../assets/svgs/exit.svg";
import PopupTab, { TabType } from "./PopupTab";

interface PopupProps {
  show: boolean;
  small?: boolean;
}

const StyledPopup = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transform: scale(${(props: PopupProps) => (props.show ? 1 : 0)});
`;

const Background = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.625);
  backdrop-filter: blur(7px);

  transition: opacity 0.3s;
  opacity: ${(props: PopupProps) => (props.show ? 1 : 0)};
`;

const Container = styled.div`
  position: relative;
  width: ${(props: PopupProps) => (props.small ? "60rem" : "120rem")};
  height: 65rem;
  background-color: #ffcf61;
  border-radius: 1rem;
  border-top-left-radius: 0;
  padding: 3.4rem;
  display: flex;

  transition: all 0.3s;
  transform: scale(${(props: PopupProps) => (props.show ? 1 : 0)});
  opacity: ${(props: PopupProps) => (props.show ? 1 : 0)};
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

interface Props {
  show: boolean;
  tabs: TabType[];
  close: () => void;
  small?: boolean;
}

const Popup = ({ show, tabs, close, small }: Props) => {
  const [closed, setClosed] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
      setClosed(false);
    } else {
      document.body.style.overflowY = "auto";
      setTimeout(() => {
        setClosed(true);
      }, 300);
    }
  }, [show]);

  return (
    <StyledPopup show={!closed}>
      <Background show={show} onClick={() => close()} />
      <Container show={show} small={small}>
        {tabs.map((tab: TabType, index: number) => (
          <>
            {index === activeTab && <PopupTab key={index} tab={tab} />}
            <div />
          </>
        ))}
        <ExitButton onClick={() => close()}>
          <ExitImage src={exit} alt="Exit button" />
        </ExitButton>
        <Tabs>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
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
