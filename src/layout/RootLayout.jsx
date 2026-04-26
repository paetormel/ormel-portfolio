import { useEffect } from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
// import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer";

const stars = Array.from({ length: 120 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.85 ? 4 : Math.random() > 0.6 ? 3 : 2,
  delay: `${Math.random() * 4}s`,
  duration: `${3 + Math.random() * 4}s`,
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
        window.location.pathname + window.location.search
      );
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      {/* Background Layer (Stars & Glow) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[12%] h-40 w-40 md:h-72 md:w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute right-[8%] top-[30%] h-48 w-48 md:h-80 md:w-80 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-[10%] left-[35%] h-56 w-56 md:h-96 md:w-96 rounded-full bg-cyan-400/30 blur-3xl" />
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
              animationDuration: star.duration,
              background:
                star.id % 6 === 0
                  ? "rgba(147, 197, 253, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
              boxShadow:
                star.id % 6 === 0
                  ? "0 0 10px rgba(96,165,250,0.95), 0 0 20px rgba(96,165,250,0.65)"
                  : "0 0 8px rgba(255,255,255,0.95), 0 0 18px rgba(255,255,255,0.65)",
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> 
      </div>

      {/* Floating Chatbot Layer */}
      {/* <ChatBot /> */}
    </div>
  );
};

export default RootLayout;
