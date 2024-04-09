"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [itemImages, setItemImages] = useState([]);
  const [characterImages, setCharacterImages] = useState([]);

  const handleBackgroundUpload = (event) => {
    setBackgroundImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleItemUpload = (event) => {
    const files = event.target.files;
    if (files.length !== 5) {
      alert('Please upload exactly 5 item images.');
      return;
    }
    setItemImages(Array.from(files).map(file => URL.createObjectURL(file)));
  };

  const handleCharacterUpload = (event) => {
    const files = event.target.files;
    if (files.length !== 4) {
      alert('Please upload exactly 4 character images.');
      return;
    }
    setCharacterImages(Array.from(files).map(file => URL.createObjectURL(file)));
  };

  const handleSubmit = () => {
    // Logic to submit the uploaded images to the server and store them in the database
    // You would typically make a POST request to your backend API here
    console.log('Background Image:', backgroundImage);
    console.log('Item Images:', itemImages);
    console.log('Character Images:', characterImages);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md">
        <section className="w-full space-y-4">
          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label
              htmlFor="backgroundImage"
              className="mb-2 font-bold text-lg text-gray-900"
            >
              Upload Image for Your Background:
            </label>
            <input
              type="file"
              id="backgroundImage"
              onChange={handleBackgroundUpload}
              accept="image/*"
              className="px-3 py-2 border border-blue-300"
            />
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt="Uploaded Background Image"
                width={500}
                height={500}
              />
            )}
          </div>
        </section>

        <section className="w-full space-y-4">
          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImages">Upload Image for Your Items (5 images):</label>
            <input
              type="file"
              id="itemImages"
              onChange={handleItemUpload}
              accept="image/*"
              multiple
            />
            <div className="flex flex-wrap justify-center">
              {itemImages.map((image, index) => (
                <div key={index} className="m-2">
                  <Image
                    src={image}
                    alt={`Uploaded Item Image ${index + 1}`}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full space-y-4">
          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="characterImages">Upload Image for Your Characters (4 images):</label>
            <input
              type="file"
              id="characterImages"
              onChange={handleCharacterUpload}
              accept="image/*"
              multiple
            />
            <div className="flex flex-wrap justify-center">
              {characterImages.map((image, index) => (
                <div key={index} className="m-2">
                  <Image
                    src={image}
                    alt={`Uploaded Character Image ${index + 1}`}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </main>
  );
}
