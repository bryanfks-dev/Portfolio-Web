"use client";

import ArrowUpCircleSolidIcon from "@/presentation/icons/arrowUpCircleSolid";
import SocialBubble from "../home/components/socialBubble";
import GithubIcon from "@/presentation/icons/github";
import InstagramIcon from "@/presentation/icons/instagram";
import LinkedInIcon from "@/presentation/icons/linkedin";

/**
 * Footer is a component that renders the footer of the page.
 *
 * @returns {JSX.Element} The footer.
 */
export default function Footer(): JSX.Element {
  /**
   * socials is an array of SocialBubbleProps.
   *
   * @see {@link SocialBubbleProps}
   */
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
      href: "https://www.linkedin.com/in/bryan-fernando-kurniawan-suhartono/",
    },
  ];

  /**
   * scrollToTop is a function that scrolls the window to the top.
   *
   * @returns {void}
   */
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary px-6 py-10 md:px-12 md:pt-12 lg:px-24 lg:pt-10">
      <div className="flex flex-col gap-10 lg:gap-8">
        <div className="text-invert flex justify-between">
          <span className="select-none text-2xl font-bold">bryanfks.</span>

          <button
            className="lg:flex lg:items-center lg:gap-5"
            onClick={scrollToTop}
          >
            <span className="hidden lg:block lg:text-lg lg:font-medium">
              Back to Top
            </span>
            <ArrowUpCircleSolidIcon className="block size-10" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {socials.map((props) => (
            <SocialBubble
              key={props.socialName}
              {...props}
              className="border-invert text-invert hover:bg-invert hover:text-secondary"
            />
          ))}
        </div>
      </div>

      <div className="text-invert mb-16 mt-10 text-center text-sm lg:mb-6 lg:mt-12 lg:text-base">
        © 2024 Bryan Fernando Kurniawan Suhartono
      </div>
    </footer>
  );
}
