// Icons
import { ReactComponent as CreativeThinker } from "../assets/icons/skills/creative-think.svg";
import { ReactComponent as ProblemSolver } from "../assets/icons/skills/problem-solver.svg";
import { ReactComponent as FrontendDevelopment } from "../assets/icons/skills/frontend-dev.svg";
import { ReactComponent as BackendDevelopment } from "../assets/icons/skills/backend-dev.svg";
import { ReactComponent as UIUXDesign } from "../assets/icons/skills/uiux.svg";
import { ReactComponent as Code } from "../assets/icons/code-stuff/code.svg";

// Languages
import { ReactComponent as HTML } from "../assets/icons/code-stuff/html.svg";
import { ReactComponent as CSS } from "../assets/icons/code-stuff/css.svg";
import { ReactComponent as Javascript } from "../assets/icons/code-stuff/js.svg";
import { ReactComponent as JQuery } from "../assets/icons/code-stuff/jquery.svg";
import { ReactComponent as Tailwindcss } from "../assets/icons/code-stuff/tailwindcss.svg";
import { ReactComponent as React } from "../assets/icons/code-stuff/react.svg";
import { ReactComponent as NodeJs } from "../assets/icons/code-stuff/nodejs.svg";
import { ReactComponent as PHP } from "../assets/icons/code-stuff/php.svg";
import { ReactComponent as MySQL } from "../assets/icons/code-stuff/mysql.svg";
import { ReactComponent as C } from "../assets/icons/code-stuff/c.svg";
import { ReactComponent as CPlusPlus } from "../assets/icons/code-stuff/cpp.svg";
import { ReactComponent as Python } from "../assets/icons/code-stuff/python.svg";

function Skills() {
    return (
        <section className="select-none relative w-full px-7 md:px-16 lg:px-16 xl:px-52 py-28 mt-32 flex flex-col justify-center" id="skills">
            <div>
                <span className="text-xl lg:text-3xl text-exclusive-white bg-primary-color font-semibold p-1.5">Skills</span>
                <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color w-20 lg:w-28"/>
            </div>
            <div className="mt-5 flex flex-col gap-3 flex-wrap">
                {/* Soft skills */}
                <section className="flex-auto flex gap-3 flex-wrap">
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wra    p gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <CreativeThinker className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">Creative Thinking</span>
                        </div>
                    </div>
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wrap gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <ProblemSolver className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">Problem Solving</span>
                        </div>
                    </div>
                </section>
                {/* Hard skills */}
                <section className="flex-[1] flex gap-3 flex-wrap">
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wrap gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <FrontendDevelopment className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">Frontend Development</span>
                        </div>
                        <div className="flex gap-4 items-center justify-center flex-wrap">
                            <HTML/>
                            <CSS/>
                            <Javascript/>
                            <JQuery/>
                            <React/>
                            <Tailwindcss/>
                        </div>
                    </div>
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wrap gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <BackendDevelopment className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">Backend Development</span>
                        </div>
                        <div className="flex gap-4 items-center justify-center flex-wrap">
                            <PHP/>
                            <NodeJs/>
                            <MySQL/>
                        </div>
                    </div>
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wrap gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <UIUXDesign className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">UI/UX Design</span>
                        </div>
                    </div>
                </section>
                {/* Others */}
                <section className="flex-[1] flex flex-wrap">
                    <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80 flex flex-col flex-wrap gap-2 items-center justify-center shadow">
                        <div className="grid">
                            <Code className="fill-primary-color w-full h-16"/>
                            <span className="text-exclusive-black text-center font-bold text-xl">Others...</span>
                        </div>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <C/>
                            <CPlusPlus/>
                            <Python/>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Skills;