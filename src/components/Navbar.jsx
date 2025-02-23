import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <div className="container mx-auto min-h-[60px] flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Muhammad Farhan</h1>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>

        <ul
          className={`md:flex md:space-x-6 text-[18px] md:items-center ${
            isOpen
              ? "flex flex-col space-y-4 absolute top-16 right-4 bg-gray-800 p-4 rounded-lg shadow-lg"
              : "hidden"
          }`}
        >
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;