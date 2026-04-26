import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layout/MainLayout";
import PageWrapper from "../components/common/PageWrapper";

import IntroPage from "../pages/Intropage";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import WeddingFilms from "../pages/WeddingFilms";
import PortfolioUpload from "../pages/PortfolioUpload";
import Album from "../pages/Album";
import Admin from "../pages/Admin";

const AppRoutes = () => {
  const location = useLocation(); // ✅ REQUIRED

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Intro */}
        <Route path="/" element={<IntroPage />} />

        {/* Layout */}
        <Route element={<MainLayout />}>

          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/portfolioUpload" element={<PageWrapper><PortfolioUpload /></PageWrapper>} />
          <Route path="/portfolio/:slug" element={<PageWrapper><Album /></PageWrapper>} />
          <Route path="/weddingFilms" element={<PageWrapper><WeddingFilms /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />

        </Route>

      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;