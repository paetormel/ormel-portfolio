import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "motion/react";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message before submitting.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Add your EmailJS keys to the .env file.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const fullName = [formData.firstName, formData.lastName]
      .map((part) => part.trim())
      .filter(Boolean)
      .join(" ");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fullName || "Portfolio visitor",
          reply_to: formData.email.trim() || "No reply email provided",
          message: formData.message.trim(),
        },
        { publicKey },
      );

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again in a moment.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-20 pb-16 sm:px-6 lg:px-10 lg:pb-20"
      aria-labelledby="contact-heading"
    >
      <div className="mb-16 overflow-hidden text-center text-white font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:mb-20 md:text-[11rem]">
        <Motion.h2
          id="contact-heading"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="inline-block pb-2"
        >
          CONTACT <br /> ME
        </Motion.h2>
        <span className="mx-auto mt-10 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent"></span>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
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
                value={formData.firstName}
                onChange={handleChange}
                disabled={status === "sending"}
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white disabled:opacity-60"
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
                value={formData.lastName}
                onChange={handleChange}
                disabled={status === "sending"}
                className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white disabled:opacity-60"
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
              value={formData.email}
              onChange={handleChange}
              disabled={status === "sending"}
              className="border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white disabled:opacity-60"
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
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              className="h-60 resize-none border-b border-white/40 bg-transparent pb-2 text-white outline-none transition duration-300 focus:border-white focus-visible:border-white disabled:opacity-60"
            />
          </div>

          {status === "success" && (
            <p
              role="status"
              className="mb-5 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
            >
              Message sent successfully. I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="mb-5 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-white px-10 py-2 font-google-sans text-lg text-black shadow-xl transition-colors duration-200 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
