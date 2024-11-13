import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

// Project card component
const ProjectCard = ({ imgUrl, title, description, gitUrl, projectUrl }) => {
  return (
    <div>
      {/* Project image container */}
      <div
        className="h-52 md:h-72 rounded-t-xl bg-cover bg-center bg-no-repeat relative group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Overlay container */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          {/* Project icons containter */}
          <div className="flex items-center gap-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500">
            {/* GitHub link icon - shown if project has a GitHub link */}
            {gitUrl !== "/" && (
              <Link
                href={gitUrl}
                className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
              </Link>
            )}

            {/* Project link icon */}
            <Link
              href={projectUrl}
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] lg:line-clamp-5 md:line-clamp-4 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
