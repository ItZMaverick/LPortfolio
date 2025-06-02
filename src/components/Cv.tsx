import React from "react";

const DownloadCV: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <a
        href="/LukesCv.pdf"
        download
        className="btn btn-outline-primary"
      >
        📄 Download My CV
      </a>
    </div>
  );
};

export default DownloadCV;
