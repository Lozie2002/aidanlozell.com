import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Header from "./components/Extras/Header";
import Footer from "./components/Extras/Footer";
import Contact from "./pages/Contact";
import Certification from "./pages/Certifications";
import ScrollToTop from "./components/Extras/ScrollToTop";
function App() {
  return (
    <div className="bg-white">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experience" element={<Experience/> }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
