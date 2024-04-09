// page.js

"use client";
import { useState } from "react";
import Image from "next/image";

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
    event.preventDefault(); // 防止表单的默认提交行为
  
    const formData = new FormData(event.target); // 使用表单的引用来创建FormData对象
  
    try {
      const response = await fetch('/submit-game', { // 用fetch发送POST请求
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // const result = await response.json(); // 解析JSON响应
        // console.log(result);
        const gameData = await response.json(); // 解析返回的游戏数据
        console.log(gameData);
        // setSubmissionMessage('Data saved successfully!');
        setSubmissionMessage(`Data saved successfully! Game ID: ${gameData._id}`);
        // 这里假设返回的`gameData`包含一个`_id`字段，即MongoDB自动生成的ID
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  
    // if (response.ok) {
    //   const result = await response.json();
    //   console.log(result);
    //   setSubmissionMessage('Data saved successfully!');
    // } else {
    //   throw new Error('Network response was not ok.');
    // }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md">
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
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
              name="backgroundImage"
              onChange={handleImageUpload}
              className="px-3 py-2 border border-blue-300"
            />
          </div>

          <div className="flex flex-col bg-gray-200 w-11/20 min-w-300 p-5 rounded text-center box-shadow">
            <label htmlFor="itemImage">Upload Image for Your Item1:</label>
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
          <button type="submit">Submit</button>
        </form>
        <div>{submissionMessage}</div>

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
