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
  top: 15rem;
  left: 20rem;
`;

interface TabProps {
  color: string;
}

const Tab = styled.button`
  position: relative;
  cursor: pointer;
  width: 16rem;
  height: 3rem;
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
  font-size: 1.8rem;
  font-weight: 700;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  top: 2px;
  right: 3px;
  background: #b0a17b;
  border-radius: 50%;
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
