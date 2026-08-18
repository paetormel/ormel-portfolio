import React from "react";
import { motion as Motion } from "motion/react";
import Button from "../components/Button";
import { useMotionConfig } from "../utils/motion";

const Home = () => {
  const { fadeUp } = useMotionConfig();

  return (
    <section
      id="home"
      className="scroll-mt-24 flex min-h-screen w-full items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <Motion.p
          {...fadeUp(0)}
          className="mb-4 font-google-sans text-[10px] font-bold uppercase tracking-[0.45em] text-blue sm:text-xs"
        >
          Fresh Graduate · Frontend Developer
        </Motion.p>

        <h1 className="section-heading mb-6 overflow-hidden md:mb-8">
          <span className="block overflow-hidden pb-1">
            <Motion.span className="inline-block" {...fadeUp(0.05)}>
              FRONTEND
            </Motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <Motion.span className="inline-block" {...fadeUp(0.12)}>
              DEVELOPER
            </Motion.span>
          </span>
        </h1>

        <Motion.p
          {...fadeUp(0.2)}
          className="mb-10 max-w-xl font-google-sans text-sm leading-relaxed text-white/60 sm:text-base md:mb-12 md:text-lg"
        >
          I build web applications that turn product and operational
          requirements into usable software — from student portals and
          productivity tools to marketing pages.
        </Motion.p>

        <Motion.div
          {...fadeUp(0.28)}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button btnName="View Projects" url="#projects" variant="primary" />
          <Button btnName="Contact" url="#contact" variant="outline" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Home;
