import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import UserLanding from "./pages/userpanel/UserLanding";
import Discord from "./pages/discord/Discord";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="userpanel" element={<UserLanding />} />
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/.well-known" element={<App />}>
          <Route path="discord" element={<Discord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
