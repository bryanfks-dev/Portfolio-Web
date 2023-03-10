// Icons
import { Link } from "react-router-dom";
import { ReactComponent as Email } from "../assets/icons/socialMedia/email.svg";
import { ReactComponent as Facebook } from "../assets/icons/socialMedia/facebook.svg";
import { ReactComponent as Github } from "../assets/icons/socialMedia/github.svg";
import { ReactComponent as Instagram } from "../assets/icons/socialMedia/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/socialMedia/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/icons/socialMedia/twitter.svg";

function Contact() {
    return (
        <section className="select-none relative bg-primary-select-item min-w-full mt-32" id="contact">
            <div className="flex flex-col items-center px-16 lg:px-16 xl:px-52 py-10">
                <div>
                    <span className="text-lg lg:text-2xl text-exclusive-white bg-primary-color font-semibold p-1.5">Get In Touch With Me!</span>
                    <hr className="mt-2.5 lg:mt-3 border-[3px] lg:border-[3.5px] border-tertiary-color"/>
                </div>
                <div className="mt-12 flex gap-3 md:gap-8 flex-wrap justify-center">
                    <Link to="https://www.facebook.com/BryanFernandoKS/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Facebook className="h-auto w-9"/>
                    </Link>
                    <Link to="https://twitter.com/bryfks_" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Twitter className="h-auto w-9"/>
                    </Link>
                    <Link to="https://www.instagram.com/bry.fernando/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Instagram className="h-auto w-9"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/bryan-fernando-2394bb21b/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <LinkedIn className="h-auto w-9"/>
                    </Link>
                    <Link to="https://github.com/bryanfks-dev" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Github className="h-auto w-9"/>
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&amp;to=bryanfernandoks11@gmail.com&amp;tf=cm&" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-exclusive-white hover:bg-primary-selected-item bg-opacity-80">
                        <Email className="h-auto w-9"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Contact;