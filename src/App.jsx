import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomePage } from "./components/HomePage";

import { Document, Page } from "react-pdf";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ContactPage } from "./components/ContactPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { AboutPage } from "./components/AboutPage";
import UnityWebGLBuild from "./UnityWebGLBuild";

const PageState = {
  Home: "home",
  Portfolio: "portfolio",
  Contact: "contact",
};

function App() {
  const [pageState, setPageState] = useState(PageState.Home);
  const navigation = useNavigate();
  useEffect(() => {
    console.log("This should print twice");
  }, []);

  return (
    <>
      {/* <UnityWebGLBuild /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
