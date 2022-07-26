import React from 'react'

function About({ image, title, description, ratings, views, lessons, ratingsIcon, viewIcon, lessonIcon, tutorComponenet, designation, specialiaty, category, level }) {

    return (
        <div>
            <div className="block about w-full">
                <div className={`${!!tutorComponenet ? ("max-w-1920px mx-auto pl-5 pr-5 xl:pl-44 xl:pr-44") : ("max-w-1100px mx-auto pl-5 pr-5 ")}`}>
                    {!!tutorComponenet && (
                        <h2 className="font-semibold mb-14 designation">{designation}</h2>
                    )}
                    <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap space-y-8 lg:space-x-16 lg:space-y-0 items-center">
                        <img src={image} className="f-image" alt="" />
                        <div className="details flex-1">
                            <h2 className="font-semibold">{title}</h2>
                            {!!tutorComponenet && (
                                <p>{specialiaty}</p>
                            )}
                            <p>{description}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                {!!category ? (
                                    <p>Category: <span className="text-black font-medium">{category}</span></p>
                                ) : null}
                                {!!level ? (
                                    <p>Level: <span className="text-black font-medium">{level}</span></p>
                                ) : null}

                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div>
                                    <span className="float-left starIcon">
                                        <img src={ratingsIcon} alt="" />
                                    </span>
                                    <span className="text-xs pl-2">{ratings}</span>
                                </div>
                                <div>
                                    <span className="float-left viewIcon">
                                        <img src={viewIcon} alt="" />
                                    </span>
                                    <span className="text-xs pl-2">{views}</span>
                                </div>
                                <div>
                                    <span className="float-left playIcon">
                                        <img src={lessonIcon} alt="" />
                                    </span>
                                    <span className="text-xs pl-2">{lessons}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
