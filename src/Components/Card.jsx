import { img } from "motion/react-client";
import React from "react";

const Card = ({ children, style , image }) => {
  return image && !children ?(<img className=" absolute cursor-grab w-15 " src={image} style={style} />): (
    <div
      className=" absolute px-1 py-4 text-center text-xl rounded-full  ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
