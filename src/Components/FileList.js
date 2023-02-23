import React, { useState, useEffect } from 'react';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/files');
        const data = await res.json();
        setFiles(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFiles();
  }, []);

  const handleFileDownload = async (file) => {
    try {
      const res = await fetch('http://localhost:8080/api/files/' + file._id);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.name);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Files</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file._id}>
              <td>{file.name}</td>
              <td>{file.size} bytes</td>
              
              <td>
                <button onClick={() => handleFileDownload(file)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;

// import React, { useState, useEffect } from "react";

// function FileList() {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/files")
//       .then((response) => response.json())
//       .then((data) => setFiles(data));
//   }, []);

//   return (
//     <div>
//       <h1>File List</h1>
//       <ul>
//         {files.map((file) => (
//           <li key={file.id}>
//             <a href={`/api/files/${file.id}`} download>
//               {file.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FileList;