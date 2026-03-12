import React from "react";
import { motion } from "motion/react";
import { ArrowBigRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto mb-10 md:mb-20 flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mb-16 overflow-hidden font-google-sans text-6xl font-black leading-[0.8] tracking-tighter md:mb-20 md:text-[11rem]">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="inline-block pb-2"
        >
          ABOUT ME
        </motion.h2>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex w-full justify-center lg:w-2/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex h-72 w-72 items-center justify-center rounded-3xl bg-black-secondary/80 p-2 shadow-2xl duration-200 hover:-rotate-5 sm:h-80 sm:w-80"
          >
            <img
              className="h-full w-full rounded-2xl object-cover"
              src="about-image.jpg"
              alt="Portrait of Ormel"
            />
          </motion.div>
        </div>

        <div className="flex w-full flex-col justify-center font-google-sans lg:w-3/5">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
              className="inline-block text-lg text-gray-300"
            >
              Hi! I’m <span className="font-bold">Ormel</span>, a front-end
              developer who enjoys building clean and interactive web
              experiences. I love cloning websites to improve my design sense
              and sharpen my coding skills. Right now, I’m also studying{" "}
              <span className="font-bold">backend development</span> to become a
              more well-rounded developer and understand how full web
              applications work from front to back.
            </motion.p>
          </div>

          <div className="mt-10">
            <a
              href="#work"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-10 py-2 font-google-sans text-lg text-white shadow-xl transition-colors duration-200 hover:bg-white/10 hover:backdrop-blur-2xl"
            >
              View my work
              <ArrowBigRight className="transition-transform duration-200 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;