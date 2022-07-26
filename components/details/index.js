import React from 'react'
import About from './about'
import Courses from '../common/courses'
import Details from './courseDetails'
import Feedback from './feedback'

function Index() {
  
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
        }
    ]
    const dataFeedback = [
        {
            pic: "/images/user-pic.png",
            name: "Sadia khan",
            designation: "Photographer",
            message: "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkURL: "/"
        },
        {
            pic: "/images/user-pic.png",
            name: "Sadia khan",
            designation: "Photographer",
            message: "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkURL: "/"
        },
        {
            pic: "/images/user-pic.png",
            name: "Sadia khan",
            designation: "Photographer",
            message: "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkURL: "/"
        },
        {
            pic: "/images/user-pic.png",
            name: "Sadia khan",
            designation: "Photographer",
            message: "This course dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkURL: "/"
        }
    ]
    return (
        <div>  
           <div className="bg-pink pt-32 pb-14">
                <About
                    image = "/images/feature-course-1.png"
                    title ="Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom"
                    description = "This is basic to advance course for the beginner and mid level Photographers, take photos and edit like a pro with adobe Lightroom. This is advance course."
                    ratingsIcon = "/images/003-star@2x.png"
                    viewIcon = "/images/002-view@2x.png"
                    lessonIcon = "/images/001-play@2x.png"
                    ratings = "4.5 (140)"
                    views = "25,569"
                    lessons = "21 lessons"
                    category= "Photography"
                    level= "Expert"
                />
           </div>
           <div className="courseDetails bg-lightGreen">
                <Details />
           </div>
           <div className="block pt-16 pb-32 courses bg-pink">
                 <Courses
                    title="Other courses you might like"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCoursesFree}
                    slider = "yes"
                    sliderRows = {2}
                    sliderItems= {3}
                />                
            </div> 
            <div className=" instructor">
                <About
                    image = "/images/instructor.png"
                    title ="John Devi"
                    designation = "Instructor"
                    specialiaty = "Certified Shutterstock photographer"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    ratingsIcon = "/images/003-star@2x.png"
                    viewIcon = "/images/002-view@2x.png"
                    lessonIcon = "/images/bookIcon.png"
                    ratings = "4.5 (140)"
                    views = "25,569"
                    lessons = "21 lessons"
                    tutorComponenet
                />
           </div>
           <div className="block pt-16 pb-32 courses bg-pink">
                 <Courses
                    title="Other courses from this instructor"
                    btnText = "View all"
                    btnLink=""
                    data = {dataTopCoursesPhotoGraphy}
                    slider = "yes"
                    sliderRows = {1}
                    sliderItems= {3}
                />                
            </div>
            <div className="block feedback">
                <Feedback
                    sectionTitle = "What students says about this course?"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    data = {dataFeedback}
                    pageName = "courseDetails"
                    sliderRows = {1}
                    sliderItems= {2}
                />
            </div>
        </div>
    )
}

export default Index
