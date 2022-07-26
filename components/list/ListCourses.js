import React, { useState } from "react";
import Courses from "../common/courses";
import Link from "next/link";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function ListCourses({ pageName, data }) {
  const [PriceRange, setPriceRange] = useState({
    min: 1,
    max: 100,
  });
  const [drawer, setDrawer] = useState("");

  return (
    <div>
      <div className="block w-full ListCourses">
        <div className="max-w-1100px mx-auto md:px-5">
          <div className="lg:hidden z-10 flex flex-row justify-between mobileHeader fixed top-76px left-0 w-full">
            <button
              className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
              type="button"
            >
              <span className="backIcon transition-all duration-300">
                <img src="/images/backButton.png" alt="" className="mx-auto" />
              </span>
            </button>
            {drawer === "listFilterOpen" ? (
              <button
                className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                type="button"
                onClick={() => setDrawer("")}
                onKeyDown={() => setDrawer("")}
              >
                <span className="backIcon transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto mt-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
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
            ) : (
              <button
                className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                type="button"
                onClick={() => setDrawer("listFilterOpen")}
                onKeyDown={() => setDrawer("listFilterOpen")}
              >
                <span className="backIcon transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto mt-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-y-6 lg:gap-x-6 lg:gap-y-0 formAccordion">
            <div className={`listFilter transition-all duration-300 ${drawer}`}>
              <form>
                <Accordion
                  allowZeroExpanded
                  allowMultipleExpanded
                  preExpanded={["0", "1", "2"]}
                >
                  <AccordionItem uuid="0">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="fitlerForm mb-0">
                          <h3 className="formTItile">Category</h3>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fitlerForm">
                        <div className="FormElements">
                          <div className="mt-4 space-y-4">
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="all"
                                    name="all"
                                  />
                                  <i></i>All
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="design"
                                    name="design"
                                  />
                                  <i></i>Design
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="Development"
                                    name="Development"
                                  />
                                  <i></i>Development
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="Marketing"
                                    name="Marketing"
                                  />
                                  <i></i>Marketing
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="Finance"
                                    name="Finance"
                                  />
                                  <i></i>Finance & Accounting
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="Academic"
                                    name="Academic"
                                  />
                                  <i></i>Academic
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="Health"
                                    name="Health"
                                  />
                                  <i></i>Health
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-center showMore">
                          <Link href="">
                            <a>Show More</a>
                          </Link>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="1">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="fitlerForm  mb-0">
                          <h3 className="formTItile">Ratings</h3>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fitlerForm">
                        <div className="FormElements">
                          <div className="mt-4 space-y-4">
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="ratingsAll"
                                    name="ratingsAll"
                                  />
                                  <i></i>All
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="oneStar"
                                    name="oneStar"
                                  />
                                  <i></i>1 star & higher
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="twoStar"
                                    name="twoStar"
                                  />
                                  <i></i>2 stars & higher
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="threeStar"
                                    name="threeStar"
                                  />
                                  <i></i>3 stars & higher
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="fourStar"
                                    name="fourStar"
                                  />
                                  <i></i>4 stars & higher
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                            <div className="flex mb-5">
                              <div className="form-checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="css-checkbox"
                                    id="fiveStar"
                                    name="fiveStar"
                                  />
                                  <i></i>5 stars
                                </label>
                              </div>
                              <div className="pl-3 ml-auto">348</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-center showMore">
                          <Link href="">
                            <a>Show More</a>
                          </Link>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="2">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="fitlerForm mb-0">
                          <h3 className="formTItile">Pricing</h3>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fitlerForm">
                        <div className="FormElements">
                          <div className="space-y-4 price-range">
                            <InputRange
                              maxValue={100}
                              minValue={0}
                              value={PriceRange}
                              name="priceRange"
                              onChange={setPriceRange}
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="3">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="fitlerForm mb-0">
                          <h3 className="formTItile">Duration</h3>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fitlerForm">
                        <p>Duration Filter goes here</p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <div className="my-4 lg:hidden sticky bottom-0">
                  <button
                    type="button"
                    className="viewAllBtn w-full rounded-md pt-3 pb-3 pl-6 pr-6 uppercase text-white"
                    onClick={() => setDrawer("")}
                    onKeyDown={() => setDrawer("")}
                  >
                    Apply Filter
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2">
              <div className="block courses">
                <Courses
                  title="Top courses Photography"
                  btnText="View all"
                  btnLink=""
                  data={data}
                  pageName={pageName}
                />
              </div>
              <div className="pagination ml-5 space-x-3.5 flex items-center">
                <button type="button" className="previous">{`<`}</button>
                <button type="button" className="active">
                  1
                </button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button" className="more">
                  .
                </button>
                <button type="button" className="more">
                  .
                </button>
                <button type="button" className="more">
                  .
                </button>
                <button type="button" className="next">{`>`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCourses;
