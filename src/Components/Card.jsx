import React from "react";
import { motion } from "motion/react";
const Card = ({ children, style, image , containerRef }) => {
  return image && !children ? (
    <motion.img
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}  
      dragElastic={0.5} 
      className=" absolute cursor-grab w-15 "
      src={image}
      style={style}
    />
  ) : (
    < motion.div
      className=" absolute px-1 py-1 lg:py-2 text-center text-lg lg:text-xl rounded-full  ring ring-gray-700 font-extralight bg-storm  lg:w-[12rem] w-[10rem]  cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.5}
    >
      {children}
    </ motion.div>
  );
};

export default Card;
