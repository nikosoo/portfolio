"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardItem, CardContainer } from "./ui/3d-card";
import { projects } from "@/data";

const ProjectCards = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-40 h-screen">
        <div className="w-2/4">
          <div className="text-8xl pb-8">
            My work<span className="text-lightBlue">.</span>
          </div>
          <div className="text-lg">
            As a versatile full-stack developer, I am proficient in both
            front-end and back-end development, enabling me to build
            comprehensive and fully-functional web applications. My role
            involves designing and developing user interfaces, managing
            server-side logic, and ensuring seamless interaction between the
            two.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-lg p-4 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-md mt-2 dark:text-neutral-300"
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
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-2 py-1 rounded-lg text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-2 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
