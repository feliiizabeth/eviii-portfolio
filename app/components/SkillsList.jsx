import React from "react";

import Skill from "./Skill";

// List of Skills
const SkillsList = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <Skill name={skill} />
      ))}
    </div>
  );
};

export default SkillsList;
