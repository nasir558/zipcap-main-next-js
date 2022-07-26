import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

const Footer = () => {
    const router = useRouter();
    const path = router.pathname.replace(/^\/([^\/]*).*$/, "$1");
    return (
       <>
        <div className={` ${router.route === "/course" || path === "dashboard" ? (" pb-5"):("pt-20 pb-5")} block footer`}>
            <div className={`max-w-1920px mx-auto pl-5 pr-5 ${router.route === "/course" || path === "dashboard" ? ("lg:pl-20 lg:pr-20"):("lg:pl-44 lg:pr-44")}`}>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">First Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Second Long Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Third Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Fourth long Link</a>
                            </Link>
                        </p>
                    </div>
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">First Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Second Long Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Third Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Fourth long Link</a>
                            </Link>
                        </p>
                    </div>
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">First Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Second Long Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Third Link</a>
                            </Link>
                        </p>
                        <p className="links">
                            <Link href="">
                                <a className="no-underline">Fourth long Link</a>
                            </Link>
                        </p>
                    </div>
                    <div className="logo-CopyRight mt-24">
                        <h3>Zipcap</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p>
                        <p className="mt-14">Copyright 2021 - All right Recived</p>
                    </div>
                </div>
                <div className={`grid grid-cols-1 socialIcons`}>
                    <div className="text-center">
                        <a href="">
                            <img src="/images/linkedin.png" alt="" />
                        </a>
                        <a href="">
                            <img src="/images/twitter.png" alt="" />
                        </a>
                        <a href="">
                            <img src="/images/facebook.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Footer
