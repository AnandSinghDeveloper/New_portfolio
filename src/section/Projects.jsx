import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { myProjects } from "../Constants/index";
import Project from "../Components/Project";

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className=" relative c-space section-spacing"
    >
      <h2 className=" text-heading"> My Selected Project</h2>
      <div className="  bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full " />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
        src={preview}
        className=" fixed top-0 left-0 z-50 object-cover rounded-lg h-56 shadow-lg w-80 pointer-events-none"
        style={{ x: springX, y: springY }}
      />
      )}
    </section>
  );
}
