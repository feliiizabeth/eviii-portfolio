"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // For motion.li

  // Function that changes tags
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Function that filters projects based on selected tag
  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

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

      {/* Display projects corresponding to selected tag */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // Animated ProjectCard
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duratoin: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
