"use client";

import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";
import HeartSolidIcon from "@/presentation/icons/happySolid";
import PuzzlePieceSolidIcon from "@/presentation/icons/puzzlePieceSolid";
import { useState } from "react";

/**
 * StatsSection is a section that displays my current statistics.
 *
 * @returns {JSX.Element} The stats section.
 */
export default function StatsSection(): JSX.Element {
  /**
   * @state {number} yearsOfExperience - state that represents the years of experience.
   *
   * 2020 is the initial year, where I start my journey as developer.
   */
  const [yearsOfExperience] = useState<number>(new Date().getFullYear() - 2020);

  /**
   * @state projectsCompletedCount - state that represents the projects completed count.
   *
   * @stateSetter setProjectsCompletedCount - state setter for projectsCompletedCount.
   */
  const [projectsCompletedCount, setProjectsCompletedCount] = useState(0);

  /**
   * @state happyClientsCount - state that represents the happy clients count.
   *
   * @stateSetter setHappyClientsCount - state setter for happyClientsCount.
   */
  const [happyClientsCount] = useState(2);

  return (
    <section
      id="stats"
      className="flex flex-col flex-wrap gap-4 bg-primary px-6 py-16 *:flex-1 md:grid md:grid-flow-row md:grid-cols-2 md:gap-8 md:px-12 md:py-20 lg:grid-cols-3 lg:flex-row lg:gap-16 lg:px-24 lg:py-28"
    >
      <div className="text-invert flex h-96 min-h-72 flex-col justify-end gap-5 rounded-3xl bg-secondary p-8 md:h-72 md:items-center md:justify-center md:p-2 lg:p-12">
        <PuzzlePieceSolidIcon
          className="size-24 text-secondary brightness-75 md:hidden"
          strokeWidth={1.5}
        />

        <span className="flex select-none items-end gap-5 text-6xl font-bold md:flex-col md:items-center md:justify-center md:gap-2 md:text-7xl lg:text-8xl">
          {yearsOfExperience}+
          <p className="text-2xl font-medium md:text-center">
            YEARS OF EXPERIENCES.
          </p>
        </span>
      </div>

      <div className="text-invert flex h-96 min-h-72 flex-col justify-end gap-5 rounded-3xl bg-secondary p-8 md:h-72 md:justify-center lg:p-12">
        <BlockCodeSolidIcon
          className="size-24 text-secondary brightness-75 md:hidden"
          strokeWidth={1.5}
        />

        <span className="flex select-none items-end gap-5 text-6xl font-bold md:flex-col md:items-center md:gap-2 md:text-7xl lg:text-8xl">
          {projectsCompletedCount}
          <p className="text-2xl font-medium">PROJECTS COMPLETED.</p>
        </span>
      </div>

      <div className="text-invert flex h-96 min-h-72 flex-col justify-end gap-5 rounded-3xl bg-secondary p-8 md:col-span-2 md:h-72 md:justify-center lg:col-span-1 lg:p-12">
        <HeartSolidIcon
          className="size-24 text-secondary brightness-75 md:hidden"
          strokeWidth={1.5}
        />

        <span className="flex select-none items-end gap-5 text-6xl font-bold md:flex-col md:items-center md:gap-2 md:text-7xl lg:text-8xl">
          {happyClientsCount}
          <p className="text-2xl font-medium">HAPPY CLIENTS.</p>
        </span>
      </div>
    </section>
  );
}
