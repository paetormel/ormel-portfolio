import React from "react";
import Button from "../components/Button";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center gap-5 px-20 pb-20"
    >
      <div className="text-white text-center overflow-hidden  mb-20 font-google-sanx text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.8]">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="inline-block pb-2"
        >
          CONTACT <br /> ME
        </motion.h1>
      </div>

      <div className="relative flex items-center justify-center">
        <form className="flex w-[700px] flex-col rounded-2xl border border-white/20 bg-white/5 p-10 text-white backdrop-blur-2xl">
          <div className="mb-5 flex gap-5">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="firstName" className="mb-3">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white"
              />
            </div>

            <div className="flex w-1/2 flex-col">
              <label htmlFor="lastName" className="mb-3">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="mb-3">
              Email (optional)
            </label>
            <input
              id="email"
              type="email"
              className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white"
            />
          </div>

          <div className="mb-10 flex flex-col">
            <label htmlFor="message" className="mb-3">
              Message (Required)
            </label>
            <textarea
              id="message"
              className="h-60 resize-none border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white"
            />
          </div>

          <button className="group inline-flex items-center justify-center bg-white gap-2 rounded-full border border-white px-10 py-2 text-lg font-google-sans text-black shadow-xl transition-colors duration-200 hover:bg-transparent hover:text-white cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
