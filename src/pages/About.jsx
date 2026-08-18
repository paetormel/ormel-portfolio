import React from "react";
import { motion as Motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useMotionConfig } from "../utils/motion";

const About = () => {
  const { fadeUp, fadeIn } = useMotionConfig();

  return (
    <section
      id="about"
      className="scroll-mt-24 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mb-12 w-full text-center md:mb-16">
        <Motion.h2
          {...fadeUp(0.1)}
          className="section-heading inline-block pb-1"
        >
          ABOUT ME
        </Motion.h2>
        <span className="section-divider" />
      </div>

      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        <Motion.div
          {...fadeIn(0)}
          className="flex w-full justify-center lg:w-2/5"
        >
          <div className="group relative flex h-64 w-64 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl transition-transform duration-500 hover:-rotate-2 sm:h-72 sm:w-72">
            <img
              src="profile.png"
              alt="Portrait of Ormel"
              loading="lazy"
              decoding="async"
              width={288}
              height={288}
              className="relative z-0 h-full w-full rounded-2xl object-cover"
            />
            <img
              src="about-image.jpg"
              alt="Ormel at work"
              loading="lazy"
              decoding="async"
              width={288}
              height={288}
              className="absolute inset-2 z-10 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-2xl object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Motion.div>

        <div className="flex w-full flex-col justify-center gap-5 font-google-sans lg:w-3/5">
          <Motion.p
            {...fadeUp(0.1)}
            className="text-center text-sm leading-relaxed text-white/65 sm:text-base md:text-left md:text-lg"
          >
            I&apos;m <span className="font-bold text-white">Ormel</span>, a
            junior frontend developer focused on building software for real
            workflows — not just listing technologies.
          </Motion.p>

          <Motion.p
            {...fadeUp(0.15)}
            className="text-center text-sm leading-relaxed text-white/55 sm:text-base md:text-left"
          >
            I work from requirements to implementation: structuring UI,
            managing application state, and connecting frontends to APIs. My
            projects include student portals, productivity tools, and product
            landing pages.
          </Motion.p>

          <Motion.p
            {...fadeUp(0.2)}
            className="text-center text-sm leading-relaxed text-white/55 sm:text-base md:text-left"
          >
            Right now I&apos;m strengthening my backend skills — database
            design, API integration, and server-side logic — so I can understand
            how full applications work end to end.
          </Motion.p>

          <Motion.div
            {...fadeUp(0.25)}
            className="mt-3 flex justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3 font-google-sans text-sm font-bold text-black shadow-lg transition-all duration-300 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              See project evidence
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
