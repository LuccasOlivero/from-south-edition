import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PrivatePolicy from "./pages/PrivatePolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Navbar from "./ui/Navbar";
import FooterComplete from "./components.jsx/FooterComplete";

// Featrues: upload images to Supabase and fech them, sliders, fix text into applayout (problem centering),

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />}></Route>
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/policy/privacy-policy" element={<PrivatePolicy />} />
          <Route path="/policy/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        postition="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
