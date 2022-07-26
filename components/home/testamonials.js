import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testamonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <>
        <div className="block testamonials pt-24 pb-20"  style={{backgroundImage: `url("/images/sliderBG.png")`}}>
            <div className="max-w-1100px mx-auto pl-5 pr-5 lg:pl-20 lg:pr-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                    <div className="col-span-2">
                        <h2 className="font-semibold">What our Students Says</h2>
                    </div>
                </div>
            <div className="sliderContent mt-8 md:mt-20">
                <Slider {...settings}>
                <div>
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="sm:flex-initial">
                           <div className="thumbnail">
                               <img src="/images/pexels-max-fischer-5212339@2x.png" className="w-full" alt="" />
                           </div>
                        </div>
                        <div className="sm:flex-initial text-base mt-3">
                            <div className="message">
                                <p>Zipcap is amazing platform for online learning. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="mt-5"><strong>Sara.</strong></p>
                                <p className="text-base mt-1">Product Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-8 md:mt-20 space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="sm:flex-initial text-base mt-3 order-2 sm:order-1">
                            <div className="message text-right">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <p className="mt-5"><strong>Sami.</strong></p>
                                <p className="text-base mt-1">Designer</p>
                            </div>
                        </div>
                        <div className="sm:flex-initial order-1 sm:oreder-2">
                           <div className="thumbnail float-right sm:float-none">
                               <img src="/images/pexels-max-fischer-5212339@2x.png" className="w-full" alt="" />
                           </div>
                        </div>                        
                    </div>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="sm:flex-initial">
                           <div className="thumbnail">
                               <img src="/images/pexels-max-fischer-5212339@2x.png" className="w-full" alt="" />
                           </div>
                        </div>
                        <div className="sm:flex-initial text-base mt-3">
                            <div className="message">
                                <p>Zipcap is amazing platform for online learning. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="mt-5"><strong>Sara.</strong></p>
                                <p className="text-base mt-1">Product Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-20 space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="sm:flex-initial text-base mt-3 order-2 sm:order-1">
                            <div className="message text-right">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <p className="mt-5"><strong>Sami.</strong></p>
                                <p className="text-base mt-1">Designer</p>
                            </div>
                        </div>
                        <div className="sm:flex-initial order-1 sm:oreder-2">
                           <div className="thumbnail float-right sm:float-none">
                               <img src="/images/pexels-max-fischer-5212339@2x.png" className="w-full" alt="" />
                           </div>
                        </div>                        
                    </div>
                </div>
                </Slider>
            </div>
            </div>
        </div>
       </>
    )
}

export default Testamonials
