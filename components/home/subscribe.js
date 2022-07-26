import React from "react";
import Link from "next/link";

const Subscribe = ({ section }) => {
  return (
    <>
      <div className={`block subscribe bg-pink ${!!section && section === "studentDashboardSection"?("pt-28 pb-28"):("pt-48")} ${section}`}>
        <div className="max-w-1044px mx-auto pl-5 pr-5 xl:pl-0 xl:pr-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-14 gap-y-14 xl:gap-y-0">
            <div className="subscribeBox bg-white px-4 md:px-11 py-4 md:py-16">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-initial">
                  <div className="thumbnail">
                    <img
                      src="/images/pexels-max-fischer-5212339@2x.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-initial text-xl mt-1">
                  <div className="message">
                    <p className="title">Become an instructor</p>
                    <p className="description mt-3.5 mb-8">
                      Join the fast growing platform as instructor and teach
                      world what you are good in
                    </p>
                    <Link href="">
                      <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white">
                        Apply as instructor
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribeBox bg-white px-4 md:px-11 py-4 md:py-16">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-initial">
                  <div className="thumbnail">
                    <img
                      src="/images/pexels-max-fischer-5212339@2x.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-initial text-xl mt-1">
                  <div className="message">
                    <p className="title">Zipcap for Business</p>
                    <p className="description mt-3.5 mb-8">
                      Join the fast growing platform as instructor and teach
                      world what you are good in
                    </p>
                    <Link href="">
                      <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white">
                        Get Zipcap for business
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!!section && section === "homePageSection" && (
          <div className="max-w-1000px form mx-auto px-4 xl:pl-0 xl:pr-0 mt-20">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 bg-white py-4 px-4 xl:px-24 items-center">
              <div className="xl:col-span-2">
                <h2>Subscribe to our newsletter to get updates</h2>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
              </div>
              <div className="xl:col-span-1">
                <form className="w-full max-w-lg bannerForm mt-4">
                  <div className="flex flex-col">
                    <div className="w-full">
                      <input
                        className="w-full"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        className="w-full viewAllBtn mt-4 rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Subscribe;
