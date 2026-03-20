import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { div } from "motion/react-client";
import MobileMenu from "./MobileMenu";
import { links } from "../pages/constant/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: " easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 mx-5 mt-2  text-white"
    >
      <nav className="font-google-sans mx-auto z-20 flex max-w-[800px] items-center justify-between backdrop-blur-2xl rounded-full px-5 md:px-10 py-3 border border-gray-400/10 bg-white/10 ">
        <p className="text-sm md:text-lg text-white">
          <a href="#home">ORMEL</a>
        </p>

        <ul className="hidden gap-8 rounded-full px-15 py-2 text-[14px] lg:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className="group relative cursor-pointer text-white transition-colors duration-300"
            >
              <a href={`#${link.id}`} className="inline-block">
                {link.label}
              </a>

              <span className="absolute left-0 -bottom-1 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:origin-left group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-5">
          <a href="https://github.com/paetormel">
            <FaGithub className="cursor-pointer  w-5 h-5 md:w-6 md:h-6 hover:text-blue/80 duration-100 transition-colors" />
          </a>
          <a href="https://www.facebook.com/Ormelpaet08/">
            <FaFacebook className="cursor-pointer w-5 h-5 md:w-6 md:h-6 hover:text-blue/80 duration-300 transition-colors" />
          </a>
          <div
            className="ml-2 block lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
