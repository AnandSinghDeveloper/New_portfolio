import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";

function App() {
  return (
    <div className=" container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <About />
      <section className=" min-h-screen"></section>
      <section className=" min-h-screen"></section>
    </div>
  );
}

export default App;
