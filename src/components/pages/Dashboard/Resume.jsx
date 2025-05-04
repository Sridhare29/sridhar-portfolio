import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../../assets/SridharElumalaiFE.pdf";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white border rounded-xl px-4 py-2 gap-2 shadow-lg hover:shadow-xl transition text-sm sm:text-base"
      >
        <AiOutlineDownload className="text-lg sm:text-2xl" />
        Download CV
      </button>

      {/* PDF Viewer */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Document
          file={cv}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="border border-gray-200 w-full"
            width={window.innerWidth < 768 ? 300 : 500} // Adjust width for mobile
          />
        </Document>
        <p className="text-center mt-4 text-sm sm:text-base">
          Page {pageNumber} of {numPages}
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 text-sm sm:text-base"
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 text-sm sm:text-base"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
