import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState("")
  const [fileUploaded, setFileUploaded] = useState("")
  console.log('test upload', selectedFile)
  const handleUpload = () => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('upload_preset', 'x7e0hbaz')

    axios
      .post('https://api.cloudinary.com/v1_1/rendyarthap/image/upload', formData)
      .then((res) => setFileUploaded(res.data.url))
  }

  return (
    <div className="App">
      <h1>Upload File</h1>
      <input 
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>
        Upload Image
      </button>
      { fileUploaded === "" ? null : <img src={fileUploaded} alt="test" /> }
    </div>
  );
}

export default App;
