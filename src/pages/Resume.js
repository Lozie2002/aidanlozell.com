import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";
import resumeFile from "../documents/AidanLozellResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="flex items-center justify-center flex-col relative"
      style={{
        background: "linear-gradient(to right, #1e3c72, #000000)", // Blue to black gradient
        minHeight: "100vh", // Ensure it covers the full viewport height
      }}
    >
      <a
        href={resumeFile}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded shadow-md text-white bg-blue-600 hover:bg-green-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
      <div className="py-[50px] justify-center flex items-center overflow-hidden z-20">
        <Document file={resumeFile} className="flex justify-center shadow-xl">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      
      
    </div>
  );
}

export default Resume;
