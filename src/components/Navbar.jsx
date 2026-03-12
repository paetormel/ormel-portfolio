import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
  const links = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: " easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 mx-5 mt-2  text-white"
    >
      <nav className="font-google-sans mx-auto z-20 flex max-w-[800px] items-center justify-between backdrop-blur-2xl rounded-full px-10 py-2 border border-gray-400/10 bg-white/10 ">
        <p className="text-lg text-white">
          <a href="#home">ORMEL</a>
        </p>

        <ul className="hidden gap-8 rounded-full px-15 py-2 text-[14px] md:flex">
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

        <div className="flex gap-5">
          <a href="https://github.com/paetormel">
            <FaGithub
              size={25}
              className="cursor-pointer hover:text-blue/80 duration-100 transition-colors"
            />
          </a>
          <a href="https://www.facebook.com/Ormelpaet08/">
            <FaFacebook
              size={25}
              className="cursor-pointer hover:text-blue/80 duration-300 transition-colors"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
