import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

function Quiz({ type, title }) {
  const [quiz, setQuiz] = useState(false);

  return (
    <div className="block w-full bg-white quiz">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-15px md:p-0 md:items-center quizHeader">
        <div className="quizNumber">
          <p>
            <strong className="font-medium">{title}</strong>
          </p>
        </div>
        <div className="quizMarks">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div>
              <p>
                <strong className="font-medium">Total Marks:</strong> 25
              </p>
            </div>
            <div>
              <p>
                <strong className="font-medium">Deadline:</strong> Monday 4th
                April, 05:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      {!quiz ? (
        <div className="block w-full exam">
          <div className="bg-white conversation flex flex-col items-center justify-center space-y-6">

            <h4 className="text-center instructionTitle">Quiz Instructions</h4>
            <p className="text-center instructions">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>

            <button
              onClick={() => setQuiz(true)}
              onKeyDown={() => setQuiz(true)}
              className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 uppercase text-white">
              Start Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="ModuleList formAccordion block w-full">
          <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
            <AccordionItem uuid="0">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">
                      Question 1: Which one is the correct option?{" "}
                    </h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="answers">
                  <form>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                      <div></div>
                      <div className="text-right">
                        <button
                          type="submit"
                          className="viewAllBtn md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">
                      Question 2: Lorem Ipsum is simply dummy text of the printing
                      and typesetting?
                    </h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="answers">
                  <form>
                    <div className="block w-full">
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
                    {type === "assignment" && (
                      <div className="block w-full">
                        <label
                          className="flex flex-row items-center uploadFile"
                          htmlFor="a9"
                        >
                          <input
                            type="file"
                            className="css-file"
                            id="a9"
                            name="upload"
                          />
                          <span className="uploadFileText inline-block">
                            Upload attachments if there is any
                          </span>
                          <span className="icon"></span>
                        </label>
                      </div>
                    )}

                    <div className={`grid grid-cols-1 lg:grid-cols-2 items-center ${type === "quiz" ? ("mt-20px") : null}`}>
                      <div className="timeOutMsg"></div>
                      <div className="text-right">
                        <button
                          type="submit"
                          className="viewAllBtn md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">
                      Question 3: Lorem Ipsum is simply dummy text of the printing
                      and typesetting and used worldwide?
                    </h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="answers">
                  <form>
                    <label
                      className="flex flex-row items-center radioBtn"
                      htmlFor="a5"
                    >
                      <input
                        type="radio"
                        className="css-radio"
                        id="a5"
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
                      htmlFor="a6"
                    >
                      <input
                        type="radio"
                        className="css-radio"
                        id="a6"
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
                      htmlFor="a7"
                    >
                      <input
                        type="radio"
                        className="css-radio"
                        id="a7"
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
                      htmlFor="a8"
                    >
                      <input
                        type="radio"
                        className="css-radio"
                        id="a8"
                        name="q1_answer"
                      />
                      <span className="option">D</span>
                      <span className="answerText inline-block">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </label>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                      <div className="timeOutMsg">
                        <p>The deadline for this quiz is over.</p>
                      </div>
                      <div className="text-right">
                        <button
                          type="submit"
                          disabled
                          className="viewAllBtn md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

      )}

    </div>
  );
}

export default Quiz;
