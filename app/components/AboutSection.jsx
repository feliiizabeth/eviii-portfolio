"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";

import { fetchTabsData } from "@/utils/fetchTabsData";
import Education from "./Education";
import SkillsList from "./SkillsList";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tabsData, setTabsData] = useState([]); // For section tabs' data
  const [tab, setTab] = useState("skills"); // For selected tab
  const [isPending, startTransition] = useTransition(); // For tab changes

  // Function that changes tabs and triggers transition
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const data = await fetchTabsData();
        setTabsData(data);
      } catch (e) {
        console.error("Failed to fetch tabs' data:", e);
      }
    };
    fetchTabs();
  }, []);

  const currentTab = tabsData.find((t) => t.id === tab);

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-22 sm:pt-23 lg:pt-25 pb-8 px-4 xl-gap-16 sm:pb-16 xl:px-16">
        <div>
          <Image
            src="/images/pattern.jpg"
            alt="Design pattern image"
            className="rounded-t-[96px] rounded-b-[96px]"
            width={512}
            height={1024}
            loading="lazy"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          {/* About Me description */}
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            Hi, there! I'm a recent graduate of NYU Tandon with a degree in
            Computer Science and a minor in Integrated Design & Media. My
            passion for technology started early, despite having limited access
            to it growing up. That all changed when I joined a Software
            Engineering Program in high school, where I discovered the thrill of
            turning ideas into functional and creative projects. From that
            moment, I knew I wanted a career that combines technical skills with
            creative expression.
            <br />
            <br />
            In my portfolio, you'll find a variety of projects—websites, graphic
            designs, games, and more. I love bringing a fresh, artistic
            perspective to my work and exploring different programming languages
            and tools. My approach is rooted in clear communication,
            collaboration, and breaking tasks down into manageable chunks, all
            while following industry best practices.
            <br />
            <br />
            As a first-generation Mexican-American from Brooklyn, I'm proud of
            my humble beginnings and bring that determination into every
            project. Beyond coding and design, I’m an avid artist, often
            blending my love for drawing with my technical work.
            <br />
            <br />
            I'm eager to explore new opportunities in the tech world and always
            open to collaborations that push me to grow. If my story resonates
            with you, let’s connect and create something amazing together!
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
          <div className="mt-8 flex flex-wrap gap-4">
            {currentTab && currentTab.id === "skills" ? (
              <SkillsList skills={currentTab.content} />
            ) : currentTab && currentTab.id === "education" ? (
              <Education edu={currentTab.content} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
