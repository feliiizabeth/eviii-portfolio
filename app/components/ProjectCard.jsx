import React from "react";
import Link from "next/link";

// Project card component
const ProjectCard = ({ imgUrl, title, description, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="transition duration-300 ease-in-out transform hover:scale-105">
        {/* Project image container */}
        <div
          className="h-52 md:h-72 rounded-t-xl bg-cover bg-center bg-no-repeat relative group"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>

        {/* Project details */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE] lg:line-clamp-5 md:line-clamp-4 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
