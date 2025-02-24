import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="mailto:mfarhanabbasi99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="tel:+923185410340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaPhone className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/farhanabbasi4t4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-farhan-650b7828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        <p className="text-gray-300">
          &copy; 2025 Muhammad Farhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;