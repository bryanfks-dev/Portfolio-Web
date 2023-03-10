import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

import './App.css';

// Import components
import Loader from "./components/loader.jsx";
import NavigationBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

// Import main page
const Home = lazy(() => import("./components/home.jsx"));
const AboutMe = lazy(() => import("./components/about-me.jsx"));
const Skills = lazy(() => import("./components/skills.jsx"));
const Projects = lazy(() => import("./components/projects.jsx"));
const Achievements = lazy(() => import("./components/achievements.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));

// Import about web page
const AboutWeb = lazy(() => import("./components/about-web.jsx"));
const EmailMe = lazy(() => import("./components/email-me.jsx"));

// Import error page
const ErrorPage = lazy(() => import("./components/error.jsx"));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar home="/#home" 
                                aboutme="/#aboutme" 
                                skills="/#skills" 
                                projects="/#projects" 
                                achievements="/#achievements" 
                                contact="/#contact"  
                                aboutweb="/aboutWeb"/>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={
                            <section id="wrapper">
                                <Home/>
                                <Zoom duration={1700}>
                                    <AboutMe/>
                                    <Skills/>
                                    <Projects/>
                                    <Achievements/>
                                </Zoom>
                                <Contact/>
                            </section>
                        }/>
                        <Route path="/aboutWeb" element={
                            <section>
                                <Zoom duration={1700}>
                                    <AboutWeb/>
                                </Zoom>
                                <EmailMe/>
                            </section>
                        }/>
                        <Route path="*" element={<ErrorPage/>} />
                    </Routes>
                </Suspense>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
