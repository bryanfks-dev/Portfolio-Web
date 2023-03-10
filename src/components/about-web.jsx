import { useEffect } from "react";
import { Link } from "react-router-dom";

import Typewriter from 'typewriter-effect/dist/core';

// Icons
import { ReactComponent as VisualStudioCode } from "../assets/icons/code-stuff/vscode.svg";

import { ReactComponent as HTML } from "../assets/icons/code-stuff/html.svg";
import { ReactComponent as CSS } from "../assets/icons/code-stuff/css.svg";
import { ReactComponent as Javascript } from "../assets/icons/code-stuff/js.svg";

import { ReactComponent as React } from "../assets/icons/code-stuff/react.svg";
import { ReactComponent as TailwindCSS } from "../assets/icons/code-stuff/tailwindcss.svg";
import { ReactComponent as TypeWritterEffect } from "../assets/icons/aboutweb/typewritter.svg";

import { ReactComponent as Boxicons } from "../assets/icons/aboutweb/boxicons.svg";
import { ReactComponent as Icons8 } from "../assets/icons/aboutweb/icons8.svg";

import { ReactComponent as Illustrator } from "../assets/icons/aboutweb/illustrator.svg";

import { ReactComponent as Photoshop } from "../assets/icons/aboutweb/photoshop.svg";

import { ReactComponent as Netlify } from "../assets/icons/aboutweb/netlify.svg";


function AboutWebsite() {
    // Always scroll to top when visit page
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    // Add cursor effect
    useEffect(() => {
        new Typewriter("#cursor");
    }, [])

    return (
        <section className="select-none relative w-full min-h-screen py-28 px-7 md:px-16 lg:px-16 xl:px-52 flex flex-col justify-center">
            <div>
                <span className="text-xl lg:text-3xl text-exclusive-white bg-primary-color font-semibold p-1.5">About This Website</span>
                <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color w-60 lg:w-80"/>
            </div>
            <div className="mt-5 flex gap-2 flex-wrap">
                <article className="font-medium text-xl text-justify mt-2 bg-exclusive-white bg-opacity-80 p-2 md:before:content-['/*'] md:before:flex md:after:content-['*/'] md:after:flex">
                    This is my website that I created and developed myself. I have never thought about making my own website and publish it online, but 
                    this website is a product of my English project assignment in 12th grade in Senior High School. Simply, the assignment was making a goal
                    about doing something using S.M.A.R.T method, so, somehow I decided to make a website. And, this website is the third version of
                    my website.
                    <p>If you are curious about what technologies I use for making this website, here are the list.<p className="inline-block" id="cursor"/></p>
                </article>
                {/* Website builder modal */}
                <div className="flex flex-wrap gap-9 flex-grow p-3 bg-exclusive-white bg-opacity-80">
                    <div className="flex-auto grid content-start">
                        <span className="font-bold">Code Editor</span>
                        <div className="mt-3">
                            <li className="flex gap-3">
                                <VisualStudioCode/>
                                <Link to="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Visual Studio Code</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col content-start">
                        <span className="font-bold">Technologies</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <HTML/>
                                <Link to="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>HTML</span>
                                </Link>
                            </li>
                            <li className="flex gap-3">
                                <CSS/>
                                <Link to="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>CSS</span>
                                </Link>
                            </li>
                            <li className="flex gap-3">
                                <Javascript/>
                                <Link to="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Javascript</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col content-start">
                        <span className="font-bold">Frameworks</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <React/>
                                <Link to="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>React</span>
                                </Link>
                            </li>
                            <li className="flex gap-3">
                                <TailwindCSS/>
                                <Link to="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>TailwindCSS</span>
                                </Link>
                            </li>
                            <li className="flex gap-3">
                                <TypeWritterEffect/>
                                <Link to="https://www.npmjs.com/package/typewriter-effect" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Typewritter Effect</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col content-start">
                        <span className="font-bold">Icons</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <Boxicons/>
                                <Link to="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Boxicons</span>
                                </Link>
                            </li>
                            <li className="flex gap-3">
                                <Icons8/>
                                <Link to="https://icons8.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Icons8</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col content-start">
                        <span className="font-bold">SVG Editor</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <Illustrator/>
                                <Link to="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Adobe Illustrator</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col content-start">
                        <span className="font-bold">Photo Editor</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <Photoshop/>
                                <Link to="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Adobe Photoshop</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto  content-start">
                        <span className="font-bold">Web Hoster</span>
                        <div className="mt-3 grid gap-2">
                            <li className="flex gap-3">
                                <Netlify/>
                                <Link to="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <span>Netlify</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutWebsite;