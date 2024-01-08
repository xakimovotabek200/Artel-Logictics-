import React from "react";
import { Link } from "react-router-dom";
import cargo from "../../../assets/cargo.jpg";

const News = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center uppercase">
        <h3 className="text-neutral-500 text-xl font-bold">
          Latest from the blog
        </h3>
        <h1 className="text-2xl font-semibold leading-40">Company News</h1>
        <div className="flex items-center justify-center gap-10">
          <div>
            <hr className="border-2 border-black w-[100px]" />
          </div>
          <div>
            <span className="fa-solid fa-bars" />
          </div>
          <div>
            <hr className="border-2 border-black w-[100px]" />
          </div>
        </div>
      </div>
      <div className=" mx-auto lg:max-w-7xl mt-3 ">
        <div className="max-w-7xl mx-auto px-5 mb-3">
          <div className="mt-6 grid md:grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md">
              <Link to="/">
                <img
                  className="rounded-t-lg px-5 py-2"
                  src={cargo}
                  alt="step3"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </Link>
                <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                  Big case study
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-800 focus:ring-4 "
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md">
              <Link to="/">
                <img
                  className="rounded-t-lg px-5 py-2"
                  src={cargo}
                  alt="step3"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </Link>
                <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                  Big case study
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary  rounded-lg hover:bg-secondary  focus:ring-4 "
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md">
              <Link to="/">
                <img
                  className="rounded-t-lg px-5 py-2"
                  src={cargo}
                  alt="step3"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </Link>
                <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                  Big case study
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary  rounded-lg hover:bg-blue-800 focus:ring-4 "
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
