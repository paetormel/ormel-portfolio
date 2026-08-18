import React from "react";
import { motion as Motion } from "motion/react";
import { SKILL_GROUPS } from "./constant/data";
import { useMotionConfig } from "../utils/motion";

const Skills = () => {
  const { fadeUp, fadeIn } = useMotionConfig();
  let skillIndex = 0;

  return (
    <section
      id="skills"
      className="scroll-mt-24 relative flex flex-col items-center overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-10"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[120px] md:h-[600px] md:w-[600px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mb-12 text-center md:mb-16">
        <Motion.span
          {...fadeIn(0)}
          className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-blue"
        >
          Capabilities
        </Motion.span>

        <Motion.h2
          id="skills-heading"
          {...fadeUp(0.1)}
          className="section-heading pb-1 uppercase"
        >
          Expertise
        </Motion.h2>
        <span className="section-divider" />

        <Motion.p
          {...fadeUp(0.15)}
          className="mx-auto mt-6 max-w-lg font-google-sans text-sm text-white/50 sm:text-base"
        >
          Technologies I use in shipped projects — grouped by area, not ranked
          by percentage.
        </Motion.p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 font-google-sans text-xs font-bold uppercase tracking-[0.35em] text-white/40">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              {group.skills.map((skill) => {
                const delay = skillIndex++ * 0.04;
                return (
                  <Motion.div
                    key={skill.title}
                    {...fadeIn(delay)}
                    whileHover={{ y: -4 }}
                    className="group glass-card flex flex-col items-center justify-center p-5 transition-colors duration-300 hover:border-blue/40 hover:bg-white/[0.08] sm:p-6 md:p-8"
                  >
                    <div className="relative mb-3 flex h-14 w-14 items-center justify-center sm:mb-4 sm:h-16 sm:w-16">
                      <div className="absolute inset-0 rounded-full bg-blue/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <img
                        src={skill.img}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="relative z-10 h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                      />
                    </div>
                    <h4 className="text-center text-xs font-bold tracking-wider text-white/50 transition-colors duration-300 group-hover:text-white sm:text-sm">
                      {skill.title}
                    </h4>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
