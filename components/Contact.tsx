import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      <div className="max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-gray-100">
          Contact Me
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          Connect with me on social media:
        </p>
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-300 hover:text-blue-200 transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-2xl" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
