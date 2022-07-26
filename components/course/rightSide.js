import React, { useState } from "react";
import CoursePlayer from "./coursePlayer";
import Overview from "./overview";
import Discussion from "./discussion";
import Quiz from "./quiz";
import Library from './library';
function RightSide() {
  const [tabs, setTabs] = useState("overview");
  return (
    <>
      <CoursePlayer
        videoTitle="3: The industry's standard dummy text ever since the 1500s"
        nextBtnText="Next Lesson"
        nextBtnLink="/"
        videoURL="/videos/React_Introduction.mp4"
        videoPoster="/images/videoPlayerTyhumbnail.png"
      />
      <div className="block w-full navigation overflow-x-auto">
        <div className="flex flex-row space-x-8 items-center">
          <div className="flex-shrink-0">
            <button
              type="button"
              role="button"
              className={`uppercase flex flex-row items-center space-x-2 ${
                tabs === "discussion" ? "tabActive" : ""
              }`}
              onClick={() => setTabs("discussion")}
              onKeyDown={() => setTabs("discussion")}
            >
              <img src="/images/chat-2.png" className="discussionIcon" alt="" />
              <span>Discussion</span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              role="button"
              className={`uppercase flex flex-row items-center space-x-2 ${
                tabs === "quiz" ? "tabActive" : ""
              }`}
              onClick={() => setTabs("quiz")}
              onKeyDown={() => setTabs("quiz")}
            >
              <img
                src="/images/question-mark.png"
                className="quizIcon"
                alt=""
              />
              <span>Quiz</span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              role="button"
              className={`uppercase flex flex-row items-center space-x-2 ${
                tabs === "assignment" ? "tabActive" : ""
              }`}
              onClick={() => setTabs("assignment")}
              onKeyDown={() => setTabs("assignment")}
            >
              <img
                src="/images/file-grey.png"
                className="assignmentIcon"
                alt=""
              />
              <span>Assignment</span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              role="button"
              className={`uppercase flex flex-row items-center space-x-2 ${
                tabs === "library" ? "tabActive" : ""
              }`}
               onClick={() => setTabs("library")}
              onKeyDown={() => setTabs("library")}
            >
              <img src="/images/download.png" className="libraryIcon" alt="" />
              <span>library</span>
            </button>
          </div>
          <div className="shareBtn flex-shrink-0">
            <button
              type="button"
              role="button"
              className="uppercase flex flex-row items-center space-x-2"
            >
              <img src="/images/share.png" className="shareIcon" alt="" />
              <span>Share this course</span>
            </button>
          </div>
        </div>
      </div>
      {tabs === "overview" && <Overview />}
      {tabs === "discussion" && <Discussion />}
      {tabs === "quiz" && <Quiz type="quiz" title="Quiz No 1" />}
      {tabs === "assignment" && <Quiz type="assignment" title="Assignment No 1" />}
      {tabs === "library" && <Library />}
    </>
  );
}
export default RightSide;
