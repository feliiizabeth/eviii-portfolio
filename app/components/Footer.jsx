import React from "react";
import Link from "next/link";

// Footer component
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex items-center justify-between mx-auto">
        <Link
          href={"/"}
          className="hover:text-primary-500 transition-colors duration-300"
        >
          EVIII PORTFOLIO
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
