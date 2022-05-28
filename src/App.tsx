import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ChainId, Config, DAppProvider } from "@usedapp/core";

import Footer from "./components/Footer";
import Error from "./components/Error";
import { INFURA_ID } from "./app/globals";
import LoadingScreen from "./components/LoadingScreen";
import StoryPopup from "./components/StoryPopup";
import ArchivesPopup from "./components/ArchivesPopup";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const config: Config = {
  autoConnect: false,
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  },
};

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <StyledApp>
        <DAppProvider config={config}>
          <Outlet />
          <Footer />
          <Error />
          <StoryPopup />
          <ArchivesPopup />
        </DAppProvider>
      </StyledApp>
    </Suspense>
  );
};

export default App;
