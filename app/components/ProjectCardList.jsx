import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectCardList = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ul
      ref={ref}
      className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12"
    >
      {projects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
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
  );
};

export default ProjectCardList;
