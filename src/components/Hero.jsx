import React from "react";
import image from '../farhan.jpeg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 max-[448px]:mt-[40px]">
  <div className="text-center">
    <img
      src={image}
      alt="Muhammad Farhan"
      className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500"
    />
    <h1 className="text-5xl font-bold text-blue-500 mb-4">
      Hi, I'm Muhammad Farhan
    </h1>
    <p className="text-xl text-gray-300 mb-8">
      A Full Stack Developer specializing in the MERN stack.
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      View My Work
    </a>
  </div>
</section>
  );
};

export default Hero;