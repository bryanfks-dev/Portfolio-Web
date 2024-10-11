"use client";

import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";
import PrimaryButton from "../components/primaryButton";
import { useRouter } from "next/navigation";
import ProjectCard from "./components/projectCard";

export default function ProjectsSection() {
  // Router instance
  const router = useRouter();

  /**
   * redirectToProjects is a function that redirects the user to the projects page.
   *
   * @returns {void}
   */
  const redirectToProjects = (): void => {
    router.push("/projects");
  };

  return (
    <section
      id="projects"
      className="bg-invert flex flex-col gap-2 overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-28"
    >
      <span className="text-sm font-bold text-primary lg:text-base">
        &mdash; PROJECTS
      </span>

      <div className="flex flex-col gap-8">
        <span className="flex items-center gap-2 text-2xl font-bold text-secondary md:text-3xl">
          <BlockCodeSolidIcon className="hidden size-6 text-subtle md:size-8 lg:block" />
          {"Notable {Projects}: A Journey Through My Work!"}
        </span>

        <div className="flex flex-col items-center gap-6">
          <div className="grid w-full grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <PrimaryButton
              className="w-fit font-semibold"
              onClick={redirectToProjects}
            >
              View More
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
