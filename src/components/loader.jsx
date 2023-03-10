// Loader
import { ReactComponent as LoaderSVG } from "../assets/icons/loader.svg";

function Loader() {
    return (
        <section className="select-none relative w-full min-h-screen px-16 lg:px-16 xl:px-52 grid justify-center" id="loader">
            <LoaderSVG/>
        </section>
    );
}

export default Loader;