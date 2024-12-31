"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { fetchProjectsData } from "@/utils/fetchProjectsData";
import ProjectCardList from "./ProjectCardList";
import ProjectTag from "./ProjectTag";

// Project tags
const tags = [
  "All",
  "Creative Coding",
  "Full Stack Development",
  "Games",
  "Graphic Designs",
  "Websites",
];

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]); // For projects' data
  const [tag, setTag] = useState("All"); // For selected tag
  const [searchQuery, setSearchQuery] = useState(""); // For search input

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetchProjectsData();
        setProjectsData(data);
      } catch (e) {
        console.error("Failed to fetch projects' data:", e);
      }
    };
    fetchProjects();
  }, []);

  // Function that changes tags
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Function that updates search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function that filters projects based on selected tag or search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const isTagMatched = tag === "All" || project.tag.includes(tag);
      const isSearchMatched = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return isTagMatched && isSearchMatched;
    });
  }, [projectsData, tag, searchQuery]);

  return (
    <section id="projects" className="pt-22 sm:pt-23 lg:pt-25">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-30">
        My Projects
      </h2>

      {/* Search bar */}
      <div className="flex justify-center mb-6 relative w-full">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          placeholder="Search my projects"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-2 p-2 rounded-full bg-[#121212] border-2 border-slate-600 placeholder-[#64748B] text-sm sm:text-base md:text-lg lg:text-xl focus:border-primary-500 focus:outline-none"
        />
      </div>

      {/* Tag buttons */}
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 pb-6 lg:pb-8">
        {tags.map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>

      {/* Display projects corresponding to selected tag and search query */}
      <ProjectCardList projects={filteredProjects} />
    </section>
  );
};

export default ProjectsSection;
