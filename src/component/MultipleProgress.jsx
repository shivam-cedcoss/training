import React, { useState } from "react";
import "../App.css";
const MultipleProgress = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState([]);

  const handleFileUpload = (e) => {
    const filesList = e.target.files;
    const newFiles = [...files];
    const newProgress = [...progress];
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      if (!files.find((existingFile) => existingFile.name === file.name)) {
        newFiles.push(file);
        newProgress.push({ id: file.name, progress: 0 });
        setFiles(newFiles);
        setProgress(newProgress);
        const reader = new FileReader();
        reader.onload = (event) => {
          // update the progress state to 100% for the uploaded file
          const updatedProgress = newProgress.map((item) => {
            if (item.id === file.name) {
              return { id: file.name, progress: 100 };
            }
            return item;
          });
          setProgress(updatedProgress);
          // send the file data to the server
          console.log(event);
        };
        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            let fileProgress = (event.loaded / event.total) * 100;
            if (fileProgress > 100) {
              fileProgress = 100;
            }
            const updatedProgress = newProgress.map((item) => {
              if (item.id === file.name) {
                return { id: file.name, progress: fileProgress };
              }
              return item;
            });
            setProgress(updatedProgress);
          }
        };
        reader.readAsDataURL(file);
      } else {
        console.log(`${file.name} already exists`);
      }
    }
  };

  const handleDelete = (file) => {
    setFiles(files.filter((item) => item !== file));
    setProgress(progress.filter((item) => item.id !== file.name));
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileUpload} />
      <div>
        {files.map((file) => (
          <div key={file.name}>
            <div>
              {file.name}
              <button onClick={() => handleDelete(file)}>Delete</button>
            </div>
            <div style={{ width: "100%", height: "20px" }}>
              <div className="progress-bar">
                <div
                  style={{
                    width: `${
                      progress.find((item) => item.id === file.name)
                        ?.progress ?? 0
                    }%`,
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleProgress;
