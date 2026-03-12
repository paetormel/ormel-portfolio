import React from "react";
import Button from "../components/Button";
import { motion } from "motion/react";
import { ArrowBigRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto mb-20 flex min-h-screen max-w-[1440px] flex-col items-center gap-5 py-20 text-white"
    >
      <div className="overflow-hidden  mb-20 font-google-sanx text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.8]">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="inline-block pb-2"
        >
          ABOUT ME
        </motion.h1>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-10">
        <div className="flex w-[40%] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-85 w-85 flex items-center justify-center rounded-3xl bg-black-secondary/80 p-2 shadow-2xl duration-200 hover:-rotate-5"
          >
            <img
              className="h-full w-full rounded-2xl object-cover"
              src="about-image.jpg"
              alt="Portrait of Ormel"
            />
          </motion.div>
        </div>

        <div className="flex w-[60%] flex-col justify-center font-google-sans">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <p className="text-lg text-gray-300">
                Hi! I’m <span className="font-bold">Ormel</span>, a front-end
                developer who enjoys building clean and interactive web
                experiences. I love cloning websites to improve my design sense
                and sharpen my coding skills. Right now, I’m also studying{" "}
                <span className="font-bold">backend development</span> to become
                a more well-rounded developer and understand how full web
                applications work from front to back.
              </p>
            </motion.h1>
          </div>

          <div className="mt-10">
            <button className="group inline-flex items-center  border-inset-2 border-white  transition-colors duration-200 gap-2 rounded-full border px-10 py-2 text-lg font-google-sans shadow-xl cursor-pointer text-white hover:backdrop-blur-2xl hover:bg-white/10">
              View my work
              <ArrowBigRight className="group-hover:translate-x-2 transition-transform duration-200"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
