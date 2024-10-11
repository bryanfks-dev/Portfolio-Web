import { ArrowIcon } from "@/presentation/icons/arrow";
import UserSolidIcon from "@/presentation/icons/userSolid";
import Link from "next/link";

/**
 * AboutMeSection is a component that displays information about the myself.
 *
 * @returns {JSX.Element} The about me section.
 */
export default function AboutMeSection(): JSX.Element {
  return (
    <section
      id="about-me"
      className="bg-invert flex flex-col gap-2 px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-28"
    >
      <span className="text-sm font-bold text-primary lg:text-base">
        &mdash; ABOUT ME
      </span>

      <div className="flex flex-col gap-8 *:flex-1 lg:gap-24">
        <div className="flex flex-col gap-8 *:flex-1 lg:flex-row lg:gap-48">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2 text-2xl font-bold text-secondary md:text-3xl lg:text-4xl">
              <UserSolidIcon className="hidden size-6 text-subtle md:size-7 lg:block lg:size-8" />
              {"Behind the {Code}.."}
            </span>

            <p className="text-justify leading-relaxed lg:text-lg">
              I&lsquo;m{" "}
              <span className="font-semibold text-primary">
                {"Bryan Fernando Kurniawan Suhartono {Bryan}"}
              </span>
              , a 3<sup>rd</sup>-year undergraduate student majoring in Computer
              Science at Bina Nusantara (BINUS) @Malang University, Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2 text-justify text-2xl font-bold leading-normal text-secondary md:text-3xl lg:text-4xl">
              {
                "When Passion Meets {Technology}, Passion in Every Line of {Code} to Take on a New Challenges!"
              }
            </span>

            <p className="text-justify leading-relaxed lg:text-lg">
              Over the past 4-year, I’ve been diving into{" "}
              <span className="font-semibold text-primary">
                {"{web} and {mobile app development}"}
              </span>
              {
                ", and constantly honing my skills and keep up-to-date with industry latest tech. Now, I’m passionate about developing a "
              }
              <span className="font-semibold text-primary">{"{back-end}"}</span>
              {" logic to craft a seamless digital solutions."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-secondary">
            Have a chit-chat with me!
          </span>

          <Link
            href={"/#contact"}
            className="flex w-fit select-none items-center gap-2 font-semibold text-primary underline hover:brightness-75 lg:text-lg"
          >
            send.hi@bryan.com
            <ArrowIcon className="size-4" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
