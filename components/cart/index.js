import React from 'react'
import Breadcrumbs from '../common/breadcrumbs'
import Details from './cartDetails'
import Courses from '../common/courses'

function Index() {
  const dataCartItems = [
      {
          itemPic: "/images/item-pic.png",
          description: "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
          purchaserPic: "/images/p-pic.png",
          purchaserName: "Ainee",
          oldPrice: "$45",
          NewPrice: "$150"
      },
      {
        itemPic: "/images/item-pic.png",
        description: "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
        purchaserPic: "/images/p-pic.png",
        purchaserName: "Ainee",
        oldPrice: "$45",
        NewPrice: "$150"
    },
    {
      itemPic: "/images/item-pic.png",
      description: "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
      purchaserPic: "/images/p-pic.png",
      purchaserName: "Ainee",
      oldPrice: "$45",
      NewPrice: "$150"
  }
  ]
  const dataTopCourses =[
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
    },{
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
              <Breadcrumbs
                parentPage = "Home"
                parentPageLink = "/"
                cureentPage = "Cart"
            />
           <div className="bg-lightGreen pt-16 pb-8 cart">
                <Details
                    itemsCount = "2 Courses in Cart"
                    data = {dataCartItems}
                />
           </div>
           <div className="block pt-16 pb-16 courses bg-pink">
                <Courses
                    title="You might like"
                    data = {dataTopCourses}
                />                 
            </div>
        </div>
    )
}

export default Index
