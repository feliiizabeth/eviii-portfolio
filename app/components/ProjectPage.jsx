import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ProjectCardList from "./ProjectCardList";

const ProjectPage = ({ project, allProjects }) => {
  const relatedProjects = [
    // Select other projects with the same tag (excluding "All")
    ...allProjects.filter(
      (p) =>
        p.title !== project.title &&
        p.tag.some((t) => t !== "All" && project.tag.includes(t))
    ),
    // Include projects with "All" tag if necessary (fallback)
    ...allProjects.filter(
      (p) => p.title !== project.title && p.tag.includes("All")
    ),
  ]
    // Remove duplicate projects based on title
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.title === value.title)
    )
    .slice(0, 3);

  return (
    <div>
      {/* Head containing meta data */}
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>

      {/* Hero Section */}
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 items-center">
          {/* Text Container */}
          <div className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start justify-self-center">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {project.title}{" "}
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {project.tag.join(", ")}
            </p>
          </div>

          {/* Responsive Image Container */}
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} banner`}
                className="object-cover"
                fill // Makes image responsive and ensures full coverage
                sizes="(max-width: 1024px) 250px, 400px"
                priority // Speeds up loading
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Overview</h2>
        <p className="text-base lg:text-lg text-[#ADB7BE]">
          {project.description}
        </p>
        <div className="mt-6 mb-4 text-center md:text-left">
          {project.projectUrl !== "/" && (
            <button className="px-6 py-3 w-72 sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white transition duration-300 ease-in-out transform hover:scale-105">
              <Link href={project.liveUrl}>View Live Project</Link>
            </button>
          )}
          {project.gitUrl !== "/" && (
            <button className="px-1 py-1 w-72 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 transition duration-300 ease-in-out transform hover:scale-105">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href={project.gitUrl}>View on GitHub</Link>
              </span>
            </button>
          )}
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Case Study</h2>

        {/* Background & Problem Statement */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Background & Problem Statement
          </h3>
          <p className="text-gray-300">
            {/* Summary of project purpose / background / problem /challenges / inspo / research / next steps. */}
          </p>
        </div>

        {/* Approach & Process */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Approach & Process
          </h3>
          <p className="text-gray-300">
            {/* Approach taken / technologies used / process / key steps/stages */}
          </p>
        </div>
      </section>

      {/* Media Showcase */}
      <section className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Media Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Additional media to display */}
          {project.additionalMedia?.map((media, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={media}
                alt={`${project.title} media ${index + 1}`}
                layout="responsive"
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reflection & Conclusion */}
      <section className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">
          Reflection & Conclusion
        </h2>
        <p className="text-lg text-gray-300">
          {/* Outcome / what was learned / potential improvements. */}
        </p>
      </section>

      {/* Related Projects */}
      <section className="mb-12 pb-24 mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Explore More Projects
        </h2>

        <ProjectCardList projects={relatedProjects} />
      </section>
    </div>
  );
};

export default ProjectPage;
