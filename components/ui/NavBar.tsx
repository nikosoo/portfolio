"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaGraduationCap,
  FaProjectDiagram,
  FaAddressBook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="w-18 h-[35%] bg-gray-800 text-white flex flex-col fixed right-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full z-50 bg-opacity-75 max-sm:hidden">
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="space-y-4">
            <li className="p-4 hover:bg-gray-700 flex items-center justify-center">
              <Link
                href="#hero"
                className="flex items-center justify-center space-x-2"
              >
                <FaHome className="text-2xl" />
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center justify-center">
              <Link
                href="#education"
                className="flex items-center justify-center space-x-2"
              >
                <FaGraduationCap className="text-2xl" />
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center justify-center">
              <Link
                href="#projects"
                className="flex items-center justify-center space-x-2"
              >
                <FaProjectDiagram className="text-2xl" />
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center justify-center">
              <Link
                href="#contact"
                className="flex items-center justify-center space-x-2"
              >
                <FaAddressBook className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Burger menu button for smaller screens */}
      <div className="sm:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-white p-2 bg-gray-800 rounded-full focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Full-width sidebar that slides in for smaller screens */}
      {isOpen && (
        <div className="fixed inset-0 w-full bg-gray-800 bg-opacity-90 z-40 flex flex-col items-center justify-center text-white transition-opacity duration-300 ease-in-out">
          <nav className="space-y-8 w-full text-center">
            <ul className="space-y-4">
              <li className="text-3xl hover:text-gray-400">
                <Link href="#hero" onClick={toggleMenu}>
                  <FaHome className="inline-block mr-2" /> Home
                </Link>
              </li>
              <li className="text-3xl hover:text-gray-400">
                <Link href="#education" onClick={toggleMenu}>
                  <FaGraduationCap className="inline-block mr-2" /> Education
                </Link>
              </li>
              <li className="text-3xl hover:text-gray-400">
                <Link href="#projects" onClick={toggleMenu}>
                  <FaProjectDiagram className="inline-block mr-2" /> Projects
                </Link>
              </li>
              <li className="text-3xl hover:text-gray-400">
                <Link href="#contact" onClick={toggleMenu}>
                  <FaAddressBook className="inline-block mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
