import { useEffect } from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Footer from "../components/Footer";

const stars = Array.from({ length: 80 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.85 ? 3 : Math.random() > 0.6 ? 2 : 1.5,
  delay: `${Math.random() * 4}s`,
  duration: `${3 + Math.random() * 4}s`,
  driftDuration: `${10 + Math.random() * 6}s`,
}));

const RootLayout = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black-primary">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[8%] top-[10%] h-48 w-48 rounded-full bg-blue/20 blur-[100px] md:h-72 md:w-72" />
        <div className="absolute right-[5%] top-[25%] h-56 w-56 rounded-full bg-purple-500/15 blur-[100px] md:h-80 md:w-80" />
        <div className="absolute bottom-[15%] left-[30%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px] md:h-96 md:w-96" />
        {stars.map((star) => (
          <span
            key={star.id}
            className="star absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              "--star-duration": star.duration,
              "--star-drift-duration": star.driftDuration,
              background:
                star.id % 6 === 0
                  ? "rgba(147, 197, 253, 0.8)"
                  : "rgba(255, 255, 255, 0.7)",
              boxShadow:
                star.id % 6 === 0
                  ? "0 0 6px rgba(96,165,250,0.6)"
                  : "0 0 4px rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
