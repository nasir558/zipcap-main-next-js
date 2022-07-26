import React from "react";

function Discussion() {
  return (
    <div className="block w-full discussion">
      <div className="bg-white filterDiscussion">
        <form>
          <div className="flex flex-col space-x-0 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 2xl:space-x-20 items-center">
            <div className="relative w-full lg:w-auto">
              <select className="transition-all duration-300">
                <option>All Units</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#7B7B7B"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="relative w-full lg:w-auto">
              <select className="transition-all duration-300">
                <option>My Questions</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#7B7B7B"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="searchInput w-full lg:w-auto">
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  name="company_website"
                  id="company_website"
                  className="transition-all duration-300 w-full lg:w-auto"
                  placeholder="Search questions"
                />
                <span className="inline-flex items-center">
                  <button type="submit" className="transition-all duration-300">
                    <img
                      src="/images/search.png"
                      className="mx-auto"
                      aria-hidden="true"
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="block bg-white conversation">
        <div className="flex flex-col space-y-6 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-6 items-start">
          <img src="/images/reviewer-pic.png" className="p-pic" alt="" />
          <div>
            <p className="name">
              <strong>Aamir</strong> <span>(2 weeks ago)</span>
            </p>
            <p className="message">
              What is meant by direct lighting and soft lighting? can we use
              natural light with no shades?
            </p>
            <div className="flex flex-row space-x-6">
              <span className="likes">
                <img src="/images/like.png" className="float-left" alt="" />
                252 likes
              </span>
              <span className="replies">
                <img
                  src="/images/speech-bubble.png"
                  className="float-left"
                  alt=""
                />
                15 replies
              </span>
            </div>
            <div className="block w-full reply">
              <div className="flex flex-row space-x-4 items-start">
                <img src="/images/reviewer-pic.png" className="p-pic" alt="" />
                <div>
                  <p className="name">
                    <strong>Aamir</strong> <span>(2 weeks ago)</span>
                  </p>
                  <p className="message">
                    What is meant by direct lighting and soft lighting? can we
                    use natural light with no shades?
                  </p>
                  <div className="flex flex-row space-x-6">
                    <span className="likes">
                      <img
                        src="/images/like.png"
                        className="float-left"
                        alt=""
                      />
                      252 likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full reply">
              <div className="flex flex-row space-x-4 items-start">
                <img src="/images/reviewer-pic.png" className="p-pic" alt="" />
                <div>
                  <p className="name">
                    <strong>Aamir</strong> <span>(2 weeks ago)</span>
                  </p>
                  <p className="message">
                    What is meant by direct lighting and soft lighting? can we
                    use natural light with no shades?
                  </p>
                  <div className="flex flex-row space-x-6">
                    <span className="likes">
                      <img
                        src="/images/like.png"
                        className="float-left"
                        alt=""
                      />
                      252 likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full errorBox">
          <div className="Error">
            <div className="flex flex-row space-x-4 items-start">
              <img src="/images/sad-face-in-rounded-square.png" alt="" />
              <p>You must be signed in to reply to this question.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-white conversation">
        <div className="flex flex-row space-x-6 items-start">
          <img src="/images/reviewer-pic.png" className="p-pic" alt="" />
          <div>
            <p className="name">
              <strong>Aamir</strong> <span>(2 weeks ago)</span>
            </p>
            <p className="message">
              What is meant by direct lighting and soft lighting? can we use
              natural light with no shades?
            </p>
            <div className="flex flex-row space-x-6">
              <span className="likes">
                <img src="/images/like.png" className="float-left" alt="" />
                252 likes
              </span>
              <span className="replies">
                <img
                  src="/images/speech-bubble.png"
                  className="float-left"
                  alt=""
                />
                15 replies
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full seeMore">
        <button
          type="button"
          className="block w-full transition-all duration-300 text-center"
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default Discussion;
