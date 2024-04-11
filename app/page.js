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

export default function Home() {
  return (
    <main className={"min-w-screen min-h-screen"}>
      <div
        className="flex justify-center items-center"
        style={{ marginLeft: "20rem" }}
      >
        <form className="w-full space-y-14" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center ">
            <Image src={logo} alt="Logo" />

            <div className="flex space-x-14">
              <button
                className="w-40 h-16 rounded-lg"
                style={{
                  width: 160,
                  height: 40,
                  corner: 10,
                  backgroundColor: "#A48B83",
                  color: "white",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  marginRight: "20px",
                }}
              >
                Demo
              </button>
              <button
                className="w-40 h-16 rounded-lg"
                style={{
                  width: 160,
                  height: 40,
                  corner: 10,
                  backgroundColor: "#A48B83",
                  color: "white",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Login/Signup
              </button>
            </div>
          </div>
          <div className="h-screen bg-heroImage"></div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{
              color: "#FFFFF",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP 1. GIVE IT A NAME & BACKGROUND
          </h1>
          <div
            className="flex justify-center items-center"
            style={{
              width: 900,
              height: 600,
              borderRadius: 30,
              backgroundColor: "#F2EAE6",
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="gameName">Game Name</label>
              <input
                type="text"
                id="gameName"
                name="gameName"
                className="px-13 py-20 border border-gray-300"
                placeholder="Enter name"
              />

              <label htmlFor="gameBackground">
                Upload Image for Game Background
              </label>

              <input
                type="file"
                id="backgroundImage"
                name="backgroundImage"
                onChange={handleImageUpload}
                className="px-3 py-2 border border-blue-300"
              />
            </div>
          </div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{
              color: "#B39D97",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP 2. CREATE YOUR CHARACTERS
          </h1>
          <div
            className="flex justify-center items-center"
            style={{
              width: 900,
              height: 600,
              borderRadius: 30,
              backgroundColor: "#F2EAE6",
            }}
          >
            <label htmlFor="character1">Upload Image for Character 1: </label>
            <input
              type="file"
              id="character1"
              name="character1"
              onChange={handleImageUpload}
            />

            <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
            <select
              multiple
              id="character1Items"
              name="character1Items"
              className="mb-2 font-bold text-lg text-gray-900"
            >
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>

            <label htmlFor="character2">Upload Image for Character 2: </label>
            <input
              type="file"
              id="character2"
              name="character2"
              onChange={handleImageUpload}
            />

            <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
            <select
              multiple
              id="character2Items"
              name="character2Items"
              className="px-3 py-2 border border-gray-300"
            >
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>

            <label htmlFor="character3">Upload Image for Character 3: </label>
            <input
              type="file"
              id="character3"
              name="character3"
              onChange={handleImageUpload}
            />

            <label htmlFor="character1Items">Accepted Items (Choose 3)</label>
            <select
              multiple
              id="character3Items"
              name="character3Items"
              className="px-3 py-2 border border-gray-300"
            >
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>

            <label htmlFor="character4">Upload Image for Character 4: </label>
            <input
              type="file"
              id="character4"
              name="character4"
              onChange={handleImageUpload}
            />

            <label htmlFor="characterItems">Accepted Items (Choose 3)</label>
            <select
              multiple
              id="character4Items"
              name="character4Items"
              className="px-3 py-2 border border-gray-300"
            >
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>
          </div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{
              color: "#B39D97",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP 3. CHOOSE YOUR ITEMS
          </h1>

          <div
            className="flex justify-center items-center flex-wrap"
            style={{
              width: 900,
              height: 600,
              borderRadius: 30,
              backgroundColor: "#F2EAE6",
            }}
          >
            <div className="flex flex-col w-1/5">
              <label htmlFor="itemImage2">Item1:</label>
              <input
                type="file"
                id="item1"
                name="item1"
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex flex-col w-1/5">
              <label htmlFor="itemImage2">Item2:</label>
              <input
                type="file"
                id="item2"
                name="item2"
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex flex-col w-1/5">
              <label htmlFor="itemImage3">Item3: </label>
              <input
                type="file"
                id="item3"
                name="item3"
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex flex-col w-1/5">
              <label htmlFor="itemImage4">Item4: </label>
              <input
                type="file"
                id="item4"
                name="item4"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{
              color: "#B39D97",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP 4. TIMER LENGTH
          </h1>
          <div
            className="flex justify-center items-center"
            style={{
              width: 900,
              height: 110,
              borderRadius: 30,
              backgroundColor: "#F2EAE6",
            }}
          >
            <input
              type="number"
              id="timerLength"
              name="timerLength"
              min="1"
              max="240"
            />
          </div>

          <h1
            className="font-roboto text-9xl text-white font-medium"
            style={{
              color: "#B39D97",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP 5. GIVE THE WINNER SOME COMPLIMENTS uwu
          </h1>

          <div className=" flex flex-col">
            <label
              htmlFor="winnerScenario"
              style={{
                color: "#B39D97",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Achievements: 0
            </label>
            <textarea
              id="winnerScenario1"
              name="winnerScenario1"
              rows="4"
              cols="50"
              style={{
                width: 1078,
                height: 210,
                backgroundColor: "#F2EAE6",
                borderRadius: 10,
              }}
            ></textarea>

            <label
              htmlFor="winnerScenario"
              style={{
                color: "#B39D97",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Achievements: 20
            </label>
            <textarea
              id="winnerScenario2"
              name="winnerScenario2"
              rows="4"
              cols="50"
              style={{
                width: 1078,
                height: 210,
                backgroundColor: "#F2EAE6",
                borderRadius: 10,
              }}
            ></textarea>

            <label
              htmlFor="winnerScenario"
              style={{
                color: "#B39D97",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Achievements: 20+
            </label>
            <textarea
              id="winnerScenario3"
              name="winnerScenario3"
              rows="4"
              cols="50"
              style={{
                width: 1078,
                height: 210,
                backgroundColor: "#F2EAE6",
                borderRadius: 10,
              }}
            ></textarea>
          </div>

          <Image src={foot} alt="bottom picture" />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="align-middle w-40 h-16 rounded-lg"
              style={{
                width: 160,
                height: 40,
                corner: 10,
                backgroundColor: "#A48B83",
                color: "white",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              VOILA
            </button>
          </div>
        </form>
        <div>{submissionMessage}</div>
      </div>
    </main>
  );
}
