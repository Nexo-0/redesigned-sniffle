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
  return (
    <div className="bg-base text-text">
      <Navbar />
      <main>
        <Hero />
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
