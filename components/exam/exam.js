import React from "react";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

function Exam() {
  return (
    <div className="block w-full exam">
      <form>
        <div class="coursePlayer">
          <div class="flex flex-col xl:flex-row flex-wrap space-y-10 xl:space-y-0 items-center videoTitle">
            <div>
              <h3>Mid term examnination</h3>
            </div>
            <div className="text-right xl:ml-auto">
              <button
                type="submit"
                className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 uppercase text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full bg-white quiz">
          <div className="examTitle text-center">
            <h3 className="font-medium">
              Adobe Lightroom, Photo editing masterclass, Edit your photos
            </h3>
            <p className="text-sm font-normal">
              <small>( Mid term examination )</small>
            </p>
          </div>
          <div className="flex flex-row space-x-6 items-center quizHeader">
            <div className="quizNumber">
              <p>
                <strong className="font-medium">Total Marks: 100</strong>
              </p>
            </div>
            <div className="quizMarks">
              <div className="flex flex-row space-x-6">
                <div>
                  <p>
                    <strong className="font-medium">Total Time:</strong> 04 hrs
                  </p>
                  <p className="timeLeft">
                    <strong className="font-medium">Time left:</strong> 02:36:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ModuleList">
            <div className="singleQuesiton">
              <h4 className="question font-medium text-base flex justify-between flex-wrap items-center">
                <span>Question 1: Which one is the correct option?</span>
                <span className="text-sm">05 Marks</span>
              </h4>
              <div className="answers">
                <label
                  className="flex flex-row items-center radioBtn"
                  htmlFor="a1"
                >
                  <input
                    type="radio"
                    className="css-radio"
                    id="a1"
                    name="q1_answer"
                  />
                  <span className="option">A</span>
                  <span className="answerText inline-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </label>
                <label
                  className="flex flex-row items-center radioBtn"
                  htmlFor="a2"
                >
                  <input
                    type="radio"
                    className="css-radio"
                    id="a2"
                    name="q1_answer"
                  />
                  <span className="option">B</span>
                  <span className="answerText inline-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </label>
                <label
                  className="flex flex-row items-center radioBtn"
                  htmlFor="a3"
                >
                  <input
                    type="radio"
                    className="css-radio"
                    id="a3"
                    name="q1_answer"
                  />
                  <span className="option">C</span>
                  <span className="answerText inline-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </label>
                <label
                  className="flex flex-row items-center radioBtn"
                  htmlFor="a4"
                >
                  <input
                    type="radio"
                    className="css-radio"
                    id="a4"
                    name="q1_answer"
                  />
                  <span className="option">D</span>
                  <span className="answerText inline-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </label>
              </div>
            </div>
            <div className="singleQuesiton">
              <h4 className="question font-medium text-base flex justify-between flex-wrap items-center">
                <span>Question 3: Define types of lenses?</span>
                <span className="text-sm">10 Marks</span>
              </h4>
              <div className="answers">
                <div>
                  <SunEditor
                    name=""
                    width="100%"
                    height="333px"
                    placeholder="Please type here..."
                    setDefaultStyle="font-family: 'Poppins', sans-serif !important; font-size: 16px;"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex justify-end mt-20px"
            >
              <div className="text-right">
                <button
                  type="submit"
                  className="viewAllBtn md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 mr-10px text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Exam;
