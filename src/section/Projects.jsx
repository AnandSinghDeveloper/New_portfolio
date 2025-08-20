import React from "react";
import { motion } from "framer-motion";
import { myProjects } from "../Constants/index";
import Project from "../Components/Project";

export default function Projects() {
  return (
    <section className=" relative c-space section-spacing">
      <h2 className=" text-heading"> My Selected Project</h2>
      <div className="  bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full " />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}
