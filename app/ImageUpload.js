import React, { useRef, useState } from 'react';
import Image from 'next/image';
// import image from "../app/assets/Picture.png";


function ImageUpload() {
    const dropRef = useRef();
    const fileInputRef = useRef();
    const [preview, setPreview] = useState(null);
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length) {
        fileInputRef.current.files = files;
        handleImageUpload(files[0]);
      }
    };
  
    const handleImageUpload = (file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    React.useEffect(() => {
      const dropArea = dropRef.current;
      dropArea.addEventListener('dragover', handleDragOver);
      dropArea.addEventListener('drop', handleDrop);
      return () => {
        dropArea.removeEventListener('dragover', handleDragOver);
        dropArea.removeEventListener('drop', handleDrop);
      };
    }, []);

    return (
        <div>
          <label htmlFor="gameBackground">Upload Image for Game Background</label>
          <div className="background-box">
            <div id="drop-area" ref={dropRef}>
              {preview ? (
                <img src={preview} alt="Preview" />
              ) : (
                <>
                  {/* <Image src={image} alt="drop image icon" /> */}
                    <p>Drop your image here</p>
                    <input
                      type="file"
                      id="fileElem"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                      ref={fileInputRef}
                    />
                    <label className="button" htmlFor="fileElem">
                      Upload
                    </label>
                </>
              )}
            </div>
          </div>
        </div>
      );
}

export default ImageUpload;