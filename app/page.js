// page.js

"use client";
import { useState } from "react";
import Image from "next/image";
import {
  selectedImages,
  setSelectedImages,
  submissionMessage,
  setSubmissionMessage,
  handleImageUpload,
  handleSubmit,
} from "./itemUpload";
import logo from "../app/assets/Landie.png";
import down from "../app/assets/down.png";
import Multiselect from "./multiSelect";
import ImageUpload from "./ImageUpload";

export default function Home() {
  const [selectedImages, setSelectedImages] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const id = event.target.id;

    reader.onloadend = () => {
      setSelectedImages((prevState) => ({ ...prevState, [id]: reader.result }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md">
        <form className="w-full space-y-4">
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
              onChange={handleImageUpload}
              className="px-3 py-2 border border-blue-300"
            />
            <ImageUpload />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage">Upload Image for Your Item1:</label>
            <input type="file" id="item1" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage2">Upload Image for Your Item2:</label>
            <input type="file" id="item2" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage3">Upload Image for Your Item3: </label>
            <input type="file" id="item3" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage4">Upload Image for Your Item4: </label>
            <input type="file" id="item4" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character1">Upload Image for Character 1: </label>
            <input type="file" id="character1" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character1Items" className="mb-2 font-bold text-lg text-gray-900">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character2">Upload Image for Character 2: </label>
            <input type="file" id="character1" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character1Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character3">Upload Image for Character 3: </label>
            <input type="file" id="character3" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character1Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character4">Upload Image for Character 4: </label>
            <input type="file" id="character4" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character1Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="timerLength">Select Timer's Length: </label>
            <input type="number" id="timerLength" min="1" max="240" />
          </div>

        <div className="bottom bg-center bg-no-repeat bg-cover bg-fixed bg-heroImage">
          <h1 className="font-roboto text-9xl font-medium">
            STEP 5. GIVE THE WINNER SOME COMPLIMENTS uwu
          </h1>

          <div className=" flex flex-col">
            <label htmlFor="winnerScenario" className="achievements">
              Achievements: 0
            </label>
            <textarea id="winnerScenario" rows="4" cols="50"></textarea>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="winnerScenario2">
              Fill Out Winner Screen Scenario2: 
            </label>
            <textarea id="winnerScenario2" rows="4" cols="50"></textarea>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="winnerScenario3">
              Fill Out Winner Screen Scenario3: 
            </label>
            <textarea id="winnerScenario3" rows="4" cols="50"></textarea>
          </div>
        </form>

        {Object.entries(selectedImages).map(([id, src]) => (
          <Image
            key={id}
            src={src}
            alt="Uploaded Image"
            width={500}
            height={500}
          />
        ))}
      </div>
    </main>
  );
}
