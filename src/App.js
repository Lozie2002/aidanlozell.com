import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Header from "./components/Extras/Header";
import Footer from "./components/Extras/Footer";
import ScrollToTop from "./components/Extras/ScrollToTop";
function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experience" element={<Experience/> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
