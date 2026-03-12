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
      className={`group inline-flex items-center  border-inset-2 text-black border-black bg-white transition-colors duration-200 gap-2 rounded-full border px-10 py-2 text-lg font-google-sans shadow-xl cursor-pointer ${variants[variant]}`}
    >
      <span>{btnName}</span>
      {/* <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-2" /> */}
    </a>
  );
};

export default Button;