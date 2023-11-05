import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PrivatePolicy from "./pages/PrivatePolicy";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/policy/privacy-policy" element={<PrivatePolicy />} />
          <Route path="/policy/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
