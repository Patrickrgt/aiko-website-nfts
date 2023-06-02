import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Config, DAppProvider, Mainnet, Polygon } from "@usedapp/core";
import { ethers } from "ethers";

import Error from "./components/Error";
import LoadingScreen from "./components/LoadingScreen";
import StoryPopup from "./components/StoryPopup";
import ArchivesPopup from "./components/ArchivesPopup";
import InfoPopup from "./components/InfoPopup";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const config: Config = {
  autoConnect: false,
  readOnlyUrls: {
    [Mainnet.chainId]: new ethers.providers.JsonRpcProvider(
      "https://eth-mainnet.g.alchemy.com/v2/8iVRJ1Rswjzp0S3ySwiWOaS0jtoZ4uRg"
    ),
    [Polygon.chainId]: new ethers.providers.JsonRpcProvider(
      "https://polygon-rpc.com/"
    ),
  },

  bufferGasLimitPercentage: 20,
};

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <StyledApp>
        <DAppProvider config={config}>
          <Outlet />
          <Error />
          <StoryPopup />
          <ArchivesPopup />
          <InfoPopup />
        </DAppProvider>
      </StyledApp>
    </Suspense>
  );
};

export default App;
