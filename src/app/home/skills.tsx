"use client";

import { useState } from "react";
import LightningSolidIcon from "@/presentation/icons/lightningSolid";
import Tabs from "../components/tabs";
import SkillCard from "./components/skillCard";
import { skills } from "@/core/constants/skills";

export default function SkillsSection() {
  /**
   * @state {number} activeSkillsIndex - The active skills index.
   *
   * @stateSetter {number} setActiveSkillsIndex - The active skills index setter.
   */
  const [activeSkillsIndex, setActiveSkillsIndex] = useState<number>(0);

  /**
   * skillTabsProps is an object that defines the properties of the skill tabs.
   *
   * @see {@link TabsProps}
   */
  const skillTabsProps: TabsProps = {
    items: [
      {
        label: "Languages & Frameworks",
      },
      {
        label: "Database",
      },
      {
        label: "Design Tool",
      },
      {
        label: "Version Control System",
      },
      {
        label: "Project Management Tool",
      },
    ],
    onChange: (index: number) => {
      // Index overflow safety check
      if (index < 0 || index >= skills.length) {
        return;
      }

      setActiveSkillsIndex(index);
    },
  };

  return (
    <section
      id="skills"
      className="flex flex-col gap-2 overflow-hidden bg-background-primary px-4 py-16 md:px-8 lg:px-16 lg:py-24"
    >
      <span className="text-sm font-bold text-primary lg:text-base">
        &mdash; SKILLS
      </span>

      <div className="flex flex-col gap-8 *:flex-1">
        <span className="flex items-center gap-2 text-2xl font-bold text-secondary md:text-3xl lg:text-4xl">
          <LightningSolidIcon className="hidden size-6 text-subtle md:size-7 lg:block lg:size-8" />
          {"The {Skills} That Define My Capabilities!"}
        </span>

        <Tabs {...skillTabsProps} />

        <div className="flex flex-wrap gap-1 md:justify-start md:gap-6 lg:gap-3.5">
          {skills[activeSkillsIndex].map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
