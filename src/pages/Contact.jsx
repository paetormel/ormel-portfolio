import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-20 pb-16 sm:px-6 lg:px-10 lg:pb-20"
      aria-labelledby="contact-heading"
    >
      <div className="mb-16 overflow-hidden text-center text-white font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:mb-20 md:text-[11rem]">
        <motion.h2
          id="contact-heading"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="inline-block pb-2"
        >
          CONTACT <br /> ME
        </motion.h2>
        <span className="mx-auto mt-10 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent"></span>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <form
          className="flex w-full max-w-2xl flex-col rounded-2xl border border-white/20 bg-white/5 p-6 text-white backdrop-blur-2xl sm:p-8 lg:p-10"
          noValidate
        >
          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <div className="flex w-full flex-col md:w-1/2">
              <label htmlFor="firstName" className="mb-3">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white"
              />
            </div>

            <div className="flex w-full flex-col md:w-1/2">
              <label htmlFor="lastName" className="mb-3">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="mb-3">
              Email (optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white"
            />
          </div>

          <div className="mb-10 flex flex-col">
            <label htmlFor="message" className="mb-3">
              Message (Required)
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="h-60 resize-none border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-white px-10 py-2 font-google-sans text-lg text-black shadow-xl transition-colors duration-200 hover:bg-transparent hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;