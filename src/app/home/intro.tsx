"use client";

import DownloadIcon from "@/presentation/icons/download";
import SecondaryButton from "../components/secondayButton";
import { ArrowIcon } from "@/presentation/icons/arrow";
import SocialBubble from "./components/socialBubble";
import GithubIcon from "@/presentation/icons/github";
import InstagramIcon from "@/presentation/icons/instagram";
import LinkedInIcon from "@/presentation/icons/linkedin";
import Image from "next/image";

import Profile from "public/images/profile.png";

/**
 * IntroSection is a component that renders the intro section of the home page.
 *
 * @returns {JSX.Element} The intro section.
 */
export default function IntroSection(): JSX.Element {
  const socials: SocialBubbleProps[] = [
    {
      socialName: "Github",
      socialIcon: GithubIcon,
      href: "https://github.com/bryanfks-dev",
    },
    {
      socialName: "Instagram",
      socialIcon: InstagramIcon,
      href: "https://www.instagram.com/_bryanfks",
    },
    {
      socialName: "LinkedIn",
      socialIcon: LinkedInIcon,
      href: "https://www.linkedin.com/in/bryan-fernando-kurniawan-suhartono-2394bb21b/",
    },
  ];

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="relative z-40 flex h-full items-center px-24">
        <div className="flex gap-4 *:flex-1">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-6">
              <div className="w-fit rounded-full border-2 border-text-secondary px-6 py-3 font-semibold text-text-secondary">
                Back-end Engineer
              </div>

              <span className="text-6xl font-medium text-secondary">
                Hi, I&apos;m{" "}
                <span className="font-bold text-text-secondary">
                  &#x7B;Bryan &mdash;
                </span>
                <p className="font-bold text-text-secondary">
                  Fernando Kurniawan Suhartono&#x7D;
                </p>
              </span>

              <p className="font-medium text-text-primary">
                An undergraduate student in Computer Science who has a strong
                passion in programming.
              </p>

              <div className="flex gap-6">
                <SecondaryButton className="flex gap-2" onClick={() => {}}>
                  <span>Download CV</span>
                  <DownloadIcon className="size-6" strokeWidth={0} />
                </SecondaryButton>

                <button className="flex items-center gap-2 text-text-secondary">
                  <span className="font-semibold">Message me</span>
                  <ArrowIcon className="size-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map((props) => (
                <SocialBubble key={props.socialName} {...props} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <Image
              width={0}
              height={0}
              src={Profile.src}
              alt="Profile"
              unoptimized={true}
              priority={true}
              className="h-auto w-96 rounded-xl shadow-md"
            />
            <span className="flex select-none items-center text-lg gap-2 font-semibold text-text-secondary">
              Scroll for more
              <ArrowIcon className="size-4 rotate-90" strokeWidth={3} />
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -left-[10%] top-[75%] z-10 h-[610px] w-[610px] rounded-full bg-subtle" />
      <div className="absolute -left-[15%] -top-[65%] z-10 h-[610px] w-[610px] rounded-full bg-subtle" />
      <div className="absolute left-[64%] top-[70%] z-10 h-[148px] w-[148px] rounded-full bg-subtle" />
      <div className="absolute left-[77%] top-[50%] z-10 h-[610px] w-[610px] rounded-full bg-subtle" />
    </section>
  );
}
