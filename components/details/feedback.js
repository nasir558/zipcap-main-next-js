import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback({ sectionTitle, description, pageName, data, sliderRows, sliderItems }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: sliderItems,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: sliderRows,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="block w-full">
        <div className={`${pageName === "coursePlayer"?("block w0full"):("max-w-1100px mx-auto pl-5 pr-5")}`}>
          <div className="flex flex-col lg:flex-row ">
            {!!pageName && pageName !== "coursePlayer" && (
              <div>
                <div className="titleSection">
                  <h3>{sectionTitle}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )}
            <div className="flex-1">
              {!!pageName && pageName === "coursePlayer" && (
                <div>
                  <div className="titleSection">
                    <h3>{sectionTitle}</h3>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 gap-6">
                <Slider {...settings}>
                  {data.map((content, index) => (
                    <div key={index} className="bg-white feedbackBox">
                      <Link href={content.linkURL}>
                        <a>
                          <div className="flex flex-row flex-nowrap items-center">
                            <img src={content.pic} className="avatar" alt="" />
                            <p>
                              <span className="title block">
                                {content.name}
                              </span>
                              <span className="designation block">
                                {content.designation}
                              </span>
                            </p>
                          </div>
                          <div className="block feedbackMessage">
                            <p>{content.message}</p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
