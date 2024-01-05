import React from "react";
import left_image from "../../../assets/1.png";
import right_image from "../../../assets/2.png";

const Call = () => {
  return (
    <div className="container mx-auto">
      {" "}
      <div className="md:flex flex-wrap justify-between items-center">
        <div>
          <img className="object-cover" src={right_image} alt="" />
        </div>
        <div className="text-center uppercase">
          <h3 className="text-neutral-500 text-xl font-bold">Call us now on</h3>
          <div className="my-2">
            <span className="fa-solid fa-phone-volume text-3xl pr-5 " />
            <a
              href="tel:123-456-7890"
              className="text-yellow-400 text-3xl font-semibold"
            >
              123-456-7890
            </a>
          </div>
          <p className="text-xl font-semibold">we are open 24/7 for assiant</p>
        </div>
        <div>
          <img className="object-cover" src={left_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Call;
