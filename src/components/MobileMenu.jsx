import { X } from "lucide-react";
import React from "react";
import { motion as Motion } from "motion/react";
import { links } from "../pages/constant/data";

const MobileMenu = ({ setIsMenuOpen }) => {
  const handleClose = () => setIsMenuOpen(false);

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      <button
        type="button"
        aria-label="Close menu overlay"
        className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <Motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-black-primary/95 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-google-sans text-sm font-bold tracking-widest">
            ORMEL
          </span>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="mt-16 flex flex-1 flex-col gap-2">
          {links.map((link, index) => (
            <Motion.li
              key={link.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
            >
              <a
                href={`#${link.id}`}
                onClick={handleClose}
                className="block rounded-xl px-4 py-3 font-google-sans text-2xl font-bold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </Motion.li>
          ))}
        </ul>

        <div className="flex gap-4 border-t border-white/10 pt-6">
          <a
            href="https://github.com/paetormel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/Ormelpaet08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Facebook
          </a>
        </div>
      </Motion.nav>
    </Motion.div>
  );
};

export default MobileMenu;
