import React, { useState } from "react";
import { HiUpload } from "react-icons/hi";
import "./style.css";

const FileUploadButton = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file?.name || null);
    onFileSelect?.(file);
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        id="fileUpload"
        className="hidden-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileUpload" className="upload-button">
        <HiUpload size={18} className="upload-icon" /> {selectedFile || "Tải lên"}
      </label>
    </div>
  );
};

export default FileUploadButton;
