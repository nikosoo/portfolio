import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import LottieAnimation from "./ui/LottieAnimation";

const Contact = () => {
  return (
    <div className="relative h-screen bg-[#021526] flex flex-col items-center justify-center">
      {/* Title in the top left corner */}
      <div className="absolute top-4 left-28 p-20">
        <LottieAnimation />
      </div>

      <div className="grid grid-cols-2 gap-8 h-[40vh] w-[60vw]">
        {/* Left Column - Contact Me */}
        <div className="flex flex-col items-start justify-center pl-8 space-y-10">
          <h1 className="text-3xl font-semibold text-gray-100">Contact Me</h1>
          <a
            href="mailto:nikosbosoo@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-3xl" />
            <span>nikosbosoo@hotmail.com</span>
          </a>
        </div>

        {/* Right Column - Connect with Me on Social Media */}
        <div className="flex flex-col items-start justify-center pl-8 pt-14 space-y-10">
          <h1 className="text-3xl font-semibold text-gray-100">
            Connect with me on social media
          </h1>
          <a
            href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-3xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/nikosoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-3xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center text-gray-400 px-6 pb-28">
        <div className="flex flex-col items-center mb-4 w-full">
          <hr className="border-gray-600 w-3/4 mb-4" />
          <div className="flex items-center justify-between w-3/4">
            <p>&copy; 2024 Nikos Bos. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/nikosoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
