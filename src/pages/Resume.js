import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";
import { motion } from "framer-motion";
import resumeFile from "../documents/AidanLozellResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
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
    <div
      className="flex items-center justify-center flex-col relative"
      style={{
        background: "linear-gradient(to right, #1e3c72, #000000)", // Blue to black gradient
        minHeight: "100vh", // Ensure it covers the full viewport height
      }}
    >
      {/* Animated Download Button */}
      <motion.a
        href={resumeFile}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded shadow-md text-white bg-blue-600 hover:bg-green-700 transition duration-300 ease-in-out my-3"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BiDownload fontSize={20} /> Download CV
      </motion.a>

      {/* Animated PDF Document */}
      <motion.div
        className="py-[50px] justify-center flex items-center overflow-hidden z-20"
        initial="initial"
        animate="animate"
        variants={slideIn}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Document file={resumeFile} className="flex justify-center shadow-xl">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </motion.div>
    </div>
  );
}

export default Resume;
