import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";
const HeroText = () => {
  const words = ["Secure", "Modren", "Scalable"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  return (
    <div className=" z-10 mt-20 text-center bg-clip-text md:mt-40 md:text-left rounded-3xl">
      {/* destop */}
      <motion.div 
        className=" c-space flex-col hidden md:flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          className=" text-4xl font-semibold cursor-default"
        >
          Hi I'm Anand
        </motion.h1>
        <div className=" flex flex-col items-start">
          <motion.p
            className=" text-5xl text-neutral-300 font-semibold cursor-default"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#ffffff",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {" "}
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            className=""
            variants={itemVariants}
          >
            <FlipWords
              className={"text-8xl font-black text-white"}
              words={["Secured", " Modern", " Scalable"]}
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#ffffff",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className=" text-4xl text-neutral-300 font-semibold cursor-default"
          >
            {" "}
            Web Solutions{" "}
          </motion.p>
        </div>
      </motion.div>
      {/* mobile */}
      <motion.div 
        className="  flex space-y-6 flex-col md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className=" text-4xl font-semibold"
        >
          {" "}
          Hi, I'm Anand{" "}
        </motion.p>
        <div>
          <motion.p
            variants={itemVariants}
            className=" text-5xl text-neutral-300 font-semibold"
          >
            {" "}
            Building
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <FlipWords
              words={words}
              className={"text-7xl font-black text-white"}
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className=" text-4xl text-neutral-300 font-semibold"
          >
            Web Application
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
