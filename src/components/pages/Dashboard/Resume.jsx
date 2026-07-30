import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../../assets/Sridhar_Elumalai_ResumeATS.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Sridhar_FullstackDev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-[#0E0E10] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .dot-grid { background-image: radial-gradient(rgba(14,14,16,0.09) 1px, transparent 1px); background-size: 26px 26px; }
        @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* ambient background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#0E0E10]/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#6B6B72] uppercase mb-8 fade-up">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot" />
          Resume
        </div>

        <h1
          className="font-display italic text-4xl sm:text-5xl leading-tight mb-4 text-center fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          See my{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            journey
          </span>{" "}
          so far
        </h1>

        <p
          className="font-body text-base sm:text-lg text-[#6B6B72] text-center max-w-xl mb-10 leading-relaxed fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          A quick look at the roles, tools, and projects that shaped how I
          build software.
        </p>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E0E10] text-white font-body font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 mb-10 fade-up"
          style={{ animationDelay: "0.16s" }}
        >
          <AiOutlineDownload className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
          Download CV
        </button>

        {/* PDF Viewer */}
        <div
          className="w-full rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-4 sm:p-6 shadow-sm fade-up"
          style={{ animationDelay: "0.22s" }}
        >
          <div className="rounded-xl overflow-hidden border border-[#0E0E10]/10 flex justify-center bg-white">
            <Document
              file={cv}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col items-center"
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="w-full"
                width={window.innerWidth < 768 ? 300 : 500}
              />
            </Document>
          </div>

          <div className="flex items-center justify-center mt-5">
            <span className="font-mono text-[11px] tracking-wide text-[#6B6B72] uppercase px-3.5 py-1.5 rounded-full border border-[#0E0E10]/10 bg-white/70">
              Page {pageNumber} of {numPages}
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-5">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-5 py-2.5 rounded-full border border-[#0E0E10]/15 bg-white/50 backdrop-blur-sm text-[#0E0E10] font-body font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#0E0E10]/40 hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:border-[#0E0E10]/15"
            >
              ← Previous
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-5 py-2.5 rounded-full border border-[#0E0E10]/15 bg-white/50 backdrop-blur-sm text-[#0E0E10] font-body font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#0E0E10]/40 hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:border-[#0E0E10]/15"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;