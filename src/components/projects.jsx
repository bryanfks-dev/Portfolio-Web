import ToDoApp from "../assets/img/projects/todoapp.png";

function Card(props) {
    // Project card component
    return (
        <div className="flex flex-col gap-2 items-center max-w-sm">
            <a href={props.picHref} className="overflow-hidden" target="_blank" rel="noopener noreferrer">
                <img src={props.picLink} loading="lazy" className="transition-[400ms] hover:scale-110"/>
            </a>
            <b className="w-full text-center">{props.content}</b>
        </div>
    );
}

function Projects() {
    return (
        <section className="select-none relative w-full px-7 md:px-16 lg:px-16 xl:px-52 py-28 mt-32 flex flex-col justify-center" id="projects">
            <div>
                <span className="text-xl lg:text-3xl text-exclusive-white bg-primary-color font-semibold p-1.5">Projects</span>
                <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color w-28 lg:w-40"/>
            </div>
            <div className="mt-5 flex flex-col gap-3 flex-wrap justify-center shadow">
                <div className="flex-[1] p-2 bg-exclusive-white bg-opacity-80">
                    <Card picHref="https://github.com/bryanfks-dev/MidProject-BackendDevelopment-2022" picLink={ToDoApp} content="To do list app"/>
                </div>
            </div>
        </section>
    );
}

export default Projects;