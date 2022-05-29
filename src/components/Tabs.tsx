import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  // setShowingArchives,
  setShowingInfo,
  setShowingStory,
} from "../state/uiSlice";

interface TabType {
  label: string;
  content: JSX.Element;
}

const StyledTabs = styled.div`
  display: flex;
  position: absolute;

  bottom: 76.9%;
  left: 16%;

  @media only screen and (min-height: 1100px) {
    bottom: 76.9%;
    left: 17.4%;
  }
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

  width: 17.54vh;
  height: 2.92vh;
  font-size: 1.84vh;

  @media only screen and (min-height: 1100px) {
    width: 18rem;
    height: 3.3rem;
    font-size: 2.1rem;
  }
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

  width: 0.77vh;
  height: 0.77vh;
  top: 2px;
  right: 3px;
  @media only screen and (min-height: 1100px) {
    width: 7px;
    height: 7px;
    top: 2px;
    right: 3px;
  }
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
      {/* <Tab color="#FFDF6C" onClick={() => dispatch(setShowingArchives(true))}>
        archives
        <Dot />
      </Tab> */}
      <Tab color="#FFED90" onClick={() => dispatch(setShowingInfo(true))}>
        info
        <Dot />
      </Tab>
      <Tab color="#FFDF6C" onClick={() => dispatch(setShowingStory(true))}>
        story
        <Dot />
      </Tab>
    </StyledTabs>
  );
};

export default Tabs;
