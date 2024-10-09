import DesktopNavbar from "./components/desktopNavbar";
import MobileNavbar from "./components/mobileNavbar";
import AboutMeSection from "./home/aboutMe";
import IntroSection from "./home/intro";
import StatsSection from "./home/stats";

export default function Home() {
  return (
    <>
      {/* <MobileNavbar /> */}
      <main className="min-h-dvh w-full">
        <IntroSection />
        <AboutMeSection />
        <StatsSection />
      </main>
    </>
  );
}
