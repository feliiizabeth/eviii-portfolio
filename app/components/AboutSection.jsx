"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Skills and education information
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>
          <span className="font-semibold">
            New York University Tandon School of Engineering
          </span>
          , Brooklyn, New York.
          <br />
          Bachelor of Science, Major in Computer Science, Minor in Integrated
          Design & Media.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // For selected tab
  const [isPending, startTransition] = useTransition(); // For tab changes

  // Function that changes tabs and triggers transition
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="About image"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          {/* About Me description */}
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Switchable tab buttons */}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>

          {/* Display tab content appropriately */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
