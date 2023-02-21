import React, { useState } from "react";
import Header from "./Header";

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleFileUpload() {
    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("http://localhost:8080/api/files", {
      method: "POST",
      body: formData,
      
    })
      .then((response) => {
        console.log("File uploaded successfully:", response);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  }

  return (
    <>
    <Header/>
    <div>
        <h1>upload the file</h1>
      <input type="file" onChange={handleFileInputChange} />
      
      <button onClick={handleFileUpload} disabled={!selectedFile}>Upload</button>
    </div>
    </>
  );
}

export default UploadFile;
