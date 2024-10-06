import DesktopNavbar from "./components/desktopNavbar";
import IntroSection from "./home/intro";

export default function Home() {
  return (
    <>
      <DesktopNavbar />
      <main className="min-h-dvh w-full bg-primary">
        <IntroSection />
      </main>
    </>
  );
}
