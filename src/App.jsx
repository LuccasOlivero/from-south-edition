import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PrivatePolicy from "./pages/PrivatePolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Navbar from "./ui/Navbar";
import { Noise } from "./ui/Noise";
import { Section } from "./ui/Section";
import CompleteForm from "./components.jsx/CompleteForm";
// Featrues: upload images to Supabase and fech them, sliders, fix text into applayout (problem centering),

function App() {
  const Projects = lazy(() => import("./pages/Projects"));
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
          <Route
            path="/projects"
            element={
              <Suspense
                fallback={
                  <>
                    {/* reder loader */}
                    <Noise />
                    <CompleteForm />
                  </>
                }
              >
                <Projects />
              </Suspense>
            }
          />
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
