import React from "react";
import Certs from "../components/Certifications/Certs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Certifications() {
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
      <Certs />
      </motion.div>
    </div>
  );
}

export default Certifications;
