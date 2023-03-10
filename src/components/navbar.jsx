import { useState, useEffect } from "react";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";

// Import icons
// Import chevron icon
import { ReactComponent as Chevron } from "../assets/icons/chevron.svg";

// Import theme icons
import { ReactComponent as LightTheme } from "../assets/icons/theme/light-theme.svg";
import { ReactComponent as DarkTheme } from "../assets/icons/theme/dark-theme.svg";
import { ReactComponent as SystemTheme } from "../assets/icons/theme/system-theme.svg";

// Import mobile navbar icons
import { ReactComponent as Home } from "../assets/icons/navbar/home.svg";
import { ReactComponent as About } from "../assets/icons/navbar/about-me.svg";
import { ReactComponent as More } from "../assets/icons/navbar/more.svg";
import { ReactComponent as AboutWebsite } from "../assets/icons/navbar/about-website.svg";

function NavigationBar(props) {
    // Menu state
    const [selectedMenu, setSelectedMenu] = useState("home");

    // Dekstop exclusive
    const [pastSelectedMenu, setPastSelectedMenu] = useState(selectedMenu);

    // Mobile exclusive
    const [menuModalIsOpen, setMenuModalIsOpen] = useState(false);

    // Theme state
    const pastTheme = localStorage.getItem("theme");
    const [selectedTheme, setSelectedTheme] = useState(pastTheme !== null ? pastTheme : "light");
    const [themeModalIsOpen, setThemeModalIsOpen] = useState(false);

    // Mobile exclusive
    useEffect(() => {
        // Close menu modal immediately after user choosing menu
        if (selectedMenu !== "more") setMenuModalIsOpen(false);
    }, [selectedMenu]);

    // Mobile exclusive
    useEffect(() => {
        // Close theme modal if menu modal is closed
        if (!menuModalIsOpen) setThemeModalIsOpen(false);
    }, [menuModalIsOpen]);

    // Update theme modal if selected theme is changed
    useEffect(() => {
        localStorage.setItem("theme", selectedTheme);

        // Add "dark" classname if user prefers dark mode
        if (selectedTheme === "dark" || (selectedTheme === "system" && matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add("dark");
        }
        // Remove "dark" classname if user prefers light mode
        else document.documentElement.classList.remove("dark");

        // Close theme modal
        setThemeModalIsOpen(false);
    }, [selectedTheme]);

    // Hide / unhide more modal
    useEffect(() => {
        const moreModal = document.querySelector("#more-modal");
        const modalHeight = moreModal.scrollHeight; // Get more modal possible height

        // Hide / unhide more modal
        if (matchMedia('(max-width: 768px)').matches) {
            moreModal.style.height = (selectedMenu.split('#')[0] === "more") ? `${modalHeight}px` : "0px";
        }
        else {
            moreModal.style.height = (selectedMenu === "more") ? `${modalHeight}px` : "0px";
        }
    }, [selectedMenu]);

    // Hide / unhide theme modal
    useEffect(() => {
        const themeModal = document.querySelector("#theme-modal");
        const modalHeight = themeModal.scrollHeight; // Get theme modal possible height

        // Hide / unhide theme modal
        themeModal.style.height = (!themeModalIsOpen) ? "0px" : `${modalHeight}px`;
    }, [themeModalIsOpen]);

    // Possible main URI
    const URI = ["/", "/#home", "/#aboutme", "/#skills", "/#projects", "/#achievements"];

    // Modify header and logo depends on scroll actions
    useEffect(() => {
        const navBar = document.querySelector("header");
        const logo = document.querySelector("#logo");

        addEventListener("scroll", () => {
            if (URI.indexOf(location.pathname) >= 0) {
                if (scrollY < innerHeight - navBar.scrollHeight) {
                    if (matchMedia('(max-width: 768px)').matches) {
                        const menuModal = document.querySelector("#menu-modal");
                        const menuModalPosX = menuModal.getBoundingClientRect().left;

                        if (menuModalPosX !== 0) {
                            // Navbar edit
                            navBar.classList.remove("bg-primary-bg");
                            navBar.classList.remove("shadow-md");
            
                            // Logo edit
                            if (!logo.classList.contains("before:text-exclusive-white") && 
                                !logo.classList.contains("after:text-exclusive-white")) {
                                logo.classList.replace("before:text-tertiary-color", "before:text-exclusive-white");
                                logo.classList.replace("after:text-tertiary-color", "after:text-exclusive-white");
                            }
                        }
                    }
                    else {
                        // Navbar edit
                        navBar.classList.remove("bg-primary-bg");
                        navBar.classList.remove("shadow-md");
        
                        // Logo edit
                        if (!logo.classList.contains("before:text-exclusive-white") && 
                            !logo.classList.contains("after:text-exclusive-white")) {
                            logo.classList.replace("before:text-tertiary-color", "before:text-exclusive-white");
                            logo.classList.replace("after:text-tertiary-color", "after:text-exclusive-white");
                        }

                        const chevron = document.querySelector("#more-menu i");
    
                        // Chevron edit
                        if (!chevron.classList.contains("fill-exclusive-white")) {
                            chevron.classList.replace("fill-tertiary-color", "fill-exclusive-white");
                        }
                    }
                }
                else {
                    // Navbar edit
                    navBar.classList.add("bg-primary-bg");
                    navBar.classList.add("shadow-md");
    
                    // Logo edit
                    if (!logo.classList.contains("before:text-tertiary-color") && 
                        !logo.classList.contains("after:text-tertiary-color")) {
                        logo.classList.replace("before:text-exclusive-white", "before:text-tertiary-color");
                        logo.classList.replace("after:text-exclusive-white", "after:text-tertiary-color");
                    }
    
                    // Desktop exclusive
                    if (matchMedia('(min-width: 768px)').matches) {
                        const chevron = document.querySelector("#more-menu i");
    
                        // Chevron edit
                        if (!chevron.classList.contains("fill-tertiary-color")) {
                            chevron.classList.replace("fill-exclusive-white", "fill-tertiary-color");
                        }
                    }
                }
            }
        });
    });

    // Mobile exclusive
    // Modify navbar if opened in home section
    useEffect(() => {
        if (URI.indexOf(location.pathname) >= 0) {
            const navBar = document.querySelector("header");
            const logo = document.querySelector("#logo");

            if (matchMedia('(max-width: 768px)').matches) {
                if (scrollY < innerHeight - navBar.scrollHeight) {
                    if (menuModalIsOpen) {
                        // Navbar edit
                        navBar.classList.add("bg-primary-bg");
                        navBar.classList.add("shadow-md");

                        // Logo edit
                        if (!logo.classList.contains("before:text-tertiary-color") && 
                            !logo.classList.contains("after:text-tertiary-color")) {
                            logo.classList.replace("before:text-exclusive-white", "before:text-tertiary-color");
                            logo.classList.replace("after:text-exclusive-white", "after:text-tertiary-color");
                        }
                    }
                    else {
                        // Navbar edit
                        navBar.classList.remove("bg-primary-bg");
                        navBar.classList.remove("shadow-md");

                        // Logo edit
                        if (logo.classList.contains("before:text-tertiary-color") && 
                            logo.classList.contains("after:text-tertiary-color")) {
                            logo.classList.replace("before:text-tertiary-color", "before:text-exclusive-white");
                            logo.classList.replace("after:text-tertiary-color", "after:text-exclusive-white");
                        }
                    }
                }
            }
        }
    }, [menuModalIsOpen]);

    const DesktopNavBar = (
        <header className={"fixed px-9 lg:px-36 py-5 w-full z-[99] transition-all duration-[400ms]" + 
                (URI.indexOf(location.pathname) === -1 ? " bg-primary-bg shadow-md" : "")}>
            <div className="select-none flex flex-row justify-between items-center">
                {/* Logo */}
                <HashLink to={props.home} className="cursor-pointer" 
                    onClick={() => setSelectedMenu("home")}>
                    <span className={"text-primary-color font-bold text-2xl before:content-['>'] after:content-['/'] before:transition-all before:duration-[400ms] after:transition-all after:duration-[400ms]" + 
                            (URI.indexOf(location.pathname) === -1 ? " before:text-tertiary-color after:text-tertiary-color" : " before:text-exclusive-white after:text-exclusive-white")}
                            id="logo">
                        bryanfks
                    </span>
                </HashLink>
                <div className="flex flex-row items-center gap-9">
                    {/* Main menu */}
                    <nav className="flex flex-row items-center gap-9">
                        <HashLink to={props.home} className="cursor-pointer" id="home-menu"
                            onClick={() => setSelectedMenu("home")}>
                            <span className="text-primary-color font-medium hover:text-secondary-color">
                                Home
                            </span>
                        </HashLink>
                        <HashLink to={props.aboutme} className="cursor-pointer" id="about-menu"
                            onClick={() => setSelectedMenu("about")}>
                            <span className="text-primary-color font-medium hover:text-secondary-color">
                                About
                            </span>
                        </HashLink>
                        <div className="text-primary-color hover:text-secondary-color" 
                            onMouseEnter={() => {if (selectedMenu !== "more") setPastSelectedMenu(selectedMenu); setSelectedMenu("more");}} 
                            onMouseLeave={() => {if (selectedMenu.split('#')[1] === undefined) setSelectedMenu(pastSelectedMenu)}}>
                            <li className="cursor-pointer relative flex flex-row items-center" id="more-menu">
                                <span className="text-inherit font-medium">
                                    More
                                </span>
                                <i className={"transition-all duration-[400ms]" + 
                                        (URI.indexOf(location.pathname) === -1 ? " fill-tertiary-color" : " fill-exclusive-white")}>
                                    <Chevron/>
                                </i>
                            </li>
                            {/* More modal */}
                            <nav className="absolute mt-1 -ml-4 flex flex-col bg-secondary-bg overflow-y-hidden transition-all duration-[400ms] shadow" id="more-modal">
                                <HashLink to={props.skills} className="cursor-pointer pl-4 pr-4 lg:pr-8 py-2 hover:bg-primary-select-item" 
                                    onClick={() => {setSelectedMenu("more#skills"); setPastSelectedMenu(selectedMenu);}}>
                                    <span className="text-tertiary-color">Skills</span>
                                </HashLink>
                                <HashLink to={props.projects} className="cursor-pointer pl-4 pr-4 lg:pr-8 py-2 hover:bg-primary-select-item" 
                                    onClick={() => {setSelectedMenu("more#projects"); setPastSelectedMenu(selectedMenu);}}>
                                    <span className="text-tertiary-color">Projects</span>
                                </HashLink>
                                <HashLink to={props.achievements} className="cursor-pointer pl-4 pr-4 lg:pr-8 py-2 hover:bg-primary-select-item" 
                                    onClick={() => {setSelectedMenu("more#achievements"); setPastSelectedMenu(selectedMenu);}}>
                                    <span className="text-tertiary-color">Achievements</span>
                                </HashLink>
                                <HashLink to={props.contact} className="cursor-pointer pl-4 pr-4 lg:pr-8 py-2 hover:bg-primary-select-item" 
                                    onClick={() => {setSelectedMenu("more#contact"); setPastSelectedMenu(selectedMenu);}}>
                                    <span className="text-tertiary-color">Contact</span>
                                </HashLink>
                            </nav>
                        </div>
                        {/* About website button */}
                        <HashLink to={props.aboutweb} className="cursor-pointer" id="abou-web-menu" 
                            onClick={() => setSelectedMenu("about-website")}>
                            <span className="text-primary-color hover:text-primary-bg font-medium 
                                        border border-primary-color p-2 transition-all duration-[400ms] 
                                        shadow-[inset_0_0_0_0_var(--primary-color)]  hover:shadow-[inset_200px_0_0_0_var(--primary-color)]">
                                    About Website
                            </span>
                        </HashLink>
                    </nav>
                    {/* Theme section */}
                    <div>
                        {/* Theme icon */}
                        <li className="cursor-pointer bg-primary-selected-item py-0.5 pl-1 flex flex-row" 
                            onClick={() => setThemeModalIsOpen(!themeModalIsOpen)}>
                            <i className="fill-tertiary-color">
                                {
                                    selectedTheme === "light" ? <LightTheme/> : 
                                    selectedTheme === "dark" ? <DarkTheme/> : 
                                    <SystemTheme/>
                                }
                            </i>
                            <i className={"fill-tertiary-color transition-all duration-[400ms]" + 
                                    (themeModalIsOpen ? " rotate-180" : "")}>
                                    <Chevron/>
                                </i>
                        </li>
                        {/* Theme modal */}
                        <nav className="absolute mt-5 lg:mt-1 right-0 lg:right-auto lg:mr-1 bg-secondary-bg overflow-y-hidden transition-all duration-[400ms] shadow" id="theme-modal">
                            <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2" + 
                                    (selectedTheme === "light" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                    onClick={() => setSelectedTheme("light")}>
                                <i className="fill-tertiary-color"><LightTheme/></i>
                                <span className="text-primary-color">Light</span>
                            </li>
                            <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2" + 
                                    (selectedTheme === "dark" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                    onClick={() => setSelectedTheme("dark")}>
                                <i className="fill-tertiary-color"><DarkTheme/></i>
                                <span className="text-primary-color">Dark</span>
                            </li>
                            <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2 hover:bg-primary-select-item" + 
                                    (selectedTheme === "system" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                    onClick={() => setSelectedTheme("system")}>
                                <i className="fill-tertiary-color"><SystemTheme/></i>
                                <span className="text-primary-color">System</span>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );

    const MobileNavBar = (
        <header className={"fixed px-6 lg:px-36 py-5 lg:py-4 w-full z-[99] transition-all duration-[400ms]" + 
                (URI.indexOf(location.pathname) === -1 ? " bg-primary-bg shadow-md" : "")}>
            <div className="select-none flex flex-row items-center justify-between">
                {/* Logo */}
                <HashLink to={props.home} className="cursor-pointer" 
                    onClick={() => setSelectedMenu("home")}>
                    <span className={"text-primary-color font-bold text-xl before:content-['>'] after:content-['/'] before:transition-all before:duration-[400ms] after:transition-all after:duration-[400ms]" + 
                            (URI.indexOf(location.pathname) === -1 ? " before:text-tertiary-color after:text-tertiary-color" : " before:text-exclusive-white after:text-exclusive-white")}
                            id="logo">
                        bryanfks
                    </span>
                </HashLink>
                <div className="flex flex-col">
                    {/* Fries icon */}
                    <div className="flex flex-col gap-1.25" 
                        onClick={() => setMenuModalIsOpen(!menuModalIsOpen)}>
                        <div className={"h-0.75 w-5 bg-primary-color transition-all duration-[400ms]" + 
                                (menuModalIsOpen ? " rotate-45 translate-y-2" : "")}></div>
                        <div className={"h-0.75 ml-2 w-0 bg-primary-color transition-all duration-[400ms]" + 
                                (!menuModalIsOpen ? " w-3" : "")}></div>
                        <div className={"h-0.75 w-5 bg-primary-color transition-all duration-[400ms]" + 
                                (menuModalIsOpen ? " rotate-[-45deg] translate-y-[-.5rem]" : "")}></div>
                    </div>
                    {/* Menu modal */}
                    <div className={"absolute top-16 w-full bg-primary-bg left-0 flex flex-col shadow transition-all duration-[400ms] translate-x-0" + 
                            (!menuModalIsOpen ? " translate-x-[-100%]" : "")} 
                        id="menu-modal">
                        {/* Main menu */}
                        <nav className="flex flex-col">
                            <HashLink to={props.home} className="cursor-pointer flex flex-row gap-3 p-3 pl-14 hover:bg-primary-select-item" 
                                onClick={() => setSelectedMenu("home")}>
                                <i className="fill-tertiary-color"><Home/></i>
                                <span className="text-primary-color font-medium">Home</span>
                            </HashLink>
                            <HashLink to={props.aboutme} className="cursor-pointer flex flex-row gap-3 p-3 pl-14 hover:bg-primary-select-item" 
                                onClick={() => setSelectedMenu("about")}>
                                    <i className="fill-tertiary-color"><About/></i>
                                <span className="text-primary-color font-medium">About</span>
                            </HashLink>
                            <div>
                                <li className="cursor-pointer flex flex-row gap-3 p-3 pl-14 hover:bg-primary-select-item" 
                                    onClick={() => setSelectedMenu("more")}>
                                    <i className="fill-tertiary-color"><More/></i>
                                    <div className="flex flex-row">
                                        <span className="text-primary-color font-medium">More</span>
                                        <i className="fill-tertiary-color transition-all duration-[400ms]">
                                            <Chevron/>
                                        </i>
                                    </div>
                                </li>
                                {/* More modal */}
                                <nav className="flex flex-col bg-secondary-bg overflow-y-hidden transition-all duration-[400ms]" id="more-modal">
                                    <HashLink to={props.skills} className="cursor-pointer pl-20 py-2 hover:bg-primary-select-item" 
                                        onClick={() => setSelectedMenu("more#skills")}>
                                        <span className="text-tertiary-color font-medium">Skills</span>
                                    </HashLink>
                                    <HashLink to={props.projects} className="cursor-pointer pl-20 py-2 hover:bg-primary-select-item" 
                                        onClick={() => setSelectedMenu("more#projects")}>
                                        <span className="text-tertiary-color font-medium">Projects</span>
                                    </HashLink>
                                    <HashLink to={props.achievements} className="cursor-pointer pl-20 py-2 hover:bg-primary-select-item" 
                                        onClick={() => setSelectedMenu("more#achievements")}>
                                        <span className="text-tertiary-color font-medium">Achievements</span>
                                    </HashLink>
                                    <HashLink to={props.contact} className="cursor-pointer pl-20 py-2 hover:bg-primary-select-item" 
                                        onClick={() => setSelectedMenu("more#contact")}>
                                        <span className="text-tertiary-color font-medium">Contact</span>
                                    </HashLink>
                                </nav>
                            </div>
                            <HashLink to={props.aboutweb} className="cursor-pointer flex flex-row gap-3 p-3 pl-14 hover:bg-primary-select-item" 
                                onClick={() => setSelectedMenu("about-website")}>
                                <i className="fill-tertiary-color"><AboutWebsite/></i>
                                <span className="text-primary-color font-medium">About Website</span>
                            </HashLink>
                        </nav>
                        <hr className="w-10/12 mx-auto border-primary-color"/>
                        {/* Theme section */}
                        <div className="flex flex-row justify-between px-14 py-5">
                            <span className="text-primary-color font-medium">Theme</span>
                            <div className="relative">
                                {/* Theme icon */}
                                <li className="cursor-pointer bg-primary-selected-item py-0.5 pl-1 flex flex-row gap-2" 
                                    onClick={() => setThemeModalIsOpen(!themeModalIsOpen)}>
                                    <i className="fill-tertiary-color">
                                        {
                                            selectedTheme === "light" ? <LightTheme/> : 
                                            selectedTheme === "dark" ? <DarkTheme/> : 
                                            <SystemTheme/>
                                        }
                                    </i>
                                    <div className="flex flex-row">
                                        <span className="text-tertiary-color font-medium">{selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}</span>
                                        <i className={"fill-tertiary-color transition-all duration-[400ms]" + 
                                                (themeModalIsOpen ? " rotate-180" : "")}><Chevron/></i>
                                    </div>
                                </li>
                                {/* Theme modal */}
                                <nav className="absolute left-1/2 translate-x-[-50%] bg-secondary-bg overflow-y-hidden transition-all duration-[400ms] shadow" id="theme-modal">
                                    <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2" + 
                                            (selectedTheme === "light" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                            onClick={() => setSelectedTheme("light")}>
                                        <i className="fill-tertiary-color"><LightTheme/></i>
                                        <span className="text-primary-color">Light</span>
                                    </li>
                                    <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2" + 
                                            (selectedTheme === "dark" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                            onClick={() => setSelectedTheme("dark")}>
                                        <i className="fill-tertiary-color"><DarkTheme/></i>
                                        <span className="text-primary-color">Dark</span>
                                    </li>
                                    <li className={"cursor-pointer font-medium pl-2 pr-3 lg:pr-8 py-1.5 flex flex-row items-center gap-2 hover:bg-primary-select-item" + 
                                            (selectedTheme === "system" ? " bg-primary-selected-item" : " hover:bg-primary-select-item")}
                                            onClick={() => setSelectedTheme("system")}>
                                        <i className="fill-tertiary-color"><SystemTheme/></i>
                                        <span className="text-primary-color">System</span>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

    // Return suitable nav bar
    return (
        <Media query="(max-width: 768px)">
            {matches => matches ? MobileNavBar : DesktopNavBar}
        </Media>
    );
}

export default NavigationBar;