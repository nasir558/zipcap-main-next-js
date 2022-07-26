import React from 'react'
import Breadcrumbs from '../common/breadcrumbs'
import ListCourses from '../list/ListCourses'

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
        <div className="lg:pt-0 pt-82px">  
            <Breadcrumbs
                parentPage = "Home"
                parentPageLink = "/"
                cureentPage = "Search"
            />
            <ListCourses
                pageName = "ListPage"
                data = {dataTopCoursesFree}
            />
        </div>
    )
}

export default Index
