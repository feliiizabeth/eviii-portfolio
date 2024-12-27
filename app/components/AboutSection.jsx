"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";

import { fetchAboutMeData } from "@/utils/fetchAboutMeData";
import Education from "./Education";
import SkillsList from "./SkillsList";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [description, setDescription] = useState([]); // For description
  const [tabsData, setTabsData] = useState([]); // For section tabs
  const [tab, setTab] = useState("skills"); // For selected tab
  const [isPending, startTransition] = useTransition(); // For tab changes

  // Function that changes tabs and triggers transition
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAboutMeData();
        setDescription(data.Description);
        setTabsData(data.TabsData);
      } catch (e) {
        console.error("Failed to fetch About Me data:", e);
      }
    };
    fetchData();
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
          <div className="text-base lg:text-lg text-[#ADB7BE]">
            {description.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )) || null}
          </div>

          {/* Switchable tab buttons */}
          <div className="flex flex-row justify-start mt-4">
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
