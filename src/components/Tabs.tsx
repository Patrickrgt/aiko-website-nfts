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
  top: 22.2%;
  left: 22.4%;
`;

interface TabProps {
  color: string;
}

const Tab = styled.button`
  position: relative;
  cursor: pointer;
  width: 18rem;
  height: 3.3rem;
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
  font-size: 2.1rem;
  font-weight: 700;

  filter: brightness(1);
  :hover {
    transition: filter 0.3s;
    filter: brightness(0.95);
  }
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
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
