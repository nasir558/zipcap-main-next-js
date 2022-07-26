import React from "react";
import Link from "next/link";

function Instructions({submission, Instructions, title, messageTitle, message, btnText, btnLink}) {
  return (
    <div className="block w-full exam">
      <div class="coursePlayer">
        <div class="flex flex-col xl:flex-row flex-wrap space-y-10 xl:space-y-0 items-center videoTitle">
          <div>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="bg-white conversation flex flex-col items-center justify-center space-y-6">
        {!!submission ? (
          <img src="/images/ok-sign.svg" className="w-100px h-100px" alt="" />
        ): null}        
        <h4 className={`text-center instructionTitle ${submission ? ("greenText"):null}`}>{messageTitle}</h4>
        <p className="text-center instructions">{message}</p>
        <Link href={btnLink}>
          <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 uppercase text-white">
            {btnText}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Instructions;
