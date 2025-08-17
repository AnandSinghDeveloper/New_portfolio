import React, { useRef } from "react";
import coding from "/coding-pov.png";
import Card from "../Components/Card";
import nextjs from "/nextjs.png";
import redux from "/redux.png";
import typescript from "/typescript.png";

const About = () => {
  const grid2Container= useRef()

  return (
    <section className=" c-space section-spacing">
      <h2 className=" text-heading"> About Me</h2>
      <div className=" grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        <div className="flex  items-end grid-default-color grid-1">
          <img
            src={coding}
            className=" absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-3 md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className=" headtext">Hi I'm Anand </p>
            <p className=" subtext">
              {" "}
              Over the last 2 years, I've dedicated to develop my frontend and
              backend skills
            </p>
          </div>
          <div className=" absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-indigo"></div>
        </div>
        <div className="   grid-default-color grid-2">
          <div ref={grid2Container} className=" flex items-center justify-center w-full h-full">
            <p className=" flex items-end text-4xl sm:text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card containerRef={grid2Container} style={{ rotate: "75deg" , top: "30%" , left: "20%" }} children=" GRASP" />
            <Card containerRef={grid2Container}  style={{ rotate: "-30deg" , top: "60%" , left: "45%" }} children=" SQLED" />
            <Card containerRef={grid2Container}  style={{ rotate: "90deg" , top: "30%" , left: "70%" }} children=" Design pattern" />
            <Card containerRef={grid2Container}  style={{ rotate: "-45deg" , top: "55%" , left: "0%" }} children=" Design principle" />
            <Card containerRef={grid2Container}  style={{ rotate: "20deg" , top: "10%" , left: "38%" }} children=" SRP" />
             <Card containerRef={grid2Container}  style={{ rotate: "30deg" , top: "70%" , left: "70%" }} image={nextjs} />
             <Card containerRef={grid2Container}  style={{ rotate: "-45deg" , top: "70%" , left: "25%" }} image={typescript} />
             <Card containerRef={grid2Container} style={{ rotate: "-45deg" , top: "5%" , left: "10%" }} image={redux} />
          </div>
        </div>
        <div className="   grid-black-color grid-3"></div>
        <div className="  grid-special-color grid-4"></div>
        <div className=" grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
