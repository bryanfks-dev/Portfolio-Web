// Icons
import { Link } from "react-router-dom";
import { ReactComponent as Email } from "../assets/icons/socialMedia/email.svg";

function EmailMe(props) {
    return (
        <section className="select-none relative bg-primary-select-item min-w-full mt-32">
            <div className="flex flex-col items-center px-16 lg:px-16 xl:px-52 py-10">
                <div>
                    <span className="text-lg lg:text-2xl text-exclusive-white bg-primary-color font-semibold p-1.5">Email Me!</span>
                    <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color"/>
                </div>
                <div className="mt-12 flex gap-3 md:gap-8 flex-wrap justify-center">
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&to=bryanfernandoks11@gmail.com&tf=cm&su=About Your Website" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Email className="h-auto w-9"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EmailMe;