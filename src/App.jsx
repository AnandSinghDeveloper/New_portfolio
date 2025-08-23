import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Expriences from "./section/Expriences";
import { Testimonial } from "./section/Testimonial";

function App() {
  return (
    <div className=" container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Expriences />
      <Testimonial />
      <section className=" min-h-screen"></section>
    </div>
  );
}

export default App;
