import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import TitlePage from "../components/Home/titlePage";
import Introduction from "../components/Home/Introduction";
//import Instagram from "../components/Home/Instagram";

function Home() {
  // Define animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Animated TitlePage */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TitlePage />
      </motion.div>

      {/* Animated Introduction */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Slight delay for introduction
      >
        <Introduction />
      </motion.div>
    {/* Animated Instagram 
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Slight delay for introduction
      >
        <Instagram />
      </motion.div>
      */}
    </div>
  );
}

export default Home;
