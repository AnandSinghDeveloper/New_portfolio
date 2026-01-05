import React from "react";
import { mySocials } from "../Constants";

const Footer = () => {
  return (
    <section className=" flex flex-wrap gap-5 pb-3 items-center justify-between c-space text-sm text-neutral-400">
      <div className=" mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
        <div className=" flex gap-2">
          <p>Terms and Conditions</p>
          <p></p>
           <p>Privacy Policy</p>
           
        </div>
        <div className=" flex gap-3">
         {
          mySocials.map((social , index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} className=" w-6 h-6" />
            </a>
          ))
         }
        </div>
      
      <p>© 2025 Anand. All rights reserved</p>
    </section>
  );
};

export default Footer;
