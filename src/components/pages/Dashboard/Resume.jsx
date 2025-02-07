import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../../assets/Sridhar_FullstackDev.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white border rounded-xl px-4 py-2 gap-2 shadow-lg hover:shadow-xl transition"
      >
        <AiOutlineDownload className="text-2xl" />
        Download CV
      </button>

      {/* PDF Viewer */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <Document
          file={cv}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="border border-gray-200"
          />
        </Document>
        <p className="text-center mt-4">
          Page {pageNumber} of {numPages}
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
