import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "motion/react";
import { FiSend } from "react-icons/fi";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full border-b border-white/20 bg-transparent pb-2.5 text-white outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-white disabled:cursor-not-allowed disabled:opacity-50";

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
      className="scroll-mt-24 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 sm:px-6 md:py-28 lg:px-10"
      aria-labelledby="contact-heading"
    >
      <div className="mb-12 w-full text-center md:mb-16">
        <Motion.h2
          id="contact-heading"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="section-heading pb-1"
        >
          CONTACT <span className="block sm:inline">ME</span>
        </Motion.h2>
        <span className="section-divider" />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="glass-card flex w-full flex-col p-6 sm:p-8 lg:p-10"
          noValidate
        >
          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <div className="flex w-full flex-col md:w-1/2">
              <label htmlFor="firstName" className="mb-2 text-sm text-white/70">
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
                className={inputClass}
              />
            </div>

            <div className="flex w-full flex-col md:w-1/2">
              <label htmlFor="lastName" className="mb-2 text-sm text-white/70">
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
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm text-white/70">
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
              className={inputClass}
            />
          </div>

          <div className="mb-8 flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm text-white/70">
              Message (Required)
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              className={`${inputClass} min-h-[9rem] resize-y`}
            />
          </div>

          {status === "success" && (
            <p
              role="status"
              className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
            >
              Message sent successfully. I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-white px-8 py-3 font-google-sans text-base font-bold text-black shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:self-start"
          >
            {status === "sending" ? "Sending..." : "Submit"}
            <FiSend
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </form>
      </Motion.div>
    </section>
  );
};

export default Contact;
