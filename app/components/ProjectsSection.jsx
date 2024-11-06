"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { ProjectsData } from "../data/projectsData";

// Project tags
const tags = [
  "All",
  "Websites",
  "Games",
  "Creative Coding",
  "Graphic Designs",
  "Research",
  "Full Stack Development",
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All"); // For selected tag
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // For motion.li

  // Function that changes tags
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Function that updates search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function that filters projects based on selected tag
  const filteredProjects = ProjectsData.filter((project) => {
    const isTagMatched = tag === "All" || project.tag.includes(tag);
    const isSearchMatched = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return isTagMatched && isSearchMatched;
  });

  // ProjectCard has two variants
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
          className="w-full pl-10 pr-2 p-2 rounded-full bg-[#121212] border-2 border-slate-600 placeholder-[#64748B] text-sm sm:text-base md:text-lg lg:text-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
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
      <ul
        ref={ref}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          // Animated ProjectCard
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              projectUrl={project.projectUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
