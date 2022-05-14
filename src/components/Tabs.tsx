import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowingArchives } from "../state/uiSlice";

interface TabType {
  label: string;
  content: JSX.Element;
}

const tabs: TabType[] = [
  {
    label: "archives",
    content: <div>archives</div>,
  },
  {
    label: "info",
    content: <div>info</div>,
  },
  {
    label: "history",
    content: <div>history</div>,
  },
];

const StyledTabs = styled.div`
  display: flex;
  position: absolute;
  top: 19.45%;
  left: 17.4%;

  @media only screen and (max-width: 600px) {
    top: 21%;
    left: 10%;
  }
`;

interface TabProps {
  color: string;
}

const Tab = styled.button`
  position: relative;
  cursor: pointer;
  background: ${(props: TabProps) => props.color};
  margin-right: -1.2rem;
  clip-path: polygon(
    13% 0%,
    100% 0%,
    100% 0%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 70%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b0a17b;
  font-weight: 700;

  filter: brightness(1);
  :hover {
    transition: filter 0.3s;
    filter: brightness(0.95);
  }

  width: 18rem;
  height: 3.3rem;
  font-size: 2.1rem;
  @media only screen and (max-width: 600px) {
    width: 9rem;
    height: 1.8rem;
    font-size: 1.2rem;
  }
`;

const Dot = styled.div`
  position: absolute;
  background: #b0a17b;
  border-radius: 50%;

  width: 7px;
  height: 7px;
  top: 2px;
  right: 3px;
  @media only screen and (max-width: 600px) {
    width: 4px;
    height: 4px;
    top: 2px;
    right: 3px;
  }
`;

const Tabs = () => {
  const dispatch = useDispatch();

  return (
    <StyledTabs>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.label}
          color={index % 2 === 0 ? "#FFDF6C" : "#FFED90"}
          onClick={() => dispatch(setShowingArchives(true))}
        >
          {tab.label}
          <Dot />
        </Tab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
