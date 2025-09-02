import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Expriences from "./section/Expriences";
import { Testimonial } from "./section/Testimonial";
import Contact from "./section/Contect";
import Footer from "./section/Footer";


function App() {
  return (
    <div className=" container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Expriences />
      <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
