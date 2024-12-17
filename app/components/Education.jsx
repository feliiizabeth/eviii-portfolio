import React from "react";

// Education component
const Education = ({ edu }) => {
  return (
    <div className="pl-2">
      <p className="text-lg leading-relaxed">
        <span className="font-semibold text-xl">{edu.school}</span>
        <br />
        <span className="text-sm text-[#ADB7BE]">{edu.location}</span>
        <br />
        <span className="mt-2">{edu.degree}</span>
      </p>
    </div>
  );
};

export default Education;
