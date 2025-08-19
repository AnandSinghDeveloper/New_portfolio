import React from "react";
import { OrbitingCircles } from "./OrbitingCircle";

function FrameWorks() {
  const skills = [
    "aws",
    "docker",
    "nextjs",
    "mongodb",
    "convex",
    "postgresql",
    "javascript",
    "typescript",
    "react",
    "nodejs",
    "tailwindcss",
    "jotai",
    "leetcode",
    "redux",
    "postman",
    "github",
    "redis",
    "prisma",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => {
          return <Icon key={index} src={`/logo/${skill}.png`} />;
        })}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => {
          return <Icon key={index} src={`/logo/${skill}.png`} />;
        })}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return (
    <img
      className="duration-200 rounded-sm hover:scale-110"
      src={src}
      alt="icon"
    />
  );
};

export default FrameWorks;
