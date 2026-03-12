import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const MarqueeRow = ({ skills, title, direction = "left" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const displaySkills = [...skills, ...skills];

  return (
    <div className="py-8 md:py-10" role="group" aria-label={`${title} skills carousel`}>
      {/* Label/Header for the Row */}
      <div className="mb-8 flex items-center gap-4 px-6">
        <span className="h-px w-12 bg-linear-to-r from-blue-500 to-transparent" aria-hidden="true" />
        <h3 className="font-google-sans text-xs font-bold uppercase tracking-[0.4em] text-white/30">
          {title}
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          className="flex w-max gap-12"
          animate={{ 
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Smoother speed for readability
              ease: "linear",
            }
          }}
          style={{ 
            // Using CSS play-state avoids Framer Motion re-calculations on hover
            animationPlayState: isHovered ? "paused" : "running" 
          }}
        >
          {displaySkills.map((skill, index) => (
            <div 
              key={`${skill.title}-${index}`} 
              className="group relative shrink-0 px-4 transition-transform duration-500 hover:scale-110"
            >
              {/* Decorative Glow - Hidden from Screen Readers */}
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