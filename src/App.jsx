import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";

function App() {
  return (
    <div className=" container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className=" min-h-screen"></section>
    </div>
  );
}

export default App;
