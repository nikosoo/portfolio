"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className="relative h-screen overflow-hidden">
      {/* Header */}
      <div className="pt-8 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Nikos Bos<span className="text-lightBlue">.</span>
        </h1>
        <div className="flex gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <a
            href="https://github.com/nikosoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikos-bosneas-426353275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 hover:text-lightBlue transition-colors" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col items-center justify-center">
        <div className="relative p-4 md:p-8 lg:p-10 xl:p-12 bg-[#021526] text-left w-full lg:w-full xl:w-full h-[30rem] max-sm:h-[35rem] sm:h-[35rem] md:h-[30rem] lg:h-[40rem] xl:h-[35rem] rounded-xl shadow-lg border-2 border-lightBlue overflow-hidden">
          <div className="flex flex-col text-left z-10 px-4 md:px-6 lg:px-8 xl:px-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
              Hello I&apos;m{" "}
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
              <span className="text-lightBlue">Nikos Bosneas</span>
            </h2>
            <p className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              I&apos;m a passionate Full Stack Developer with expertise in
              building dynamic and responsive web applications from front-end to
              back-end. I love turning ideas into reality through code.
            </p>

            {/* Download CV Button */}
            <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              <Link href="/NikosBosneasCV.pdf" download>
                <button className="px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 bg-lightBlue text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Download CV
                </button>
              </Link>
            </div>

            <h3 className="mt-4 sm:mt-12 md:mt-8 lg:mt-8 xl:mt-10 text-base md:text-lg lg:text-xl xl:text-2xl text-lightBlue">
              My skills
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 items-center pt-2 md:pt-6 lg:pt-6 xl:pt-8">
              <div className="flex flex-wrap items-center">
                <AnimatedTooltip items={skills} />
              </div>
            </div>
          </div>

          <div className="absolute right-10 sm:right-[8%] md:right-8 lg:right-[4rem] xl:right-[4rem] top-[49%] sm:top-[55%] max-sm:top-[55%] transform -translate-y-1/2 w-24 sm:w-28 md:w-32 lg:w-48 xl:w-56 h-24 sm:h-28 md:h-32 lg:h-48 xl:h-56 bg-gray-700 rounded-full border-2 border-lightBlue z-0" />

          <Image
            src={heroImg}
            alt="hero"
            className="absolute right-6 md:right-4 lg:right-20 xl:right-8 top-1/2 sm:top-[55%] max-sm:top-[55%] transform -translate-y-1/2 w-32 sm:w-40 md:w-46 lg:w-58 xl:w-72 h-32 sm:h-40 md:h-46 lg:h-60 xl:h-72 object-cover z-10"
          />
        </div>
      </div>

      {/* Projects Section Link */}
      <div className="flex flex-wrap items-center justify-center mt-6 md:mt-8 lg:mt-12 xl:mt-16">
        <Link href="#projects">
          <div className="relative flex flex-col items-center justify-center w-16 max-sm:w-28 sm:w-28 md:w-28 lg:w-28 xl:w-32 h-16 max-sm:h-28 sm:h-28 md:h-28 lg:h-28 xl:h-32 cursor-pointer">
            <motion.div
              className="absolute border-2 border-dashed border-white rounded-full w-full h-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <div className="text-xs max-sm:text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg flex items-center justify-center w-full h-1/3 text-lightBlue">
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
              className="mt-1 md:mt-2 lg:mt-3 xl:mt-4"
            >
              <FaArrowDown className="text-md max-sm:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl text-lightBlue" />
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
