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
} from "./script";
import logo from "../app/assets/Landie.png";
import foot from "../app/assets/bottom.png";
import image from "../app/assets/Picture.png";

export default function Home() {
  return (
    <main className={"min-w-screen min-h-screen"}>
      <form className="w-full space-y-14" onSubmit={handleSubmit}>
        <div className="cover bg-center bg-no-repeat bg-cover bg-fixed bg-heroImage">
          <div className="flex justify-between items-center ">
            <Image src={logo} alt="Logo" style={{ marginRight: "500px" }} />

            <button className="button">Demo</button>
            <button className="button">Login/Signup</button>
          </div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{ marginTop: "600px" }}
          >
            STEP 1. GIVE IT A NAME & BACKGROUND
          </h1>

          <div className="box flex flex-col">
            <label htmlFor="gameName">Game Name</label>
            <input
              type="text"
              id="gameName"
              name="gameName"
              className="textinput"
              placeholder="Enter name"
            />

            <label htmlFor="gameBackground">
              Upload Image for Game Background
            </label>
            <div className="background-box">
              <div id="drop-area">
                <Image src={image} alt="drop image icon" />
                <form className="my-form">
                  <p>Drop your image here</p>
                  <input
                    type="file"
                    id="fileElem"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <label className="button" for="fileElem">
                    Upload
                  </label>
                </form>
              </div>
            </div>
            <div className="button-container">
              <button className="cancel-button">Cancel</button>
              <button className="done-button">Done</button>
            </div>
          </div>
        </div>

        <h1 className="font-roboto text-9xl">STEP 2. CREATE YOUR CHARACTERS</h1>
        <div className="box">
          <label htmlFor="character1">Upload Image for Character 1: </label>
          <div id="item-drop-area">
            <form class="my-form">
              <input
                type="file"
                id="character1"
                name="character1"
                onChange={handleImageUpload}
              />{" "}
              <label class="button" for="fileElem">
                Upload
              </label>
            </form>
          </div>

          <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
          <select
            multiple
            id="character1Items"
            name="character1Items"
            className="dropdown-menu closed px-3 py-2"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
            <option value="item4">Item 4</option>
          </select>

          <label htmlFor="character2">Upload Image for Character 2: </label>
          <div id="item-drop-area">
            <form class="my-form">
              <input
                type="file"
                id="character2"
                name="character2"
                onChange={handleImageUpload}
              />{" "}
              <label class="button" for="fileElem">
                Upload
              </label>
            </form>
          </div>

          <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
          <select
            multiple
            id="character2Items"
            name="character2Items"
            className="dropdown-menu px-3 py-2"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
            <option value="item4">Item 4</option>
          </select>

          <label htmlFor="character3">Upload Image for Character 3: </label>
          <div id="item-drop-area">
            <form class="my-form">
              <input
                type="file"
                id="character3"
                name="character3"
                onChange={handleImageUpload}
              />{" "}
              <label class="button" for="fileElem">
                Upload
              </label>
            </form>
          </div>

          <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
          <select
            multiple
            id="character3Items"
            name="character3Items"
            className="dropdown-menu px-3 py-2"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
            <option value="item4">Item 4</option>
          </select>

          <label htmlFor="character4">Upload Image for Character 4: </label>
          <div id="item-drop-area">
            <form class="my-form">
              <input
                type="file"
                id="character4"
                name="character4"
                onChange={handleImageUpload}
              />{" "}
              <label class="button" for="fileElem">
                Upload
              </label>
            </form>
          </div>

          <label htmlFor="characterItems">Accepted Items (Choose 3)</label>
          <select
            multiple
            id="character4Items"
            name="character4Items"
            className="dropdown-menu px-3 py-2"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
            <option value="item4">Item 4</option>
          </select>
        </div>

        <h1 className="font-roboto text-9xl font-medium">
          STEP 3. CHOOSE YOUR ITEMS
        </h1>

        <div className="box">
          <div className="flex w-1/5">
            <label htmlFor="itemImage2">Item1:</label>
            <div id="item-drop-area">
              <form class="my-form">
                <input
                  type="file"
                  id="item1"
                  name="item1"
                  onChange={handleImageUpload}
                />{" "}
                <label class="button" for="fileElem">
                  Upload
                </label>
              </form>
            </div>
          </div>

          <div className="flex w-1/5">
            <label htmlFor="itemImage2">Item2:</label>
            <div id="item-drop-area">
              <form class="my-form">
                <input
                  type="file"
                  id="item2"
                  name="item2"
                  onChange={handleImageUpload}
                />{" "}
                <label class="button" for="fileElem">
                  Upload
                </label>
              </form>
            </div>
          </div>

          <div className="flex w-1/5">
            <label htmlFor="itemImage3">Item3: </label>
            <div id="item-drop-area">
              <form class="my-form">
                <input
                  type="file"
                  id="item3"
                  name="item3"
                  onChange={handleImageUpload}
                />{" "}
                <label class="button" for="fileElem">
                  Upload
                </label>
              </form>
            </div>
          </div>

          <div className="flex w-1/5">
            <label htmlFor="itemImage4">Item4: </label>
            <div id="item-drop-area">
              <form class="my-form">
                <input
                  type="file"
                  id="item4"
                  name="item4"
                  onChange={handleImageUpload}
                />{" "}
                <label class="button" for="fileElem">
                  Upload
                </label>
              </form>
            </div>
          </div>
        </div>

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

        <h1 className="font-roboto text-9xl font-medium">
          STEP 5. GIVE THE WINNER SOME COMPLIMENTS uwu
        </h1>

        <div className=" flex flex-col">
          <label htmlFor="winnerScenario" className="achievements">
            Achievements: 0
          </label>
          <textarea
            id="winnerScenario1"
            name="winnerScenario1"
            rows="4"
            cols="50"
          ></textarea>

          <label htmlFor="winnerScenario" className="achievements">
            Achievements: 20
          </label>
          <textarea
            id="winnerScenario2"
            name="winnerScenario2"
            rows="4"
            cols="50"
          ></textarea>

          <label htmlFor="winnerScenario3" className="achievements">
            Achievements: 20+
          </label>
          <textarea
            id="winnerScenario3"
            name="winnerScenario3"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit align-middle w-40 h-16 rounded-lg"
        >
          VOILA
        </button>
        <Image className="bottom" src={foot} alt="bottom picture" />
      </form>
    </main>
  );
}
