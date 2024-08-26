import React from "react";
import { motion } from "framer-motion";

// Each tab button has two variants
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

// Tab button component
const TabButton = ({ active, selectTab, children }) => {
  // Determine styles of active button
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";
  return (
    // Switchable button
    <button onClick={selectTab}>
      {/* Button content */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {/* Animated witch of tab underline */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
