import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const MarqueeRow = ({ skills, title, direction = "left" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const displaySkills = [...skills, ...skills];

  return (
    <div
      className="py-4 md:py-10"
      role="group"
      aria-label={`${title} skills carousel`}
    >
      <div className="mb-4 flex items-center gap-3 px-4 md:mb-8 md:gap-4 md:px-6">
        <span
          className="h-px w-8 bg-linear-to-r from-blue-500 to-transparent md:w-12"
          aria-hidden="true"
        />
        <h3 className="font-google-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 md:text-xs md:tracking-[0.4em]">
          {title}
        </h3>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max gap-2 md:gap-12"
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {displaySkills.map((skill, index) => (
            <div
              key={`${skill.title}-${index}`}
              className="group relative shrink-0 px-2 transition-transform duration-500 hover:scale-105 md:px-4 md:hover:scale-110"
            >
              <div
                className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <SkillCard img={skill.img} title={skill.title} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeRow;