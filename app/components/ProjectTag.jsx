import React from "react";

// Tag button component
const ProjectTag = ({ tag, onClick, isSelected }) => {
  // Determine styles of selected button
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    // Clickable button
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
