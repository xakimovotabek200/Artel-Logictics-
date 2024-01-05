import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import tractor from "../../../assets/cargo.png";

const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-center uppercase">
        <h3 className="text-neutral-500 text-xl font-bold">Why Choose us</h3>
        <h1 className="text-2xl font-semibold leading-40">The main features</h1>
        <div className="flex items-center justify-center gap-10">
          <div>
            <hr className="border-2 border-black w-[100px]" />
          </div>
          <div>2</div>
          <div>
            <hr className="border-2 border-black w-[100px]" />
          </div>
        </div>
        <p className="text-neutral-500 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Fuga
          aspernatur minima velit esse accusamus <br /> eos est, ut recusandae
          libero? Veritatis!
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-52">
        <VerticalTimeline layout="1-column-right">
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<span />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<span />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<span />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<span />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div>
          <img className="" src={tractor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
