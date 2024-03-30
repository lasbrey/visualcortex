'use client'
import { useState } from 'react';

const Dropdown = ({ title, lastItem, children }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`w-3 h-3 mt-0.5 ${open ? 'rotate-180' : 'rotate-0'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div
          className={`lg:absolute w-full lg:w-48 ${
            lastItem ? 'lg:right-0 origin-top-right' : 'lg:left-0 origin-top-left'
          }`}
        >
          <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
            {children.map((item, index) => (
              <a key={index} href={item.path} className="py-1 text-gray-600 hover:text-gray-900">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
