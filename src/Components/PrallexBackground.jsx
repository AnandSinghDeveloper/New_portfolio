import { useScroll, useSpring, useTransform } from "motion/react";
import React from "react";
import { motion } from "motion/react";

const PrallexBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className=" relative h-screen overflow-y-hidden">
        //sky
        <motion.div
          className=" absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/sky.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></motion.div>
        // mountain 3
        <motion.div
          className=" absolute inset-0  -z-40"
          style={{
            backgroundImage: "url(/mountain-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain3Y,
          }}
        ></motion.div>
        // planet
        <motion.div
          className=" absolute inset-0  -z-30"
          style={{
            backgroundImage: "url(/planets.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            x: planetsX,
          }}
        ></motion.div>
        //mountain 2
        <motion.div
          className=" absolute inset-0  -z-20"
          style={{
            backgroundImage: "url(/mountain-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain2Y,
          }}
        ></motion.div>
        <motion.div
          className=" absolute inset-0  -z-10"
          style={{
            backgroundImage: "url(/mountain-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain1Y,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default PrallexBackground;
