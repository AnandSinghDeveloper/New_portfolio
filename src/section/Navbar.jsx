import React, { useState } from "react";
import close from "../../public/close.svg";
import menu from "../../public/menu.svg";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className=" nav-ul">
      <li className=" nav-li">
        <a className=" nav-link" href="#home">
          {" "}
          Home
        </a>
      </li>
      <li className=" nav-li">
        <a className=" nav-link" href="#about">
          {" "}
          About
        </a>
      </li>
      <li className=" nav-li">
        <a className=" nav-link" href="#work">
          {" "}
          Work
        </a>
      </li>
      <li className=" nav-li">
        <a className=" nav-link" href="#contact">
          {" "}
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <div className="fixed  inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className=" mx-auto c-space max-w-7xl">
        <div className=" py-2 sm:py-0 flex items-center justify-between">
          <a
            className="text-xl font-bold transition-colors duration-200 ease-in-out text-neutral-400 hover:text-white"
            href=""
          >
            Anand
          </a>
          <button
            className=" flex sm:hidden focus:outline-none text-neutral-400 hover:text-white"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <img
              src={isMenuOpen ? close : menu}
              alt=" toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex ">
            <Navigation />
          </nav>
        </div>
      </div>

      { isMenuOpen && (
        <motion.div className=" block overflow-hidden text-center sm:hidden" 
        initial={{ opacity: 0 , x: -10 }}
        animate={{ opacity: 1 , x: 0 }}
        style={{ maxHeight: "100vh" }}
        transition={{ duration: 1 }}
        >
          <nav className="pb-5"> <Navigation /></nav>
        </motion.div>

      )}
    </div>
  );
};

export default Navbar;
