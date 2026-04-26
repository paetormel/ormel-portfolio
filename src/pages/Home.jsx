import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion as Motion } from "motion/react";
import Button from "../components/Button";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="mb-5 flex w-full justify-center px-4 py-18 md:py-25 sm:px-6 md:mb-20 md:min-h-screen md:items-center lg:px-10"
    >
      <div className="flex w-full max-w-2xl md:max-w-4xl  flex-col items-center justify-center text-center text-white">
        <h1 className="mb-3 md:mb-10 overflow-hidden text-center font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:text-[11rem]">
          <span className="block overflow-hidden px-2 pb-2">
            <Motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
            >
              FRONTEND
            </Motion.span>
          </span>

          <span className="block overflow-hidden px-2 pb-2">
            <Motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
            >
              DEVELOPER
            </Motion.span>
          </span>
        </h1>

        <p className="mb-10  overflow-hidden text-sm md:text-lg font-google-sans text-gray-700">
          <Motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true }}
          >
            I&apos;m a React Developer passionate about building fast, modern
            web apps. I enjoy learning new tools, writing clean code, and
            creating intuitive user interfaces with React, Tailwind, and APIs
          </Motion.span>
        </p>

        <div className="flex w-full justify-center items-center flex-col gap-3 md:flex-row">
          <Button btnName="Contact Me" url="#contact" variant="blue" />

          {/* <a
            href="/resume.pdf"
            className="group inline-flex md:w-35 w-full items-center justify-center gap-2 rounded-full border border-white px-10 py-2 text-center font-google-sans text-lg text-white shadow-xl transition-colors duration-200 hover:bg-white/10 hover:backdrop-blur-2xl"
          >
            Resume
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;

