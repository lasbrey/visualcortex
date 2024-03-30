import React from "react";

const Footer = () => {
  return (
    <footer className="my-20">
      <p className="text-center text-sm text-slate-500">
        Copyright © {new Date().getFullYear()} Visual Cortex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
