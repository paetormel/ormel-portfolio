import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center py-5 text-sm text-white/70">
        <p>
          &copy; Copyright {new Date().getFullYear()} Ormel. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
