import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Categories = ({title, btnText, btnLink, data}) => {
    return (
       <>
        <div className="block categories md:pt-12 pb-32">
            <div className="max-w-1100px mx-auto pl-5 pr-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sectionHeader">
                    <div>
                        <h2 className="font-semibold">{title}</h2>
                    </div>
                    <div className="text-right pt-2.5">
                        <Link href={btnLink}>
                            <a className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white">{btnText}</a>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12">
                {data.map((card, index) => (                    
                    <div className="itemBox mt-14" key={index}>
                    <Link href={`${(card.linkURL)}`}>
                        <a className="no-underline">
                                <div className="block cat-item pr-5 pl-5 pt-7 pb-7">
                                    <div className="icon block">
                                        <span>
                                            <Image                                    
                                                src={card.icon}
                                                alt=""
                                                width={28}
                                                height={28}
                                            />
                                        </span>
                                    </div>
                                    <div className="description">
                                        <p className="title text-base font-medium mt-3">{card.title}</p>
                                        <p className="details text-sm mt-4">{card.description}</p>
                                    </div>
                                </div>
                        </a>
                    </Link>                    
                    </div>
                ))}     
                </div>
            </div>
        </div>
       </>
    )
}

export default Categories
