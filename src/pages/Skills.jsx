import React from "react";
import { motion } from "framer-motion";
import MarqueeRow from "../components/MarqueeRow";

const FRONTEND_SKILLS = [
  { img: "html5", title: "HTML5" },
  { img: "css3", title: "CSS3" },
  { img: "java-script", title: "JavaScript" },
  { img: "react", title: "React.js" },
  { img: "tailwind-css", title: "Tailwind CSS" },
];

const OTHER_SKILLS = [
  { img: "git", title: "Git" },
  { img: "github", title: "GitHub" },
  { img: "figma", title: "Figma" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden px-4 py-20 sm:px-6 md:py-24 lg:px-10 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[140px] md:h-[650px] md:w-[650px] lg:h-[800px] lg:w-[800px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mb-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 block text-[10px] font-bold uppercase tracking-[0.6em] text-blue-500"
        >
          Capabilities
        </motion.span>

        <div className="mb-16 overflow-hidden px-4 font-google-sans text-6xl font-black leading-[0.8] tracking-tighter md:mb-20 md:text-[11rem]">
          <motion.h2
            id="skills-heading"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="pb-2 uppercase text-white"
          >
            Expertise
          </motion.h2>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <MarqueeRow
          skills={FRONTEND_SKILLS}
          title="Core Tech"
          direction="left"
        />
        <MarqueeRow
          skills={OTHER_SKILLS}
          title="Environment"
          direction="right"
        />
      </div>
    </section>
  );
};

export default Skills;