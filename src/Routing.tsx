import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/HomePage";
// import MintPage from "./pages/mint/MintPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="mint" element={<MintPage />} /> */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
