"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MenuBarIcon from "../../presentation/icons/menu-bar";
import HomeIcon from "@/presentation/icons/home";
import { usePathname } from "next/navigation";
import UserIcon from "@/presentation/icons/user";
import LightningIcon from "@/presentation/icons/lightning";
import React from "react";
import BrightnessIcon from "@/presentation/icons/brigthness";
import ChatIcon from "@/presentation/icons/chat";
import BlockCodeIcon from "@/presentation/icons/blockCode";
import HomeSolidIcon from "@/presentation/icons/homeSolid";
import UserSolidIcon from "@/presentation/icons/userSolid";
import LightningSolidIcon from "@/presentation/icons/lightningSolid";
import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";

/**
 * DekstopNavbar is a component that renders the navbar for desktop devices.
 *
 * @returns {JSX.Element} The desktop navbar.
 */
export default function DesktopNavbar(): JSX.Element {
  // Get current pathname.
  const pathName = usePathname();

  // Check if the current path is the base path.
  const isBasePath = pathName === "/";

  // Create a reference for the extra menu.
  const extraMenuRef = useRef<HTMLDivElement>(null);

  /**
   * @state {boolean} scrolled - A state that represents if the user has scrolled the page.
   *
   * @setState {boolean} setScrolled - A function that sets the state of the user scrolling the page.
   */
  const [scrolled, setScrolled] = useState<boolean>(false);

  /**
   * @state {number} selectedMenu - A state that represents the selected menu.
   *
   * @setState {number} setSelectedMenu - A function that sets the selected menu.
   */
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  /**
   * @state {boolean} extraMenuOpenned - A state that represents if the extra menu is openned.
   *
   * @setState {boolean} setExtraMenuOpenned - A function that sets the state of the extra menu.
   */
  const [extraMenuOpenned, setExtraMenuOpenned] = useState<boolean>(false);

  /**
   * navUItems is an array of NavbarItemProps that represents the navbar items.
   *
   * @see {@link NavbarItemProps}
   */
  const navItems: NavbarItemProps[] = [
    {
      label: "Home",
      unselectedIcon: HomeIcon,
      selectedIcon: HomeSolidIcon,
      href: "#",
    },
    {
      label: "About",
      unselectedIcon: UserIcon,
      selectedIcon: UserSolidIcon,
      href: "#about",
    },
    {
      label: "Skills",
      unselectedIcon: LightningIcon,
      selectedIcon: LightningSolidIcon,
      href: "#skills",
    },
    {
      label: "Projects",
      unselectedIcon: BlockCodeIcon,
      selectedIcon: BlockCodeSolidIcon,
      href: "#projects",
    },
  ];

  // Create a reference for the navbar.
  const navbarRef = useRef<HTMLDivElement>(null);

  /**
   * NavItem is a component that renders a navbar item.
   *
   * @param {NavbarItemProps} props - The props of the component.
   *
   * @returns {JSX.Element} The navbar item.
   */
  const NavItem = ({
    currIndex,
    props,
  }: {
    currIndex: number;
    props: NavbarItemProps;
  }): JSX.Element => (
    <li>
      <Link
        className={clsx(
          "select-none text-lg font-semibold",
          isBasePath && selectedMenu === currIndex
            ? scrolled
              ? "text-primary"
              : "text-secondary"
            : scrolled
              ? "text-subtle hover:brightness-90"
              : "text-invert hover:brightness-90",
        )}
        href={props.href}
      >
        {props.label}
      </Link>
    </li>
  );

  /**
   * NavItemSeperator is a component that renders a navbar item seperator.
   *
   * @returns {JSX.Element} The navbar item seperator.
   */
  const NavItemSeperator = (): JSX.Element => (
    <li className="select-none font-semibold">/</li>
  );

  /**
   * toggleExtraMenuHeight is a function that toggles the height of the extra menu.
   *
   * @param {boolean} expandMenu - A boolean that represents if the menu should be expanded.
   *
   * @returns {void}
   */
  const toggleExtraMenuHeight = (expandMenu: boolean): void => {
    // Check if the extra menu ref is not null.
    if (!extraMenuRef.current) {
      return;
    }

    // Set the height of the extra menu.
    extraMenuRef.current.style.height = expandMenu
      ? `${extraMenuRef.current.scrollHeight + 16}px`
      : "0px";
  };

  /**
   * toggleExtraMenu is a function that toggles the extra menu.
   *
   * @returns {void}
   */
  const toggleExtraMenu = (): void => {
    setExtraMenuOpenned((prev) => {
      toggleExtraMenuHeight(!prev);

      return !prev;
    });
  };

  /**
   * handleScroll is a function that handles the scroll event.
   *
   * @returns {void}
   */
  const handleScroll = useCallback(() => {
    setScrolled((prev) => {
      if (navbarRef.current === null) {
        return prev;
      }

      return scrollY > innerHeight - navbarRef.current.clientHeight;
    });
  }, []);

  // Add an event listener to the scroll event.
  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      ref={navbarRef}
      className={clsx(
        "fixed top-0 z-50 w-full text-lg transition-all duration-300",
        scrolled && "bg-invert shadow",
      )}
    >
      <div
        className={clsx(
          "transition-all duration-300",
          scrolled ? "px-24 py-2" : "px-12 py-4",
        )}
      >
        <div className="flex h-16 items-center justify-between *:flex-1">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block select-none" href="#">
              <span className="sr-only">Home</span>
              <span
                className={clsx(
                  "text-2xl font-bold",
                  scrolled ? "text-default" : "text-secondary",
                )}
              >
                bryan
                <span
                  className={clsx(scrolled ? "text-primary" : "text-invert")}
                >
                  fks.
                </span>
              </span>
            </Link>
          </div>

          <div className="flex justify-center">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                {navItems.map((props, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && <NavItemSeperator />}
                    <NavItem currIndex={index} props={props} />
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative flex justify-end">
            <div
              className="group cursor-pointer"
              onClick={() => toggleExtraMenu()}
            >
              <MenuBarIcon
                className={clsx(
                  "size-6 group-hover:brightness-75",
                  extraMenuOpenned
                    ? scrolled
                      ? "text-primary"
                      : "text-secondary"
                    : scrolled
                      ? "text-subtle"
                      : "text-invert",
                )}
              />
            </div>

            <div
              ref={extraMenuRef}
              className="bg-invert absolute top-full mt-5 grid h-0 overflow-y-hidden rounded shadow-md transition-all duration-300"
            >
              <nav className="place-self-center">
                <ul className="font-medium">
                  <li
                    className="bg-invert cursor-pointer px-6 py-4 hover:brightness-90"
                    onClick={() => {
                      toggleExtraMenu();
                    }}
                  >
                    <span className="flex items-center gap-4">
                      <BrightnessIcon
                        className="default size-6 text-primary"
                        strokeWidth={0.5}
                      />
                      <p className="select-none">Appearance Setup</p>
                    </span>
                  </li>
                  <li
                    className="bg-invert cursor-pointer px-6 py-4 hover:brightness-90"
                    onClick={() => toggleExtraMenu()}
                  >
                    <Link
                      href="/tell-project-idea"
                      className="flex items-center gap-4"
                    >
                      <ChatIcon
                        className="default size-6 text-primary"
                        strokeWidth={2}
                      />
                      <p className="select-none">Tell Project Idea</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
