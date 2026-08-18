import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center sm:px-6">
      <p className="font-google-sans text-sm text-white/40">
        &copy; {new Date().getFullYear()} Ormel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
