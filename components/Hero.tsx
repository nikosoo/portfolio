"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
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
import Image from "next/image";

const Hero = () => {
  const skills = [
    { id: 1, name: "HTML5", image: htmlIcon.src },
    { id: 2, name: "CSS3", image: cssIcon.src },
    { id: 3, name: "JavaScript", image: jsIcon.src },
    { id: 4, name: "Node.js", image: nodeIcon.src },
    { id: 5, name: "React", image: reactIcon.src },
    { id: 6, name: "Next.js", image: nextLogo.src },
    { id: 7, name: "Angular", image: angularIcon.src },
    { id: 8, name: "MongoDB", image: mongoLogo.src },
    { id: 9, name: "SQL", image: sqlLogo.src },
    { id: 10, name: "C#", image: cLogo.src },
    { id: 11, name: "Java", image: javaLogo.src },
    { id: 12, name: "WordPress", image: wordpressLogo.src },
  ];

  return (
    <div className="relative h-screen">
      <div className="pt-8 flex items-center justify-between px-6">
        <h1 className="text-5xl">
          Nikos Bos<span className="text-lightBlue">.</span>
        </h1>
        <div className="flex gap-6">
          <a
            href="https://github.com/nikosoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>
        </div>
      </div>
      <div className="pt-20 flex items-center justify-center">
        <div className="relative p-12 bg-[#021526] text-center w-full h-[35rem] rounded-xl shadow-lg border-2 border-lightBlue">
          <div className="flex flex-col text-left z-10">
            <h2 className="text-5xl font-semibold text-white">
              Hello I&apos;m{" "}
            </h2>
            <h2 className="text-5xl font-semibold text-white">
              <span className="text-lightBlue">Nikos Bosneas</span>
            </h2>
            <p className="mt-8 text-lg text-gray-300 w-[60%]">
              I&apos;m a passionate Full Stack Developer with expertise in
              building dynamic and responsive web applications from front-end to
              back-end. I love turning ideas into reality through code.
            </p>

            {/* Download CV Button */}
            <div className="mt-6">
              <Link href="/NikosBosneasCV.pdf" download>
                <button className="px-6 py-3 bg-lightBlue text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Download CV
                </button>
              </Link>
            </div>

            <h3 className="mt-12 text-xl text-lightBlue">My skills</h3>
            <div className="grid grid-cols-2 gap-4 items-center pt-4">
              <div className="flex flex-wrap items-center justify-start">
                <AnimatedTooltip items={skills} />
              </div>
            </div>
          </div>

          {/* Red Circle Behind the Image */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gray-700 rounded-full border-2 border-lightBlue z-0"></div>

          <Image
            src={heroImg}
            alt="hero"
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 object-cover z-10"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-12">
        <Link href="#projects">
          <div className="relative flex flex-col items-center justify-center w-28 h-28 cursor-pointer">
            <motion.div
              className="absolute border-2 border-dashed border-white rounded-full w-full h-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <div className="text-lg flex items-center justify-center w-full h-1/3 text-lightBlue">
              Projects
            </div>
            {/* Animated Down Arrow Icon */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-2"
            >
              <FaArrowDown className="text-2xl text-lightBlue" />
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
