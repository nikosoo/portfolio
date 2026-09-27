"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardItem, CardContainer } from "./ui/3d-card";
import { projects } from "@/data";

const ProjectCards = () => {
  return (
    <div className="min-h-screen p-6 lg:p-12">
      {/* Header section */}
      <div className="text-center mb-16">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-6 lg:pb-8 font-bold">
          My work<span className="text-lightBlue">.</span>
        </div>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-600 dark:text-neutral-300">
          As a versatile full-stack developer, I am proficient in both front-end
          and back-end development, enabling me to build comprehensive and
          fully-functional web applications. My role involves designing and
          developing user interfaces, managing server-side logic, and ensuring
          seamless interaction between the two.
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <CardContainer
            key={index}
            className="inter-var w-full h-full"
          >
            <CardBody
              className="
                bg-gray-50
                relative
                group/card
                dark:hover:shadow-2xl
                dark:hover:shadow-emerald-500/[0.1]
                dark:bg-black
                dark:border-white/[0.2]
                border-black/[0.1]
                w-full
                h-full
                min-h-[420px]
                rounded-xl
                p-6
                border
                flex
                flex-col
              "
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mb-3"
              >
                {project.title}
              </CardItem>

              <CardItem
                translateZ="100"
                className="w-full mb-4 flex-shrink-0"
              >
                <Image
                  src={project.img}
                  height={300}
                  width={400}
                  className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl transition-all duration-300"
                  alt={`${project.title} thumbnail`}
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-neutral-500 dark:text-neutral-300 mb-6 flex-grow line-clamp-3"
              >
                {project.description}
              </CardItem>

              <div className="mt-auto">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-lightBlue text-white rounded-lg text-sm font-medium hover:bg-lightBlue/90 transition-colors duration-200 group"
                >
                  Try now

                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
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

