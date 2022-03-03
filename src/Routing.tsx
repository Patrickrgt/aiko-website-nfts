import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AnotherPage from "./pages/another-page/AnotherPage";
import HomePage from "./pages/home/HomePage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="another" element={<AnotherPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
