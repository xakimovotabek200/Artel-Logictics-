import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-5xl text-secondary font-bold">
          ASSET-BASED TRUCKING COMPANY
        </h1>
        <div className="h-2 bg-orange-400 w-11/12 mx-auto my-2" />
        <br />
        <div className="my-10">
          <div className="flex justify-center ">
            <div className="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full ">
                  <sapn className="fa-solid fa-truck text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold  ">
                  200+ TRUCKS OWN FLEET
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  A trucking company with 200+ newest model trucks & 400+
                  trailers
                </h3>
              </div>
            </div>
            <div className="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow  ">
                <div
                  className="absolute top-0 inline-flex items-center justify-center w-20 h-20 
shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 "
                >
                  <span className="fa-solid fa-user-group text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold  ">24/7 SERVICE</h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  Best-in-class 24/7 Dispatch & Safety Service
                </h3>
              </div>
            </div>
            <div className="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div
                  className="absolute top-0 inline-flex items-center justify-center w-20 h-20 
shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 "
                >
                  <span className="fa-solid fa-location-dot text-2xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold  ">
                  SMART SATELLITE TRACKING
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  Always know the location of your shipment with pinpoint
                  accuracy
                </h3>
              </div>
            </div>

            <div className="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-red-600 shadow-md transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                  <span className="fa-solid fa-flag text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold  ">
                  WAREHOUSING & CROSS-DOCK
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  State-of-the-art 130,000 square-foot facility in Chicago
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
