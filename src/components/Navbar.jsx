import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion as Motion } from "motion/react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { links } from "../pages/constant/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <Motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-2.5 font-google-sans backdrop-blur-xl md:px-8 md:py-3">
        <a
          href="#home"
          className="text-sm font-bold tracking-widest text-white transition-opacity hover:opacity-80 md:text-base"
        >
          ORMEL
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((link) => (
            <li key={link.id} className="group relative">
              <a
                href={`#${link.id}`}
                className="inline-block py-1 text-white/80 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="https://github.com/paetormel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/Ormelpaet08/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <FaFacebook className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Navbar;
