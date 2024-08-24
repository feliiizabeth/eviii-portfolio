import React from "react";

// Tab button component
const TabButton = ({ active, selectTab, children }) => {
  // Determine styles of active button
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    // Switchable button
    <button onClick={selectTab}>
      {/* Button content */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
