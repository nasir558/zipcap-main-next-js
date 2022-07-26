import React from 'react'
import Hero from './hero'
import Categories from './categories'
import Courses from './../common/courses'
import Testamonials from './testamonials'
import Join from './join'
import Subscribe from './subscribe'

function index() {
    const dataCategory = [
        {
            icon:"/images/catIcon1.png",
            title: "Design",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon2.png",
            title: "Development",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon3.png",
            title: "Academic",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon4.png",
            title: "Business",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon5.png",
            title: "Marketing",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon6.png",
            title: "Academic",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon7.png",
            title: "Photography",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon:"/images/catIcon8.png",
            title: "Health Care",
            linkURL: "",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
    const dataTopCourses = [
            {
                featureImage : "/images/pexels-tranmautritam-326501@2x.png",
                ratings: "4.5 (140)",
                views: "25,569",
                lessons: "21 lessons",
                title: "Everything you need to know about Adobe Photoshp",
                description: "This is basic to advance course for the beginner and mid level designers.",
                avatar: "/images/pexels-max-fischer-5212339@2x.png",
                name: "Jhon",
                oldPrice: "$450",
                newPrice: "$400",
                linkURL: ""
            },
            {
                featureImage : "/images/pexels-tranmautritam-3265011@2x.png",
                ratings: "4.5 (140)",
                views: "25,569",
                lessons: "21 lessons",
                title: "Getting started with Graphic Designing",
                description: "This is basic to advance course for the beginner and mid level designers.",
                avatar: "/images/pexels-max-fischer-5212339@2x.png",
                name: "Sara",
                oldPrice: "$450",
                newPrice: "$400",
                linkURL: ""
            },
            {
                featureImage : "/images/pexels-tranmautritam-32650221@2x.png",
                ratings: "4.5 (140)",
                views: "25,569",
                lessons: "21 lessons",
                title: "Professional and minimalistic logo designing",
                description: "This is basic to advance course for the beginner and mid level designers.",
                avatar: "/images/pexels-max-fischer-5212339@2x.png",
                name: "Joe",
                oldPrice: "$450",
                newPrice: "$400",
                linkURL: ""
            },
            {
                featureImage : "/images/pexels-tranmautritam-32650221@2x.png",
                ratings: "4.5 (140)",
                views: "25,569",
                lessons: "21 lessons",
                title: "Professional and minimalistic logo designing",
                description: "This is basic to advance course for the beginner and mid level designers.",
                avatar: "/images/pexels-max-fischer-5212339@2x.png",
                name: "Joe",
                oldPrice: "$450",
                newPrice: "$400",
                linkURL: ""
            }
    ]
    const dataTopCoursesUIUX = [
        {
            featureImage : "/images/pexels-tranmautritam-32650341@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "UI/UX master class, wireframes and user interface designing",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Jhon",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-326504541@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "User experience designing using Adobe XD",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Sara",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-32650543541@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Professional UX designing in one week",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Joe",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        }
    ]
    const dataTopCoursesPhotoGraphy = [
        {
            featureImage : "/images/pexels-tranmautritam-3265430341@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Photography masterclass, A complete guide to photography",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Jhon",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-3232436501@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Adobe Lightroom, Photo editing masterclass",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Sara",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-32653543501@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Photography - Become a better photographer",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Joe",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        }
    ]
    const dataTopCoursesFree =[
        {
            featureImage : "/images/pexels-tranmautritam-3265035351@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Everything you need to know about Adobe Photoshp",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Jhon",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-32658768701@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Getting started with Graphic Designing",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Sara",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-326587801@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Professional and minimalistic logo designing",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Joe",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
        {
            featureImage : "/images/pexels-tranmautritam-32658768701@2x.png",
            ratings: "4.5 (140)",
            views: "25,569",
            lessons: "21 lessons",
            title: "Getting started with Graphic Designing",
            description: "This is basic to advance course for the beginner and mid level designers.",
            avatar: "/images/pexels-max-fischer-5212339@2x.png",
            name: "Sara",
            oldPrice: "$450",
            newPrice: "$400",
            linkURL: ""
        },
    ]
    return (
        <div>
            <Hero />  
            <Categories
                title="Top categories"
                btnText = "See all Categories"
                btnLink=""
                data={dataCategory}
            />
            <div className="block pt-16 courses bg-pink">
                <Courses
                    title="Top courses in Graphic Designing"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCourses}
                    slider = "yes"
                    sliderRows = {1}
                    sliderItems= {3}
                />                 
            </div>
            <div className="block pt-16 courses bg-pink">
                 <Courses
                    title="Top courses in UI/UX"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCoursesUIUX}
                    slider = "yes"
                    sliderRows = {1}
                    sliderItems= {3}
                />                
            </div>  
            <div className="block pt-16 pb-32 courses bg-pink">
                 <Courses
                    title="Top courses Photography"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCoursesPhotoGraphy}
                    slider = "yes"
                    sliderRows = {1}
                    sliderItems= {3}
                />                
            </div>    
            <Testamonials /> 
            <div className="block pt-16 pb-32 courses bg-pink">
                 <Courses
                    title="Free courses from Zipcap"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCoursesFree}
                    slider = "yes"
                    sliderRows = {1}
                    sliderItems= {3}
                />                
            </div>   
            <Join
                title = "Join the online learning platform with the world top instructors"
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                featureImage = "/images/one-side-round.png"
                btnText = "Join Now"
                btnLink = ""
            />  
            <Subscribe 
                section = "homePageSection"
            />   
        </div>
    )
}

export default index
