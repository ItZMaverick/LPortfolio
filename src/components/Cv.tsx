import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Use the correct versioned CDN
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";


const DownloadCV: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const loadPdf = async () => {
      const pdfUrl = "/LukesCv.pdf";
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((item: any) => item.str);
        fullText += strings.join(" ") + "\n";
      }

      setText(fullText);
    };

    loadPdf();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <a href="/LukesCv.pdf" download className="btn btn-outline-primary">
        📄 Download My CV
      </a>
      </div>
      <div>


      </div>
      {/* <div className="bg-white shadow-lg rounded-lg p-8">
        <h4 className="text-xl font-bold mb-4">CV Text Preview:</h4>
        <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 font-mono">
          {text}
        </div>
      </div> */}
    </div>
  );
};

export default DownloadCV;
