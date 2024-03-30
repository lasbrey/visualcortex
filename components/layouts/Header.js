"use client";
import React, { useState } from "react";
import Dropdown from "./dropdown";
import Link from "next/link";

const menuitems = [
  {
    title: "Features",
    path: "/features",
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Faq",
    path: "/faq",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center my-5">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="/" className="text-lg">
          <span className="font-bold text-slate-800">Visual </span>
          <span className="text-slate-500">Cortex</span>
        </a>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              fill="currentColor"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`w-full lg:w-auto mt-2 lg:flex lg:mt-0 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {menuitems.map((item, index) => (
            <React.Fragment key={index}>
              {item.children ? (
                <Dropdown
                  title={item.title}
                  children={item.children}
                  lastItem={index === menuitems.length - 1}
                />
              ) : (
                <li>
                  <a
                    href={item.path}
                    className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="lg:hidden flex items-center mt-3 gap-4">
          <Link  href="#" block size="md">
            Log in
          </Link>
          <Link  href="#" size="md" block>
            Sign up
          </Link>
        </div>
      </nav>
      <div>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">Log in</Link>
          <Link  className="bg-black text-white p-3"href="/register" size="md">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
