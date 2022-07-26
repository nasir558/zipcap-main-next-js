import React, { useState } from "react";
import "../styles/main.scss";
import "tailwindcss/tailwind.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { useRouter } from "next/router";
import Feedback from "../components/details/feedback";
import CourseModules from "../components/course/courseModules";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname.replace(/^\/([^\/]*).*$/, "$1");
  const [drawer, setDrawer] = useState("");

  const dataFeedback = [
    {
      pic: "/images/user-pic.png",
      name: "Sadia khan",
      designation: "Photographer",
      message:
        "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkURL: "/",
    },
    {
      pic: "/images/user-pic.png",
      name: "Sadia khan",
      designation: "Photographer",
      message:
        "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkURL: "/",
    },
    {
      pic: "/images/user-pic.png",
      name: "Sadia khan",
      designation: "Photographer",
      message:
        "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkURL: "/",
    },
  ];

  return (
    <>
      {(() => {
        if (path === "course") {
          return (
            <div className="coursePlayerBg">
              <div className="w-full courseList max-w-1920px mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <CourseModules drawerStatus={drawer} />

                  <div className="xl:col-span-3">
                    <div className="pr-20px pl-20px xl:pl-0">
                      <div className="xl:hidden z-10 flex flex-row justify-between mobileHeader fixed top-0 left-0 w-full">
                        <button
                          className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                          type="button"
                        >
                          <span className="backIcon transition-all duration-300">
                            <img
                              src="/images/backButton.png"
                              alt=""
                              className="mx-auto"
                            />
                          </span>
                        </button>
                        {drawer === "openDrawer" ? (
                          <button
                            className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                            type="button"
                            onClick={() => setDrawer("")}
                            onKeyDown={() => setDrawer("")}
                          >
                            <span className="backIcon transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto mt-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#ffffff"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <button
                            className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                            type="button"
                            onClick={() => setDrawer("openDrawer")}
                            onKeyDown={() => setDrawer("openDrawer")}
                          >
                            <span className="backIcon transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto mt-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#ffffff"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"
                                />
                              </svg>
                            </span>
                          </button>
                        )}
                      </div>
                      <div className="mt-20 xl:mt-0">
                        <Component {...pageProps} />
                      </div>
                    </div>
                    <div className="block feedback">
                      <Feedback
                        sectionTitle="Feedback from recently enrolled students in this course"
                        data={dataFeedback}
                        pageName="coursePlayer"
                        sliderRows={1}
                        sliderItems={3}
                      />
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <>
              <Header />
              <div className="mt-78px xl:mt-0">
                <Component {...pageProps} />
              </div>
              <Footer />
            </>
          );
        }
      })()}
    </>
  );
}

export default MyApp;
