"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImg from "../public/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut-removebg-preview.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import htmlIcon from "../public/html5-emblem-orange-shield-and-white-text-vector.jpg";
import cssIcon from "../public/CSS-Logo.jpg";
import jsIcon from "../public/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.webp";
import nodeIcon from "../public/1000_F_583616420_cyNZmksm5h2x5vgcKGmRjnivfmrgnSTb.jpg";
import reactIcon from "../public/1000_F_583616402_eeFIruMMzI8pFF4pkAmDjywdMWu9TQsT.jpg";
import angularIcon from "../public/t_179_angular.jpg";
import mongoLogo from "../public/MongoDB-Emblem.jpg";
import sqlLogo from "../public/azure-sql-database6354.jpg";
import cLogo from "../public/C-logo.jpg";
import javaLogo from "../public/731_java.jpg";
import wordpressLogo from "../public/wordpress-logo-wordpress-icon-transparent-png-free-vector.jpg";
import nextLogo from "../public/329ad85f4ab2047cae13d582274f9270.jpg";

const Hero = () => {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      image: htmlIcon,
    },
    {
      id: 2,
      name: "CSS3",
      image: cssIcon,
    },
    {
      id: 3,
      name: "JavaScript",
      image: jsIcon,
    },
    {
      id: 4,
      name: "Node.js",
      image: nodeIcon,
    },
    {
      id: 5,
      name: "React",
      image: reactIcon,
    },
    {
      id: 6,
      name: "Next.js",
      image: nextLogo,
    },
    {
      id: 7,
      name: "Angular",
      image: angularIcon,
    },
    {
      id: 8,
      name: "MongoDB",
      image: mongoLogo,
    },
    {
      id: 9,
      name: "SQL",
      image: sqlLogo,
    },
    {
      id: 10,
      name: "C#",
      image: cLogo,
    },
    {
      id: 11,
      name: "Java",
      image: javaLogo,
    },
    {
      id: 12,
      name: "WordPress",
      image: wordpressLogo,
    },
  ];

  return (
    <div className="relative h-screen">
      <div className="pt-10 flex items-center justify-between px-6">
        <h1 className="text-5xl">
          Nikos Bos<span className="text-lightBlue">.</span>
        </h1>
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>
        </div>
      </div>
      <div className="pt-36 flex items-center justify-center">
        <div className="relative p-12 bg-[#021526] text-center w-full h-[35rem] rounded-xl shadow-lg border-2 border-lightBlue">
          <div className="flex flex-col text-left z-10">
            <h2 className="text-5xl font-semibold text-white">Hello I'm</h2>
            <h2 className="text-5xl font-semibold text-white">
              <span className="text-lightBlue">Nikos Bosneas</span>
            </h2>
            <p className="mt-8 text-lg text-gray-300 w-[60%]">
              I'm a passionate Full Stack Developer with expertise in building
              dynamic and responsive web applications from front-end to
              back-end. I love turning ideas into reality through code.
            </p>
            <p>My skills</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={skills} />
            </div>
          </div>
          {/* Red Circle Behind the Image */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gray-700 rounded-full border-2 border-lightBlue z-0"></div>

          <img
            src={heroImg.src}
            alt="hero"
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 object-cover z-10"
          />
          <div className="pt-4 absolute bottom-20 left-12">
            <div className="relative flex items-center justify-center w-28 h-28">
              <motion.div
                className="absolute border-2 border-dashed border-white rounded-full w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <div className="text-lg flex items-center justify-center w-full h-full text-lightBlue">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
