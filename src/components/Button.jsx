import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({ btnName, url, variant }) => {
  const variants = {
    primary: "bg-black-primary text-blue hover:bg-black-primary/80",
    blue: "hover:bg-black hover:border-white hover:text-white",
  };

  return (
    <a
      href={url}
      className={`w-full md:w-48 group mx-auto md:mx-0 inline-flex items-center justify-center gap-2 rounded-full border border-black bg-white px-10 py-2 text-center text-lg font-google-sans text-black shadow-xl transition-colors duration-200 cursor-pointer ${variants[variant]}`}
    >
      <span>{btnName}</span>
      {/* <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-2" /> */}
    </a>
  );
};

export default Button;