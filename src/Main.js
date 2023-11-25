import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import Donate_CharityPage from "./Pages/Donate_CharityPage";
import Donate_CharityListPage from "./Pages/Donate_CharityListPage";
import Donate_DonatedPage from "./Pages/Donate_DonatedPage";
import NotFoundPage from "./Pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Donate_CharityListPage />}>
          <Route index element={<HomePage />} />
          <Route path="donate">
            <Route index element={<Donate_CharityListPage />} />
            <Route path=":courseSlug" element={<Donate_CharityPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
