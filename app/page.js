"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form>
          <label htmlFor="imageUpload">Upload Image for Your Character:</label>
          <input type="file" id="imageUpload" onChange={handleImageUpload} />
        </form>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Uploaded Image"
            width={500}
            height={500}
          />
        )}


        <form>
          <label htmlFor="imageUpload">Upload Image for Your Background:</label>
          <input type="file" id="imageUpload" onChange={handleImageUpload} />
        </form>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Uploaded Image"
            width={500}
            height={500}
          />
        )}



        <form>
          <label htmlFor="imageUpload">Upload Image for Your Item:</label>
          <input type="file" id="imageUpload" onChange={handleImageUpload} />
        </form>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Uploaded Image"
            width={500}
            height={500}
          />
        )}
      </div>
    </main>
  );
}