import Link from "next/link";
import {
  FaHome,
  FaGraduationCap,
  FaProjectDiagram,
  FaAddressBook,
} from "react-icons/fa";

export default function Sidebar() {
  return (
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
  );
}
