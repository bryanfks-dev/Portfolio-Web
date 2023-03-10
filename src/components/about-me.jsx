import { useEffect } from "react";

// Image
import RemovedBackgroundProfile from "../assets/img/removed_bg_profile_aboutme.png";
import { ReactComponent as Profile } from "../assets/img/profile_aboutme.svg";

// Icons
import { ReactComponent as User } from "../assets/icons/aboutme/user.svg";
import { ReactComponent as University } from "../assets/icons/aboutme/university.svg";
import { ReactComponent as Book } from "../assets/icons/aboutme/book.svg";
import Typewriter from "typewriter-effect/dist/core";
import { useHref } from "react-router-dom";

function AboutMe() {
    // Set profile image
    useEffect(() => {
        const profile = document.querySelector("#profile image");

        profile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', RemovedBackgroundProfile);
    }, []);

    // Add cursor effect
    useEffect(() => {
        new Typewriter("#cursor");
    }, []);

    // My age
    const age = new Date().getFullYear() - 2004;

    return (
        <section className="select-none relative w-full px-7 md:px-16 lg:px-16 xl:px-52 py-28 mt-32 flex flex-col justify-center" id="aboutme">
            <div>
                <span className="text-xl lg:text-3xl text-exclusive-white bg-primary-color font-semibold p-1.5">About Me</span>
                <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color w-32 lg:w-44"/>
            </div>
            <div className="mt-5">
                <Profile className="lg:-ml-4 drop-shadow-lg" id="profile"/>
                <div className="flex flex-col justify-center flex-wrap">
                    <article className="font-medium text-xl text-justify mt-2 bg-exclusive-white bg-opacity-80 p-2 md:before:content-['/*'] md:before:flex md:after:content-['*/'] md:after:flex">
                    Hello! My name is <span className="text-primary-color font-bold">Bryan Fernando Kurniawan Suhartono</span>, 
                    for short you can call me <span className="underline decoration-primary-color">Bryan</span>. I am a {age} years old student who studied at 
                    Bina Nusantara (BINUS) University @Malang, Malang, Indonesia. I am majoring in Computer Science and have a strong passion for 
                    programming. Throughout my academic career, I have gained experience in programming. I am a hard-working individual who is always 
                    eager to take on new challenges and expand my knowledge. In my free time, I enjoy playing games with my friends. Sometimes, I also 
                    doing some coding projects for my satisfaction.<p className="inline-block" id="cursor"/>
                    </article>
                    <div className="mt-4 flex flex-col gap-4">
                        <li className="flex gap-4 items-center">
                            <i className="fill-tertiary-color"><User/></i>
                            <span className="select-text text-primary-color font-medium">
                                Bryan Fernando Kurniawan Suhartono 
                                <span className="select-none flex flex-col text-xs text-tertiary-color">- Bryan</span>
                            </span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fill-tertiary-color"><University/></i>
                            <span className="select-text text-primary-color font-medium">Bina Nusantara University @Malang, Malang, Indonesia</span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fill-tertiary-color"><Book/></i>
                            <span className="select-text text-primary-color font-medium">Computer Science</span>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;