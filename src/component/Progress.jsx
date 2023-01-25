import React, { useState } from "react";
const Progress = () => {
  const [progress, setProgress] = useState(0);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      // send the file data to the server
      console.log("load");
    };
    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress((event.loaded / event.total) * 100);
        console.log(progress);
      }
    };
    reader.readAsDataURL(file);
  };
 
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <div style={{ width: "100%", height: "20px" }}>
        <div className="progress-bar">
          <div style={{ width: `${progress}%`, height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Progress;
