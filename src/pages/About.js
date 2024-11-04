import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhoIM from "../components/About/WhoIM";
import Techstack from "../components/About/Techstack";
import Toolstack from "../components/About/Toolstack";

function About() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  // Define hooks for scroll detection
  const [whoIMRef, whoIMInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techstackRef, techstackInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolstackRef, toolstackInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-gradient-to-r from-customColor to-blue-200 min-h-screen p-0">
      {/* WhoIM Section */}
      <motion.div
        ref={whoIMRef}
        initial="initial"
        animate={whoIMInView ? "animate" : "initial"}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeInUp}
      >
        <WhoIM />
      </motion.div>

      {/* Techstack Section */}
      <motion.div
        ref={techstackRef}
        initial="initial"
        animate={techstackInView ? "animate" : "initial"}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        variants={fadeInUp}
      >
        <Techstack />
      </motion.div>

      {/* Toolstack Section */}
      <motion.div
        ref={toolstackRef}
        initial="initial"
        animate={toolstackInView ? "animate" : "initial"}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        variants={fadeInUp}
      >
        <Toolstack />
      </motion.div>
    </div>
  );
}

export default About;
