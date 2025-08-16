import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";
const HeroText = () => {
  const words = ["Secure", "Modren", "Scalable"];

  return (
    <div className=" z-10 mt-20 text-center bg-clip-text md:mt-40 md:text-left rounded-3xl">
      {/* destop */}
      <div className=" c-space flex-col hidden md:flex">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className=" text-4xl font-semibold"
        >
          Hi I'm Anand
        </motion.h1>
        <div className=" flex flex-col items-start">
          <motion.p
            className=" text-5xl text-neutral-300 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            {" "}
            A Devloper <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              className={"text-8xl font-black text-white"}
              words={["Secured", " Modren", " Scalable"]}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className=" text-4xl text-neutral-300 font-semibold"
          >
            {" "}
            Web Solutions{" "}
          </motion.p>
        </div>
      </div>
      {/* mobile */}
      <div className="  flex space-y-6 flex-col md:hidden">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className=" text-4xl font-semibold"
        >
          {" "}
          Hi, I'm Anand{" "}
        </motion.p>
        <div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className=" text-5xl text-neutral-300 font-semibold"
          >
            {" "}
            Building
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className={"text-7xl font-black text-white"}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className=" text-4xl text-neutral-300 font-semibold"
          >
            Web Application
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
