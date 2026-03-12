import { X } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import Footer from "./Footer";

const MobileMenu = ({ setIsMenuOpen }) => {
  const handleClose = () => setIsMenuOpen(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-0 box-border flex flex-col overflow-hidden bg-black p-5 text-white "
    >
      <div className="flex justify-between">
        <h2 className="font-semibold uppercase">Ormel</h2>

        <button type="button" onClick={handleClose} aria-label="Close menu">
          <X />
        </button>
      </div>

      <hr className="mt-3 h-px bg-white" />

      <div className="flex flex-1 items-center justify-center">
        <ul className="flex flex-col gap-6 text-center text-4xl">
          <li>
            <a href="#home" onClick={handleClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClose}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleClose}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClose}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </motion.div>
  );
};

export default MobileMenu;