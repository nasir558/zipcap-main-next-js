import React from 'react'
import Link from 'next/link'

function breadcrumbs({parentPage, parentPageLink, cureentPage}) {
    return (
        <div>
           <div className="block breadcrumbs">
                <div className="max-w-1100px mx-auto pl-5 pr-5">
                <nav className="flex items-center text-base font-medium space-x-2 whitespace-nowrap">
                    <Link href={parentPageLink}>
                            <a>{parentPage}</a>
                    </Link>
                    <svg width="24" height="24" fill="none" className="flex-none">
                        <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <p>{cureentPage}</p>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default breadcrumbs
