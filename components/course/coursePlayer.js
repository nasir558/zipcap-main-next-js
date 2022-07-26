import React from "react";
import Link from "next/link";
import ReactPlayer from 'react-player/lazy'

function CoursePlayer({videoTitle, nextBtnText, nextBtnLink, videoURL, videoPoster}) {
  
  return (
    <div className="coursePlayer">
      <div className="flex flex-col xl:flex-row flex-wrap space-y-10 xl:space-y-0 items-center videoTitle">
        <div>
          <h3>{videoTitle}</h3>
        </div>
        <div className="text-right xl:ml-auto">
          <Link href={nextBtnLink}>
            <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 uppercase text-white">
              {nextBtnText}
            </a>
          </Link>         
        </div>
      </div>
      <div className="block w-full">
          <div className="videoPlayer relative">
            <ReactPlayer
              controls = {true}
              pip = {true}
              light = {videoPoster}
              width = "100%"
              height = "auto"
              playsinline = {true}
              className='react-player'
              url={videoURL} />
            </div>
      </div>
    </div>
  );
}

export default CoursePlayer;
