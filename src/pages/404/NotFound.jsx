import React from 'react'
import Image404 from "../../assets/6325263.jpg"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="bg-white ">
                <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div class="wf-ull lg:w-1/2 relative z-10 left-1/3 top-10">
                        <p class="text-4xl font-semibold text-red-500">404 error</p>
                        <h1 class="mt-3 text-4xl text-primary  ">Page not found</h1>
                        <p class="mt-4 text-red-500 text-3xl font-semibold">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
                        <div class="flex items-center mt-6 gap-x-3">
                            <Link to={"/"}>
                                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto ">
                                    <span className='fa-solid fa-arrow-left' />
                                    <span>Go back</span>
                                </button></Link>

                            <Link to={"/"}>
                                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                    Take me home
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="absolute ">
                        <img class="w-ful lg:mx-auto" src={Image404} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;