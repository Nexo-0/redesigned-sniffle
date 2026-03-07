import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Instructor from "../components/Instructor";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "sun" : "dark"));
  };

  return (
    <div className={`theme-${theme} min-h-screen bg-base text-text transition-colors duration-300`}>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <Hero theme={theme} />
        <Technologies />
        <Courses />
        <Reviews />
        <About />
        <Instructor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
