import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ btnName, url, variant = "primary" }) => {
  const variants = {
    primary:
      "border-white/20 bg-white text-black hover:bg-transparent hover:text-white",
    blue: "border-blue bg-blue text-white hover:bg-blue/80 hover:border-blue/80",
    outline:
      "border-white/30 bg-transparent text-white hover:bg-white/10",
  };

  return (
    <a
      href={url}
      className={`group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 text-center font-google-sans text-base font-bold shadow-lg transition-all duration-300 ease-out hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-auto sm:min-w-[11rem] ${variants[variant] ?? variants.primary}`}
    >
      <span>{btnName}</span>
      <FiArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
};

export default Button;
