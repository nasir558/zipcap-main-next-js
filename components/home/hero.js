import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
  };

  return (
    <>
      <div className="block bannerMain">
        <div className="max-w-1100px mx-auto pl-5 pr-5 relative">
          <Slider {...settings}>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="leftSide">
                  <h1>
                    Learn new skills anytime, anywhere with top instructors
                  </h1>
                  <p>
                    Choose from over 100,000 online courses by our high
                    qualified instructors around the globe
                  </p>
                </div>
                <div className="rightSide text-right hidden lg:block">
                  <img
                    src="/images/bannerLady.png"
                    className="float-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="leftSide">
                  <h1>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h1>
                  <p>
                    Choose from over 100,000 online courses by our high
                    qualified instructors around the globe
                  </p>
                </div>
                <div className="rightSide text-right hidden lg:block">
                  <img
                    src="/images/bannerLady.png"
                    className="float-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:absolute bannerSearchForm">
            <form className="w-full max-w-lg bannerForm">
              <div className="flex flex-wrap md:flex-nowrap">
                <div className="formElementDiv md:flex-initial">
                  <input
                    className=""
                    type="text"
                    placeholder="What do you want to learn?"
                  />
                </div>
                <div className="formElementDiv md:flex-initial relative">
                  <select className="">
                    <option>Categories</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ACACAC"
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
                <div className="formElementDiv md:flex-initial">
                  <button type="submit" className="btn">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
