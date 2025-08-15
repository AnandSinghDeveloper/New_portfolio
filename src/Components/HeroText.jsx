import React from "react";
import { FlipWords } from "./FlipWords";
const HeroText = () => {

  const words = ["Secure", "Modren", "Scalable"];

  return (
    <div className=" z-10 mt-20 text-center bg-clip-text md:mt-40 md:text-left rounded-3xl">
      {/* destop */}
      <div className=" c-space flex-col hidden md:flex">
        <h1 className=" text-4xl font-semibold">Hi I'm Anand</h1>
        <div className=" flex flex-col items-start">
          <p className=" text-5xl text-neutral-300 font-semibold">
            {" "}
            A Devloper <br /> Dedicated to Crafting
          </p>
          <div className="">
            <FlipWords
              className={"text-8xl font-black text-white"}
              words={["Secured", " Modren", " Scalable"]}
            />
          </div>
          <p className=" text-4xl text-neutral-300 font-semibold">
            {" "}
            Web Solutions{" "}
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="  flex space-y-6 flex-col md:hidden">
        <p className=" text-4xl font-semibold"> Hi, I'm Anand </p>
        <div>
          <p className=" text-5xl text-neutral-300 font-semibold"> Building</p>
          <div>
            <FlipWords
              words={words}
              className={"text-7xl font-black text-white"}
              
            />
          </div>
          <p className=" text-4xl text-neutral-300 font-semibold">
            Web Application
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
