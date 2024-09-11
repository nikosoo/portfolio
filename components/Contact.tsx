import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import LottieAnimation from "./ui/LottieAnimation";

const Contact = () => {
  return (
    <div className="relative h-screen bg-[#021526] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      {/* Title in the top left corner */}
      <div className="absolute top-4 left-4 sm:left-8 md:left-12 lg:left-20 xl:left-28 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-20">
        <LottieAnimation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-[40vh] w-full md:w-[60vw] lg:w-[50vw] xl:w-[40vw]">
        {/* Left Column - Contact Me */}
        <div className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 space-y-6 md:space-y-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100">
            Contact Me
          </h1>
          <a
            href="mailto:nikosbosoo@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl sm:text-3xl" />
            <span className="text-sm sm:text-base">nikosbosoo@hotmail.com</span>
          </a>
        </div>

        {/* Right Column - Connect with Me on Social Media */}
        <div className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-30 space-y-6 md:space-y-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100">
            Connect with me on social media
          </h1>
          <a
            href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com/nikosoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl sm:text-3xl" />
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center text-gray-400 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-4 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-28">
        <div className="flex flex-col items-center mb-4 w-full">
          <hr className="border-gray-600 w-full md:w-3/4 mb-4" />
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
            <p className="text-sm md:text-base">
              &copy; 2024 Nikos Bos. All rights reserved.
            </p>
            <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaLinkedin className="text-xl md:text-2xl" />
              </a>
              <a
                href="https://github.com/nikosoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub className="text-xl md:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
