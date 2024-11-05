import Skill from "../components/Skill";

// Array of tabs, each with their own information
export const TabsData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-4">
        <Skill name="Python" />
        <Skill name="JavaScript" />
        <Skill name="Java" />
        <Skill name="C" />
        <Skill name="C++" />
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="jQuery" />
        <Skill name="Bootstrap" />
        <Skill name="React" />
        <Skill name="SQL" />
        <Skill name="Game Maker Language" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="pl-2">
        <p className="text-lg leading-relaxed">
          <span className="font-semibold text-xl">
            New York University Tandon School of Engineering
          </span>
          <br />
          <span className="text-sm text-[#ADB7BE]">Brooklyn, NY</span>
          <br />
          <span className="mt-2">
            Bachelor of Science, Major in Computer Science, Minor in Integrated
            Design & Media
          </span>
        </p>
      </div>
    ),
  },
];
