import DesktopNavbar from "./components/desktop-navbar";
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
