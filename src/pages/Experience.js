import React from "react";
import WExperience from "../components/Experience/WorkExp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WorkExperience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const [EexperienceRef, whoIMInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <motion.div
        ref={EexperienceRef}
        initial="initial"
        animate={whoIMInView ? "animate" : "initial"}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeInUp}
      >
      <WExperience />
      </motion.div>
    </div>
  );
}

export default WorkExperience;
