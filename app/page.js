"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../app/assets/Landie.png";
import down from "../app/assets/down.png";
import Multiselect from "./multiSelect";
import ImageUpload from "./ImageUpload";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const [setSelectedImages] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [gameId, setGameId] = useState(null); // 用来存储提交后返回的游戏ID
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    const formData = new FormData(event.target); // 使用表单的引用来创建FormData对象

    try {
      // const response = await fetch('/submit-game', { // 用fetch发送POST请求
      const response = await fetch("http://localhost:5001/submit-game", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // const result = await response.json(); // 解析JSON响应
        // console.log(result);
        const gameData = await response.json(); // 解析返回的游戏数据
        console.log(gameData);
        setGameId(gameData._id); // 存储游戏ID
        console.log("Game ID set:", gameData._id); // 打印以确认ID被设置
        setSubmissionMessage(
          `Data saved successfully! Game ID: ${gameData._id}`
        );
        // 这里假设返回的`gameData`包含一个`_id`字段，即MongoDB自动生成的ID
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleDelete = async () => {
    console.log("Delete button clicked, gameId:", gameId); // 确认函数触发并输出gameId
    if (!gameId) return;
    try {
      const response = await fetch(
        `http://localhost:5001/delete-game/${gameId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setSubmissionMessage("Game deleted successfully");
        setGameId(null); // 清除存储的ID
      } else {
        throw new Error("Failed to delete the game");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleGenerateGame = () => {
    if (!gameId) return;
    window.open(`http://localhost:5001/play-game/${gameId}`, "_blank"); // 在新标签页中打开游戏
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="cover bg-center bg-no-repeat bg-cover bg-fixed bg-heroImage">
            <div className="flex justify-between items-center ">
              <Image src={logo} alt="Logo" style={{ marginRight: "500px" }} />
              <a
                href="https://gloriacao1018.github.io/CatHaven/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">Demo</button>
              </a>{" "}
              <button className="button">Login/Signup</button>
            </div>

            <h1
              className="font-roboto text-9xl text-white font-medium"
              style={{ marginTop: "600px" }}
            >
              STEP 1. GIVE IT A NAME & BACKGROUND
            </h1>

            <div className="box flex flex-col">
              <label className="gameName">Game Name</label>
              <input
                type="text"
                id="gameName"
                name="gameName"
                className="textinput"
                placeholder="Enter name"
              />
              <ImageUpload />
            </div>
          </div>

          <Image src={down} alt="down arrow" className="down" />
          <h1 className="font-roboto text-9xl">
            STEP 2. CREATE YOUR CHARACTERS
          </h1>

          <div className="box flex flex-col px-4">
            <label className="character1">Upload Image for Character 1: </label>
            <div id="character-drop-area">
              <input
                type="file"
                id="character1"
                name="character1"
                onChange={handleImageUpload}
              />{" "}
              <label className="add-button" htmlFor="fileElem"></label>
            </div>

            <label className="character1Items">Accepted Items (Choose 3)</label>
            <Multiselect options={["Item 1", "Item 2", "Item 3", "Item4"]} />

            <label className="character2">Upload Image for Character 2: </label>
            <div id="character-drop-area">
              <input
                type="file"
                id="character2"
                name="character2"
                onChange={handleImageUpload}
              />{" "}
              <label className="add-button" htmlFor="fileElem"></label>
            </div>

            <label className="character2Items">Accepted Items (Choose 3)</label>
            <Multiselect options={["Item 1", "Item 2", "Item 3", "Item4"]} />

            <label className="character3">Upload Image for Character 3: </label>
            <div id="character-drop-area">
              <input
                type="file"
                id="character3"
                name="character3"
                onChange={handleImageUpload}
              />{" "}
              <label className="add-button" htmlFor="fileElem"></label>
            </div>

            <label className="character3Items">Accepted Items (Choose 3)</label>
            <Multiselect options={["Item 1", "Item 2", "Item 3", "Item4"]} />

            <label className="character4">Upload Image for Character 4: </label>
            <div id="character-drop-area">
              <input
                type="file"
                id="character4"
                name="character4"
                onChange={handleImageUpload}
              />{" "}
              <label className="add-button" htmlFor="fileElem"></label>
            </div>

            <label className="character4Items">Accepted Items (Choose 3)</label>
            <Multiselect options={["Item 1", "Item 2", "Item 3", "Item4"]} />
          </div>
          <h1 className="font-roboto text-9xl font-medium">
            STEP 3. CHOOSE YOUR ITEMS
          </h1>

          <div className="box">
            <div className="item-box flex flex-col ">
              <label className="itemImage2">Item1:</label>
              <div id="item-drop-area">
                <input
                  type="file"
                  id="item1"
                  name="item1"
                  onChange={handleImageUpload}
                />{" "}
                <label className="add-button" htmlFor="fileElem"></label>
              </div>

              <label className="itemImage2">Item2:</label>
              <div id="item-drop-area">
                <input
                  type="file"
                  id="item2"
                  name="item2"
                  onChange={handleImageUpload}
                />{" "}
                <label className="add-button" htmlFor="fileElem"></label>
              </div>

              <label className="itemImage3">Item3: </label>
              <div id="item-drop-area">
                <input
                  type="file"
                  id="item3"
                  name="item3"
                  onChange={handleImageUpload}
                />{" "}
                <label className="add-button" htmlFor="fileElem"></label>
              </div>

              <label className="itemImage4">Item4: </label>
              <div id="item-drop-area">
                <input
                  type="file"
                  id="item4"
                  name="item4"
                  onChange={handleImageUpload}
                />{" "}
                <label className="add-button" htmlFor="fileElem"></label>
              </div>
            </div>
          </div>

          <div className="mount bg-center bg-no-repeat bg-cover bg-fixed bg-heroImage">
            <h1 className="font-roboto text-9xl font-medium">
              STEP 4. TIMER LENGTH
            </h1>
            <input
              className="timer border-gray-300"
              type="number"
              id="timerLength"
              name="timerLength"
              min="1"
              max="240"
            />
          </div>

          <div className="bottom bg-center bg-no-repeat bg-cover bg-fixed bg-heroImage">
            <h1 className="font-roboto text-9xl font-medium">
              STEP 5. GIVE THE WINNER SOME COMPLIMENTS uwu
            </h1>

            <div className=" flex flex-col">
              <label className="achievements">Achievements: 0</label>
              <textarea
                id="winnerScenario1"
                name="winnerScenario1"
                rows="4"
                cols="50"
              ></textarea>

              <label className="achievements">Achievements: 20</label>
              <textarea
                id="winnerScenario2"
                name="winnerScenario2"
                rows="4"
                cols="50"
              ></textarea>

              <label className="achievements">Achievements: 20+</label>
              <textarea
                id="winnerScenario3"
                name="winnerScenario3"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit align-middle w-40 h-16 rounded-lg"
          >
            VOILA
          </button>
          <button onClick={handleDelete} disabled={!gameId} className="delete align-middle w-40 h-16 rounded-lg">
            Delete
          </button>
          <button onClick={handleGenerateGame} disabled={!gameId} className="newGame align-middle w-40 h-16 rounded-lg">
            NewGame
          </button>
        </form>
      ) : (
        <div></div>
      )}
      <div>{submissionMessage}</div>
    </div>
  );
}
