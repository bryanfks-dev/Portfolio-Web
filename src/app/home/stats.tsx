"use client";

import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";
import HeartSolidIcon from "@/presentation/icons/happySolid";
import PuzzlePieceSolidIcon from "@/presentation/icons/puzzlePieceSolid";
import { useEffect, useState } from "react";

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
      className="flex flex-col flex-wrap gap-8 bg-primary px-4 py-8 *:flex-1 md:grid md:p-8 lg:flex-row lg:p-16"
    >
      <div className="flex flex-col gap-5 *:flex-1 md:flex-row">
        <div className="flex h-96 min-h-72 flex-col justify-end gap-5 bg-secondary p-8 text-text-secondary lg:p-12">
          <PuzzlePieceSolidIcon
            className="size-20 text-secondary brightness-90 md:hidden"
            strokeWidth={1.5}
          />

          <span className="flex gap-5 text-6xl font-bold md:flex-col md:text-7xl lg:text-8xl">
            {yearsOfExperience}+
            <p className="text-2xl font-medium">YEARS OF EXPERIENCES.</p>
          </span>
        </div>

        <div className="flex h-96 min-h-72 flex-col justify-end gap-5 bg-secondary p-8 text-text-secondary lg:p-12">
          <BlockCodeSolidIcon
            className="size-20 text-secondary brightness-90 md:hidden"
            strokeWidth={1.5}
          />

          <span className="flex gap-5 text-6xl font-bold md:flex-col md:text-7xl lg:text-8xl">
            {projectsCompletedCount}
            <p className="text-2xl font-medium">PROJECTS COMPLETED.</p>
          </span>
        </div>
      </div>

      <div className="flex h-96 min-h-72 flex-col justify-end gap-5 bg-secondary p-8 text-text-secondary lg:p-12">
        <HeartSolidIcon
          className="size-20 text-secondary brightness-90 md:hidden"
          strokeWidth={1.5}
        />

        <span className="flex gap-5 text-6xl font-bold md:flex-col md:text-7xl lg:text-8xl">
          {happyClientsCount}
          <p className="text-2xl font-medium">HAPPY CLIENTS.</p>
        </span>
      </div>
    </section>
  );
}
