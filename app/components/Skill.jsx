import React from "react";

// Skill component
const Skill = ({ name }) => {
  return (
    <span className="text-slate-300 bg-secondary-900 rounded-lg py-1 px-3">
        {name}
    </span>
  );
};

export default Skill;