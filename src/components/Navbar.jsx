import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm p-4 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          Muhammad Farhan
        </h1>

        {/* Mobile menu button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
          )}
        </div>

        {/* Desktop/Laptop Navigation */}
        <ul className="hidden md:flex space-x-8 items-space">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800/95 backdrop-blur-sm py-4 px-6 shadow-xl">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={toggleMenu}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={toggleMenu}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;