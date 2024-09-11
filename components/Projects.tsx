"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardItem, CardContainer } from "./ui/3d-card";
import { projects } from "@/data";

const ProjectCards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 lg:gap-16 p-6 lg:p-12 min-h-screen">
      {/* Left section with text */}
      <div className="lg:w-2/4 w-full text-center lg:text-left flex-grow">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl pb-6 lg:pb-8">
          My work<span className="text-lightBlue">.</span>
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg">
          As a versatile full-stack developer, I am proficient in both front-end
          and back-end development, enabling me to build comprehensive and
          fully-functional web applications. My role involves designing and
          developing user interfaces, managing server-side logic, and ensuring
          seamless interaction between the two.
        </div>
      </div>

      {/* Right section with project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 w-full lg:w-auto flex-grow">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-md mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.img}
                  height="500"
                  width="500"
                  className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.url}
                  target="_blank"
                  className="px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
