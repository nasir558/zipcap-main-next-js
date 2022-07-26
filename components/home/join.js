import React from "react"
import Link from 'next/link'

const Join = ({title, description, featureImage, btnText, btnLink}) => {
    return (
       <>
        <div className="block join bg-white py-4 md:py-14">
            <div className="max-w-1920px mx-auto px-4 lg:pl-44 lg:pr-32">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="align-middle">
                        <h2 className="font-semibold">{title}</h2>
                        <p className="mt-14 mb-14">{description}</p>
                        <Link href={btnLink}>
                            <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white">{btnText}</a>
                        </Link>
                    </div>
                    <div className="imageBox hidden sm:inline-block">
                        <div className="image">
                            <img src={featureImage} className="w-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Join
