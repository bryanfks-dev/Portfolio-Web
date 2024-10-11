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
      className="flex flex-col gap-2 bg-background-primary px-4 py-16 md:px-8 lg:px-16 lg:py-24"
    >
      <span className="text-sm font-bold text-primary lg:text-base">
        &mdash; ABOUT ME
      </span>

      <div className="flex flex-col gap-8 *:flex-1 lg:gap-24">
        <div className="flex flex-col gap-8 *:flex-1 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2 text-2xl font-bold text-secondary md:text-3xl lg:text-4xl">
              <UserSolidIcon className="size-6 text-subtle md:size-7 lg:size-8" />
              {"Behind the {Code}.."}
            </span>

            <p className="text-justify indent-6 tracking-tighter leading-6">
              I&lsquo;m{" "}
              <span className="font-semibold text-primary">
                {"Bryan Fernando Kurniawan Suhartono {Bryan}"}
              </span>
              , a 3<sup>rd</sup>-year undergraduate student majoring in Computer
              Science at Bina Nusantara (BINUS) @Malang University, Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2 text-justify text-2xl font-bold tracking-tighter text-secondary md:text-3xl lg:text-4xl">
              {
                "When Passion Meets {Technology}, Passion in Every Line of {Code} to Take on a New Challenges!"
              }
            </span>

            <p className="text-justify indent-6 tracking-tighter">
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

        <div>
          <span className="font-bold text-secondary">
            Have a chit-chat with me!
          </span>

          <Link
            href={"/#message"}
            className="flex w-fit items-center gap-2 font-semibold text-primary underline"
          >
            send.hi@bryan.com
            <ArrowIcon className="size-4" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
