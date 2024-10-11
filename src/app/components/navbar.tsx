"use client";

import { useState } from "react";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

import HomeIcon from "@/presentation/icons/home";
import HomeSolidIcon from "@/presentation/icons/homeSolid";
import UserIcon from "@/presentation/icons/user";
import UserSolidIcon from "@/presentation/icons/userSolid";
import LightningIcon from "@/presentation/icons/lightning";
import LightningSolidIcon from "@/presentation/icons/lightningSolid";
import BlockCodeIcon from "@/presentation/icons/blockCode";
import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";
import { TABLET_WINDOW_WIDTH } from "@/core/constants/globalConst";

/**
 * Navbar is a component that renders the navbar of the page.
 *
 * @returns {JSX.Element} The navbar.
 */
export default function Navbar(): JSX.Element {
  /**
   * @state {WindowSize} windowsSize is an object that contains the width and height of the window.
   *
   * @stateSetter {WindowSize} setWindowsSize is a function that sets the windowsSize state.
   *
   * @see {@link WindowSize}
   */
  const [windowsSize] = useState<WindowSize>({
    width: innerWidth,
    height: innerHeight,
  });

  /**
   * navProps is a props object for the Navbar component.
   *
   * @see {@link NavbarProps}
   */
  const navProps: NavbarProps = {
    items: [
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
    ],
  };

  // Check if the window size is less than or equal to tablet size.
  if (windowsSize.width <= TABLET_WINDOW_WIDTH) {
    return <MobileNavbar {...navProps} />;
  }

  return <DesktopNavbar {...navProps} />;
}
