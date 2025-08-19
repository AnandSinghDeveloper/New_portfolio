import React from "react";

import { FaRegCopy } from "react-icons/fa6";
import { TbCopyCheckFilled } from "react-icons/tb";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "anandsingh23112005@gmailcom";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <motion.button 
     whileHover={{ y : -5 }}
     whileTap={{ scale: 1.05 }}
      onClick={copyToClipboard}
      className="  relative py-4 px-1 w-[12rem] text-sm font-extralight bg-primary text-center rounded-full overflow-hidden cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.p
              key={"Copied"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -10 }}
            className=" flex items-center justify-center gap-2"
          >
            <TbCopyCheckFilled className=" text-neutral-200" />
            Email has been copied
          </motion.p>
        ) : (
          <motion.p
           key={'copy'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            className=" flex items-center justify-center gap-2"
          >
            <FaRegCopy className=" text-neutral-200" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
