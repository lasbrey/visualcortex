import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <footer className="my-20">
        <p className="text-center text-sm text-slate-500">
          Copyright © {new Date().getFullYear()} Visual Cortex. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
