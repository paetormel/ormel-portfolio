import React from "react";
import { motion } from "framer-motion";
import { ALL_SKILLS } from "./constant/data";

// Pinagsama ang skills at nilagyan ng CDN links para sa icons

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 md:py-24 lg:px-10 lg:py-28"
      aria-labelledby="skills-heading"
    >
      {/* Background Glow - No Changes */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[140px] md:h-[650px] md:w-[650px] lg:h-[800px] lg:w-[800px]"
        aria-hidden="true"
      />

      {/* Header Section - No Changes */}
      <div className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 block text-[10px] font-bold uppercase tracking-[0.6em] text-blue-500"
        >
          Capabilities
        </motion.span>

        <div className="overflow-hidden px-4 font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:mb-20 md:text-[11rem]">
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
          <span className="mx-auto mt-10 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent"></span>
        </div>
      </div>

      {/* Modern Grid Layout (4 Columns Desktop) */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {ALL_SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
                {/* Glow behind icon on hover */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="relative z-10 h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Skill Title */}
              <h3 className="text-sm font-bold tracking-widest text-white/60 group-hover:text-white">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;