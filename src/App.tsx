import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ChainId, Config, DAppProvider } from "@usedapp/core";

import Footer from "./components/Footer";
import Error from "./components/Error";
import { INFURA_ID } from "./app/globals";
import WalletSelector from "./components/WalletSelector";
import LoadingScreen from "./components/LoadingScreen";
import ArchivesPopup from "./components/ArchivesPopup";

// Remove redundant assets

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
          <WalletSelector />
          <ArchivesPopup />
        </DAppProvider>
      </StyledApp>
    </Suspense>
  );
};

export default App;
