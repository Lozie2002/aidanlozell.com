import React, { useEffect, useState } from "react";
import Form from "../components/Contact/ContactForm";
import { motion } from "framer-motion";

function About() {
  // State and effect to manage window width for responsiveness
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen">      {/* Animated container for form */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={width > 768 ? slideIn : fadeIn}  // Choose animation based on width
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Form />
      </motion.div>
    </div>
  );
}

export default About;
