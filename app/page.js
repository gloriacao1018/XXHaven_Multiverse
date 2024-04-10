"use client";
import { useState } from "react";
import Image from 'next/image'
import logo from '../app/assets/Landie.png'
import hero from '../app/assets/hero.png'
import tag from '../app/assets/tagline.png'


export default function Home() {
  const [selectedImages, setSelectedImages] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(""); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const id = event.target.id;

    reader.onloadend = () => {
      setSelectedImages((prevState) => ({ ...prevState, [id]: reader.result }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
  
    const formData = new FormData(event.target); 
  
    try {
        const response = await fetch('http://localhost:5001/submit-game', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {

        const gameData = await response.json(); 
        console.log(gameData);
        setSubmissionMessage(`Data saved successfully! Game ID: ${gameData._id}`);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src={logo} alt="Logo"/>


      <div className={`justify-center  bg-no-repeat bg-cover bg-center rounded-lg`} >
        <Image src={hero} alt="hero image"/>
        <Image src={tag} alt="brand tagline" className="absolute top-0 left-0 m-4" />
      </div>
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md">
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <h1 className="font-roboto text-9xl text-white font-medium">STEP 1. GIVE IT A NAME & BACKGROUND</h1>
            <div className="w-900 h-600 rounded-30 bg-gray-200">
              <input
              type="file"
              id="backgroundImage"
              name="backgroundImage"
              onChange={handleImageUpload}
              className="px-3 py-2 border border-blue-300"
            />
            </div>
            
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
          <h1 className="font-roboto text-9xl text-white font-medium" style={{ color: '#B39D97' , textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>STEP 2. CREATE YOUR CHARACTERS</h1>
            <input type="file" id="item1" name="item1" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage2">Upload Image for Your Item2:</label>
            <input type="file" id="item2" name="item2" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage3">Upload Image for Your Item3: </label>
            <input type="file" id="item3" name="item3" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage4">Upload Image for Your Item4: </label>
            <input type="file" id="item4" name="item4" onChange={handleImageUpload} />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
          <h1 className="font-roboto text-9xl text-white font-medium" style={{ color: '#B39D97' , textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>STEP 3. CHOOSE YOUR ITEMS</h1>
            <label htmlFor="character1">Upload Image for Character 1: </label>
            <input type="file" id="character1" name="character1" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character1Items" name="character1Items" className="mb-2 font-bold text-lg text-gray-900">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character2">Upload Image for Character 2: </label>
            <input type="file" id="character2" name="character2" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character2Items" name="character2Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character3">Upload Image for Character 3: </label>
            <input type="file" id="character3" name="character3" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="character1Items">Select Items for Character 1:</label>
              <select multiple id="character3Items" name="character3Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="character4">Upload Image for Character 4: </label>
            <input type="file" id="character4" name="character4" onChange={handleImageUpload} />
            <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
              <label htmlFor="characterItems">Select Items for Character 1:</label>
              <select multiple id="character4Items" name="character4Items" className="px-3 py-2 border border-gray-300">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="timerLength">Select Timer's Length: </label>
            <input type="number" id="timerLength" name="timerLength" min="1" max="240" />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="winnerScenario">
              Fill Out Winner Screen Scenario1: 
            </label>
            <textarea id="winnerScenario1" name="winnerScenario1" rows="4" cols="50"></textarea>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="winnerScenario2">
              Fill Out Winner Screen Scenario2: 
            </label>
            <textarea id="winnerScenario2" name="winnerScenario2" rows="4" cols="50"></textarea>
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="winnerScenario3">
              Fill Out Winner Screen Scenario3: 
            </label>
            <textarea id="winnerScenario3" name="winnerScenario3" rows="4" cols="50"></textarea>
          </div>
          <button type="submit">VOILA</button>
        </form>
        <div>{submissionMessage}</div>
      </div>
    </main>
  );
}