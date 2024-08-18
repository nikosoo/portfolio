"use client";
import { cn } from "@/utils/cn";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";
import { CardBody, CardItem, CardContainer } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import img from "../public/360_F_294637633_4eBaHE24EgCSo75m6PuEe5aMFBA5Pe2J-removebg-preview.png";
import { projects } from "@/data";
import ParticlesDesign from "./ui/Particles";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="pt-10 flex items-center justify-between">
        <h1 className="text-5xl">
          Nikos Bos<span className="text-lightBlue">.</span>
        </h1>
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-400 hover:text-lightBlue" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTwitter className="text-2xl text-gray-400 hover:text-lightBlue" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-400 hover:text-lightBlue" />
          </a>
        </div>
      </div>
      <div className="pt-36">
        <div className="relative flex flex-col items-center justify-center h-96 w-full overflow-hidden bg-slate-900 rounded-lg">
          <div
            className="absolute inset-0 w-full h-full bg-slate-900 z-20 pointer-events-none"
            style={{ maskImage: "radial-gradient(transparent, white)" }}
          />

          <h1 className="relative z-20 text-xl text-white md:text-4xl">
            Hi i am nikos bosneas
          </h1>
        </div>

        <div className="pt-10 flex justify-center">
          <div className="relative flex items-center justify-center w-28 h-28">
            <motion.div
              className="absolute border-2 border-dashed border-white-200 rounded-full w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            />

            <div className="flex items-center justify-center w-full h-full">
              <FiArrowRight className="text-lightBlue text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
