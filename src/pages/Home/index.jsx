import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { Call, Features, News } from "./sections";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Features />
      <News />
      <Call />
    </div>
  );
};

export default Home;
