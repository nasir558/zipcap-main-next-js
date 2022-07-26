import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Modules({ drawerStatus }) {
    
  return (
    <div
      className={`xl:pl-20px xl:pr-0 z-20 moduleDrawer transition-all duration-300 ${drawerStatus}`}
    >
      <div className="courseContent xl:sticky xl:top-0">
        <div className="courseTitle w-full">
          <button
            className="backButton hidden xl:flex flex-row space-x-4 items-center transition-all duration-300"
            type="button"
          >
            <span className="backIcon transition-all duration-300">
              <img src="/images/backButton.png" alt="" className="mx-auto" />
            </span>
            <span>Back</span>
          </button>
          <h1>Adobe Lightroom, Photo editing masterclass, Edit your photos</h1>
        </div>
        <div className="ModuleList slimScroll formAccordion">
          <Accordion
            allowZeroExpanded
            allowMultipleExpanded
            preExpanded={["0"]}
          >
            <AccordionItem uuid="0">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">Module 1: Introduction </h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="list">
                  <ul>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            1: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            2: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item active transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            3: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            4: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            5: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">Module 2: Basic lighting</h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="list">
                  <ul>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            1: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            2: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item active transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            3: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            4: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            5: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">
                      Module 3: Product photography
                    </h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="list">
                  <ul>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            1: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            2: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item active transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            3: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            4: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            5: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="fitlerForm mb-0">
                    <h2 className="ModuleTitle">Module 4: Natural lighting</h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="list">
                  <ul>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            1: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/check_1.svg" alt="" />
                          <span>
                            2: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item active transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            3: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            4: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="block w-full single-item transition-all duration-300">
                      <Link href="/">
                        <a className="transition-all duration-300 flex flex-row space-x-4 items-start">
                          <img src="/images/play.svg" alt="" />
                          <span>
                            5: Lorem Ipsum is simply dummy text of the printing
                            and typesetting.
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Modules;
