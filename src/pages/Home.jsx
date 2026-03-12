import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";
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
      className="mb-20 flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pt-10 sm:px-6 lg:px-10"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center text-center text-white">
        <h1 className="mb-10 overflow-hidden text-center font-google-sans text-6xl font-black leading-[0.8] tracking-tighter md:text-[11rem]">
          <span className="block overflow-hidden px-2 pb-2">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
            >
              FRONTEND
            </motion.span>
          </span>

          <span className="block overflow-hidden px-2 pb-2">
            <motion.span
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
            </motion.span>
          </span>
        </h1>

        <p className="mb-10 overflow-hidden font-google-sans text-gray-500">
          <motion.span
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
            creating intuitive user interfaces with React, Tailwind, and APIs.
          </motion.span>
        </p>

        <div className="flex gap-3">
          <Button btnName="Contact Me" url="#contact" variant="blue" />

          <a
            href="/resume.pdf"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-10 py-2 font-google-sans text-lg text-white shadow-xl transition-colors duration-200 hover:bg-white/10 hover:backdrop-blur-2xl"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;