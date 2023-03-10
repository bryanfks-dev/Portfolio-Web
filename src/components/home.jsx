// Frameworks
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

// Image
import Profile from "../assets/img/profile_home.png";

function Home() {
    useEffect(() => {
        new Typewriter("#context", {
            strings: ["Web Developer.", "Full Stack Developer.", "Programmer."],
            autoStart: true,
            loop: true
        });
    }, []);

    return (
        <section className="select-none relative w-auto min-h-screen px-5 md:px-16 lg:px-16 xl:px-52 grid items-center" id='home'>
            <div className="flex flex-row gap-6 xl:gap-8 md:pr-4 p-2 shadow-xl bg-exclusive-white bg-opacity-20">
                <div className="w-4 lg:w-4.5 h-64 bg-primary-color bg-opacity-100"/>
                <div className="flex flex-col flex-wrap justify-center max-w-full">
                    <span className="text-[1.5em] lg:text-3xl font-medium py-2 flex flex-row text-exclusive-white">
                        <p className="bg-primary-color px-1 text-exclusive-white">
                            Hello!
                        </p>
                        &nbsp;I'm
                    </span>
                    <span className="text-3xl lg:text-5xl text-primary-color font-bold pt-2 pb-1">Bryan Fernando</span>
                    <span className="text-3xl lg:text-5xl text-exclusive-white font-bold pb-2 pt-1">Kurniawan Suhartono</span>
                    <span className="text-xl lg:text-2xl text-primary-color font-medium py-2 flex flex-row">
                        I'm a&nbsp;
                        <p className='text-exclusive-white' id='context'/>
                    </span>
                </div>
            </div>
            <img src={Profile} alt="profile" className="w-52 lg:w-64 xl:w-72 hidden md:block" loading='lazy'/>
        </section>
    );
}

export default Home;