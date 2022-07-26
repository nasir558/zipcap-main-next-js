import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Courses = ({title, btnText, btnLink, slider, data, pageName, sliderRows, sliderItems}) => {
    const courseCount = data.filter(item=> item.title).length;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sliderItems,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        rows: sliderRows,
        centerPadding: "120px",
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              rows: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              rows: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              rows: 1
            }
          }
        ]
    };

    return (
       <>
        <div className="block categories">
            <div className="max-w-1100px mx-auto pl-5 pr-5">
                {!!pageName && pageName === "ListPage"?(
                    <div className="grid grid-col-1 md:grid-cols-2 gap-x-4 mb-10">
                        <div className="md:inline-flex">
                            <form method="" action="" className="w-full flex md:max-w-lg listDropdown">
                                <div className="relative w-full md:w-auto md:flex-initial">
                                        <select className="">
                                            <option>Most Viewed</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7B7B7B">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                 </div>
                            </form>
                        </div>
                        <div className="md:text-right totalResult mt-3 text-base">
                            348 results found.
                        </div>
                    </div> 
                ):(
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 pb-12 sectionHeader">
                        <div className="md:col-span-2">
                            <h2 className="font-semibold">{title}</h2>
                        </div>
                        {!!btnText && (
                            <div className="text-right pt-2.5">
                                <Link href={btnLink}>
                                    <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white">{btnText}</a>
                                </Link>
                            </div>
                        )}                        
                    </div> 
                )}                               
                {!!slider && slider === "Yes".toLowerCase()?(
                    
                            <>
                            <div className={`coursesSlider ${courseCount > 3 ?("extraPadding"):("")}`}>
                                <Slider {...settings}>                                    
                                        {data.map((content, index) => (                    
                                           <div key={index} className="cardCon overflow-hidden relative bg-white">
                                              <div className="image">
                                                    <img className="w-full featureImage" src={content.featureImage} alt="" />
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div>
                                                        <span className="float-left starIcon">
                                                                <img src="/images/003-star@2x.png" alt="" />
                                                        </span>
                                                            <span className="text-xs pl-2">{content.ratings}</span>
                                                        </div>
                                                        <div>
                                                            <span className="float-left viewIcon">
                                                                <img src="/images/002-view@2x.png" alt="" />
                                                            </span>
                                                            <span className="text-xs pl-2">{content.views}</span>
                                                        </div>
                                                        <div>
                                                            <span className="float-left playIcon">
                                                                <img src="/images/001-play@2x.png" alt="" />
                                                            </span>
                                                            <span className="text-xs pl-2">{content.lessons}</span> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="details">
                                                    <div className="title">
                                                        <Link href={`${(content.linkURL)}`}>
                                                            <a>{content.title}</a>
                                                        </Link>
                                                    </div>
                                                    <p className="description">{content.description}</p> 
                                                    <div className="grid grid-cols-2 gap-2 cardFooter">
                                                        <div>
                                                            <span className="float-left avatar">
                                                                <img src={content.avatar} alt="" />
                                                        </span>
                                                            <span className="text">{content.name}</span>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text oldPrice">{content.oldPrice}</span>
                                                            <span className="text newPrice">{content.newPrice}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                           </div> 
                                        ))}
                                </Slider>
                            </div>
                            </> 
                        ):(
                           <>
                            <div className={`${!!pageName && pageName === "ListPage" ? ("grid grid-cols-1 md:grid-cols-2 gap-10"):("grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10")}`}>
                                {data.map((content, index) => (                    
                                    <div key={index} className="cardCon overflow-hidden relative bg-white">
                                        <div className="image">
                                            <img className="w-full featureImage" src={content.featureImage} alt="" />
                                            <div className="grid grid-cols-3 gap-2">
                                                <div>
                                                <span className="float-left starIcon">
                                                        <img src="/images/003-star@2x.png" alt="" />
                                                </span>
                                                    <span className="text-xs pl-2">{content.ratings}</span>
                                                </div>
                                                <div>
                                                    <span className="float-left viewIcon">
                                                        <img src="/images/002-view@2x.png" alt="" />
                                                    </span>
                                                    <span className="text-xs pl-2">{content.views}</span>
                                                </div>
                                                <div>
                                                    <span className="float-left playIcon">
                                                        <img src="/images/001-play@2x.png" alt="" />
                                                    </span>
                                                    <span className="text-xs pl-2">{content.lessons}</span> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="title">
                                                <Link href={`${(content.linkURL)}`}>
                                                    <a>{content.title}</a>
                                                </Link>
                                            </div>
                                            <p className="description">{content.description}</p>
                                            <div className="grid grid-cols-2 gap-2 cardFooter">
                                                <div>
                                                    <span className="float-left avatar">
                                                        <img src={content.avatar} alt="" />
                                                </span>
                                                    <span className="text">{content.name}</span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text oldPrice">{content.oldPrice}</span>
                                                    <span className="text newPrice">{content.newPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                ))} 
                            </div>
                           </>
                        )}                     
            </div>
        </div>
       </>
    )
}

export default Courses
