"use client";
import React, { useState, useRef } from "react";

import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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

// Projects' information
const ProjectsData = [
  {
    title: "sueño - Logo",
    description:
      "Designed a logo for an imagined brand in Adobe Illustrator, exploring multiple iterations through hand sketches and digital refinements. Developed and refined logo concepts using vector graphics to establish a unique visual identity.",
    image: "/images/sueno.png",
    tag: ["All", "Graphic Designs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    title: "Sunshine Deli - Menu",
    description:
      "Created a detailed deli menu in InDesign and Figma, blending typography, strategic layout, and rich imagery for both print and digital formats. Emphasized clear hierarchy and user experience to create an appealing and functional menu.",
    image: "/images/sunshine-deli.png",
    tag: ["All", "Graphic Designs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    title: "The Bosch Bird - Image Trace",
    description:
      "Reimagined Hieronymous Bosch's The Garden of Earthly Delights using vector art in Illustrator and advanced image manipulation in Photoshop, focusing on composition and creative techniques.",
    image: "/images/the-bosch-bird.png",
    tag: ["All", "Graphic Designs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    title: "Serene Confections - Graphic Treatment",
    description:
      "Created a graphic treatment document in InDesign, showcasing personal style through custom colors, typography, and textures, and utilizing grids for layout and visual exploration.",
    image: "/images/serene-confections.png",
    tag: ["All", "Graphic Designs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    title: "We Are the Champions - Text Texture",
    description:
      "Explored typography and grid layouts in Adobe InDesign by creating a black-and-white composition using five typefaces and varying text attributes to experiment with texture and alignment.",
    image: "/images/we-are-the-champions.png",
    tag: ["All", "Graphic Designs"],
    gitUrl: "/",
    previewUrl: "/",
  },
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
