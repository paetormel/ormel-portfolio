import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import SkillCard from "./SkillCard";

const SPEED = 80; // pixels per second

const MarqueeRow = ({ skills, title, direction = "left" }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loopDistance, setLoopDistance] = useState(0);

  const displaySkills = [...skills, ...skills];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      setLoopDistance(totalWidth / 2);
      x.set(direction === "left" ? 0 : -(totalWidth / 2));
    };

    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [skills, direction, x]);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isHovered || !loopDistance) return;

    const distance = (SPEED * delta) / 1000;
    const current = x.get();

    if (direction === "left") {
      let next = current - distance;

      if (next <= -loopDistance) {
        next += loopDistance;
      }

      x.set(next);
    } else {
      let next = current + distance;

      if (next >= 0) {
        next -= loopDistance;
      }

      x.set(next);
    }
  });

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
        ref={containerRef}
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
          ref={trackRef}
          className="flex w-max gap-2 md:gap-12"
          style={{ x: shouldReduceMotion ? 0 : x }}
        >
          {displaySkills.map((skill, index) => {
            const isDuplicate = index >= skills.length;

            return (
              <div
                key={`${skill.title}-${index}`}
                className="group relative shrink-0 px-2 transition-transform duration-500 hover:scale-105 md:px-4 md:hover:scale-110"
                aria-hidden={isDuplicate}
              >
                <div
                  className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <SkillCard img={skill.img} title={skill.title} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeRow;