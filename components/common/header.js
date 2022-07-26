import { React, Fragment, useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function header() {
  const router = useRouter();
  const path = router.pathname.replace(/^\/([^\/]*).*$/, "$1");
  const [active, setActive] = useState("");

  return (
    <>
      <div
        className={` headerMain fixed top-0 left-0 w-full z-20 xl:static bg-white shadow-md`}
      >
        <nav className=" max-w-1573px mx-auto pl-5 pr-5 flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="block xl:hidden">
            <button
              className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
              type="button"
              onClick={() => {
                if (active == "ShowMenu") {
                  setActive("");
                } else {
                  setActive("ShowMenu");
                }
              }}
            >
              <span className="transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className=" items-center flex xl:hidden flex-shrink-0">
            <span className="font-semibold text-xl tracking-tight">
              <Link href="/">
                <a className="brand">
                  <img
                    src="images/zipcap-logo.svg"
                    className="h-30px w-auto"
                    alt=""
                  />
                </a>
              </Link>
            </span>
          </div>
          <div
            className={`w-full ${active == "ShowMenu" ? "openDrawer showMenu" : ""
              } moduleDrawer transition-all duration-300 flex-grow xl:flex xl:justify-around xl:w-auto`}
          >
            <div className="xl:hidden flex justify-end">
              <button
                className="flex flex-row space-x-4 items-center"
                type="button"
                onClick={() => {
                  if (active === "ShowMenu") {
                    setActive("");
                  } else {
                    setActive("ShowMenu");
                  }
                }}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="block mt-4 xl:flex xl:mt-0 items-center text-teal-200">
              <span className="font-semibold text-xl tracking-tight hidden xl:inline-block">
                <Link href="/">
                  <a className="brand">
                    <img
                      src="images/zipcap-logo.svg"
                      className="inline-block w-60px h-auto mr-5px"
                      alt=""
                    />
                    <span>Zipcap</span>
                  </a>
                </Link>
              </span>
              <Menu
                as="div"
                className="relative inline-block lg:ml-2 xl:ml-5 2xl:ml-10"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex text17px justify-center">
                        Categories
                        <img
                          src="/images/arrow-down.svg"
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right menuDropDown shadow-lg absolute z-40 left-0 mt-2 w-50"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <div className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 mr-4">
                <form action="#" method="POST">
                  <div className="grid grid-cols-2">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="searchInput"
                          placeholder="Search your course"
                        />
                        <span className="inline-flex items-center">
                          <button
                            type="submit"
                            className="inline-flex justify-center"
                          >
                            <img src="/images/search.png" aria-hidden="true" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Link href="">
                <a className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 mr-4">
                  Zipcap for Business
                </a>
              </Link>
              <Link href="">
                <a className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200">
                  Teach on Zipcap
                </a>
              </Link>
              <Link href="">
                <a
                  className={`block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 ${path === "dashboard" ? "mr-8" : null
                    }`}
                >
                  <span className="w-24px relative flex-shrink-0 rounded-full">
                    <img
                      src="/images/shopping-cart@2x.png"
                      alt=""
                      className="cartIcon"
                      width="24"
                      height="24"
                    />
                    <span className="w-15px h-15px text-center rounded-full bg-red flex items-center justify-center text-white top-13px left-10px absolute notificationCount">
                      2
                    </span>
                  </span>
                </a>
              </Link>
              <Link href="/">
                <a className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200">
                  Sign In
                </a>
              </Link>
              <Link href="/">
                <a className="block signUpBtn lg:ml-2 xl:ml-5 2xl:ml-10 mt-4 xl:inline-block xl:mt-0 text-teal-200">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default header;
