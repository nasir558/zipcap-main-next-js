import React, {useState} from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Details() {
    const [tabIndex, setTabIndex] = useState(0);
    const dataOverview = [
        {
            title: "Course Description",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            title: "Requirements",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            title: "Who this course is for?",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            title: "Certificate on completion",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]
    const dataCurriculam = [
        {
            pic: "/images/Mask-Group-14.png",
            description: "Introduction to course, camera basics and Lightroom first look getting familiar with lighting.",
            descriptionLInk: "/",
            time: '10:20',
            buttonText: "Try with pro",
            buttonLInk: "/"
        },
        {
            pic: "/images/Mask-Group-14.png",
            description: "Introduction to course, camera basics and Lightroom first look getting familiar with lighting.",
            descriptionLInk: "/",
            time: '10:20',
            buttonText: "Try with pro",
            buttonLInk: "/"
        },
        {
            pic: "/images/Mask-Group-14.png",
            description: "Introduction to course, camera basics and Lightroom first look getting familiar with lighting.",
            descriptionLInk: "/",
            time: '10:20',
            buttonText: "Try with pro",
            buttonLInk: "/"
        },
        {
            pic: "/images/Mask-Group-14.png",
            description: "Introduction to course, camera basics and Lightroom first look getting familiar with lighting.",
            descriptionLInk: "/",
            time: '10:20',
            buttonText: "Try with pro",
            buttonLInk: "/"
        },
        {
            pic: "/images/Mask-Group-14.png",
            description: "Introduction to course, camera basics and Lightroom first look getting familiar with lighting.",
            descriptionLInk: "/",
            time: '10:20',
            buttonText: "Try with pro",
            buttonLInk: "/"
        }
    ]
    const dataFaqs = [
        {
            question: "Is this course for beginners?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Is this course for beginners?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Can I get certificate after completion?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem ipsum this is?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Can a beginner take advantage of this course?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Is there any lecture of photography?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Is this course for beginners?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Can I get certificate after completion?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },,
        {
            question: "Is this course for beginners?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Can I get certificate after completion?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]
    const dataReviews = [
        {
            pic: "/images/reviewer-pic.png",
            name: "Aamir",
            time: "2 weeks ago",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            pic: "/images/reviewer-pic.png",
            name: "Nasir",
            time: "2 weeks ago",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            pic: "/images/reviewer-pic.png",
            name: "Khan",
            time: "2 weeks ago",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            pic: "/images/reviewer-pic.png",
            name: "Ali",
            time: "2 weeks ago",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]
    return (
        <div>
            <div className="block about w-full">
                <div className="max-w-1100px mx-auto pl-5 pr-5">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 order-2 lg:order-1 pr-0 xl:pr-20 customTabs details-tabs">
                            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                                <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Curriculam</Tab>
                                <Tab>FAQs</Tab>
                                <Tab>Reviews</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="block overview w-full">
                                    {dataOverview.map((content, index) => ( 
                                        <div key = {index}>
                                            <h3 className="heading">{content.title}</h3>
                                            <p className="description">{content.description}</p>
                                     </div>
                                    ))}
                                   </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="block w-full curriculam">
                                    {dataCurriculam.map((content, index) => ( 
                                        <div key = {index} className="flex flex-col md:flex-row c-item space-y-7 md:space-y-0 space-x-7 items-center">
                                            <img src={content.pic} className="c-image" alt="" />
                                            <p>
                                            <Link href={content.descriptionLInk}>
                                                <a className="no-underline">{content.description}</a>
                                            </Link>
                                                <span className="flex w-full mt-2.5">
                                                    <span className="time mx-auto md:m-0 flex-initial"><img src="/images/clock-white.png" alt="" />{content.time}</span>
                                                </span>
                                            </p>
                                            <Link href={content.buttonLInk}>
                                                <a className="text-center transition-all duration-300 tryItBtn">{content.buttonText}</a>
                                            </Link>

                                        </div>
                                     ))}
                                        <Link href="/">
                                            <a className="text-center seeMoreBtn block w-full transition-all duration-300 font-semibold">See more</a>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="block w-full FAQs">
                                    <Accordion preExpanded={["0"]}>
                                    {dataFaqs.map((content, index) => (
                                        <AccordionItem key={index} uuid={`${index}`}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                        {content.question}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="block w0full FAQsAns">
                                                    <p>{content.answer}</p>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    ))}                                    
                                    </Accordion>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="block w-full reviews">
                                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 space-x-0 md:space-x-4">
                                            <div className="flex-initial">
                                                <div className="average-rating">
                                                    <p className="total-value text-center">4.5</p>
                                                    <p className="flex justify-around rating-stars">
                                                        <img src="/images/yellow-start-13.png" alt="" />
                                                        <img src="/images/yellow-start-13.png" alt="" />
                                                        <img src="/images/yellow-start-13.png" alt="" />
                                                        <img src="/images/grey-star.png" alt="" />
                                                        <img src="/images/grey-star.png" alt="" />
                                                    </p>
                                                    <p className="rating-text text-center">Course Ratings</p>
                                                </div>
                                            </div>
                                            <div className="flex-initial percentBar">
                                                    <div className="flex flex-row flex-nowrap items-center space-x-4">
                                                        <div className="base">
                                                            <div className="progress" style = {{width: "70%"}}></div>
                                                        </div>
                                                        <div>
                                                        <div className="flex justify-around">
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="rating-text">60%</p>
                                                    </div>
                                                    <div className="flex flex-row flex-nowrap items-center space-x-4">
                                                        <div className="base">
                                                            <div className="progress" style = {{width: "60%"}}></div>
                                                        </div>
                                                        <div>
                                                        <div className="flex justify-around">
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="rating-text">60%</p>
                                                    </div>
                                                    <div className="flex flex-row flex-nowrap items-center space-x-4">
                                                        <div className="base">
                                                            <div className="progress" style = {{width: "50%"}}></div>
                                                        </div>
                                                        <div>
                                                        <div className="flex justify-around">
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="rating-text">60%</p>
                                                    </div>
                                                    <div className="flex flex-row flex-nowrap items-center space-x-4">
                                                        <div className="base">
                                                            <div className="progress" style = {{width: "40%"}}></div>
                                                        </div>
                                                        <div>
                                                        <div className="flex justify-around">
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="rating-text">60%</p>
                                                    </div>
                                                    <div className="flex flex-row flex-nowrap items-center space-x-4">
                                                        <div className="base">
                                                            <div className="progress" style = {{width: "30%"}}></div>
                                                        </div>
                                                        <div>
                                                        <div className="flex justify-around">
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/yellow-start-13.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                            <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="rating-text">60%</p>
                                                    </div>                                                 
                                            </div>
                                        </div>
                                        {dataReviews.map((content, index) => (
                                                <div key={index} className="flex flex-row space-x-4 feedbacks">
                                                <div>
                                                    <img src={content.pic} className="p-pic" alt="" />
                                                </div>
                                                <div>
                                                    <div className="flex flex-row">
                                                        <p className="title">{content.name}
                                                            <span className="block w-full time-elapsed">{content.time}</span>
                                                        </p>
                                                        <div className="flex justify-around ml-auto rating-stars">
                                                                <img src="/images/yellow-start-13.png" alt="" />
                                                                <img src="/images/yellow-start-13.png" alt="" />
                                                                <img src="/images/yellow-start-13.png" alt="" />
                                                                <img src="/images/grey-star.png" alt="" />
                                                                <img src="/images/grey-star.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="feed-message">{content.message}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <Link href="/">
                                            <a className="text-center readAll underline block w-full transition-all duration-300">Read all reviews</a>
                                        </Link>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="priceSection order-1 lg:order-2">
                            <div className="block pl-8 pr-8 pb-3.5 borderBottom">
                                <div className="priceTag flex flex-nowrap items-center">
                                    <div className="newPrice flex-initial">$150</div>
                                    <div className="oldPrice flex-initial">$300</div>
                                    <div className="discount flex-initial ml-auto">50% Off</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="timeLeft text-center">12 hours remaining in this price</div>
                                    <button type="button" className="block w-full c-btn transition-all duration-300 addCartBtn">Add to cart</button>
                                    <button type="button" className="block w-full c-btn transition-all duration-300 enrollBtn">enroll now</button>
                                    <Link href="/">
                                        <a className="text-center wishListBtn">Added to wishlist
                                            <img src="/images/wish.png" className="inline-block" alt="" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="block pb-3.5 includes borderBottom">
                                <h3>This Course Includes:</h3>
                                <div className="block details-features">
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <img src="/images/clock.png" alt="" />  
                                        <p className="flex-initial">Full life time acces</p>
                                    </div>
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <img src="/images/dollar.png" alt="" />
                                        <p className="flex-initial">30 days money back gurantee</p>
                                    </div>
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <img src="/images/file.png" alt="" />
                                        <p className="flex-initial">Free exercise files</p>
                                    </div>
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <img src="/images/chat.png" alt="" />
                                        <p className="flex-initial">Language - English</p>
                                    </div>
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <img src="/images/document.png" alt="" />
                                        <p className="flex-initial">Certificate on completion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block pb-3.5 includes borderBottom">
                                <h3>Want to train your team?</h3>
                                <div className="block q-team-train">
                                    <p>Get your team access to thousands of courses anytime.</p>
                                </div>
                                <button type="button" className="block w-full c-btn transition-all duration-300 enrollBtn">get Zipcap for business</button>
                            </div>
                            <div className="block pb-0 includes help">
                                <div className="block q-team-train">
                                    <p>
                                        Any help you needed? contact our 
                                        <Link href="/">
                                            <a className="helpLink transition-all duration-300"> support center
                                            </a>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Details
