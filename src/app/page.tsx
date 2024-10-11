import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutMeSection from "./home/aboutMe";
import ContactSection from "./home/contact";
import IntroSection from "./home/intro";
import ProjectsSection from "./home/projects";
import SkillsSection from "./home/skills";
import StatsSection from "./home/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh w-full">
        <IntroSection />
        <AboutMeSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
