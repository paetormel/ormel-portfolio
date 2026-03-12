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
      className="pt-10 flex min-h-screen w-full mb-20 items-center justify-center bg-cover bg-center bg-no-repeat px-20"
    >
      <div className=" text-center text-white flex flex-col  justify-center items-center">

        <h1 className="text-center overflow-hidden  mb-10  font-google-sanx text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.8]">
          <div className="overflow-hidden pb-2 px-2">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
            >
              FRONTEND
            </motion.span>
          </div>

          <div className="overflow-hidden pb-2 px-2">
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
          </div>
        </h1>

        <p className="overflow-hidden mb-10 font-google-sans text-gray-500">
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
            web apps. I enjoy learning  new tools, writing  <br />{" "} clean code, and
            creating intuitive user interfaces with React, Tailwind, and APIs.
          </motion.span>
        </p>

        <div className="flex gap-3">
          <Button btnName="Contact Me" url="#contact" variant="blue" />
          <button className="group inline-flex items-center  border-inset-2 border-white  transition-colors duration-200 gap-2 rounded-full border px-10 py-2 text-lg font-google-sans shadow-xl cursor-pointer text-white hover:backdrop-blur-2xl hover:bg-white/10">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
