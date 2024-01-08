import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { Call, Features, News } from "./sections";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Features />
      <News />
      <div className="my-16">
        <Testimonials />
      </div>
      {/* <Call /> */}
    </div>
  );
};

export default Home;
