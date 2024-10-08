import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const Education = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full min-h-screen">
        {/* Row 1 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A0153E] h-auto lg:h-full">
          <div>
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Web Developer
            </h2>
            <p className="text-xl">
              National and Kapodistrian University of Athens
            </p>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              I have completed a comprehensive series of courses that have
              equipped me with essential skills in web development and graphic
              design. I learned to create responsive web pages using HTML5 and
              CSS, and gained proficiency in JavaScript for enhancing
              interactivity. I developed expertise in AJAX for asynchronous web
              applications and explored professional workflows through optional
              live sessions. My education includes an introduction to Python
              programming and advanced techniques for integrating visual effects
              and animations with jQuery and JavaScript. Additionally, I
              acquired graphic design skills using Adobe Photoshop and InDesign,
              and learned to design responsive websites with Bootstrap and
              Dreamweaver. Finally, I mastered the creation of dynamic websites
              using the CMS Joomla!.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-[#6C48C5] h-auto lg:h-full">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            M.Sc. Informatics and Applications (In Progress)
          </h2>
          <p className="text-xl">University of West Attica</p>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Informatics and Applications includes coding, software development,
            database design, digital circuits, and network architecture, with
            advanced topics in object-oriented programming, system architecture,
            operating systems, and information security.
          </p>
        </WobbleCard>

        {/* Row 2 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#1230AE] h-auto lg:h-full relative">
          <div>
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              IBM Full Stack Software Developer Professional Certificate
            </h2>
            <p className="text-xl">IBM</p>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Informatics and Applications cover key technology topics such as
              coding, software development, database management, and network
              architecture. Advanced subjects include object-oriented
              programming, computer system architecture, operating system
              principles, and information security. The curriculum also
              introduces cloud computing, web development with HTML, CSS, and
              JavaScript, version control with Git and GitHub, and front-end
              development using React. Back-end development is covered with
              Node.js and Express, along with containerization using Docker,
              Kubernetes, and OpenShift, and microservices and serverless
              architecture. The program concludes with a full-stack capstone
              project, career guidance, and insights into using generative AI to
              advance software development careers.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-[#3795BD] h-auto lg:h-full">
          <div>
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Foundational C# with Microsoft
            </h2>
            <p className="text-xl">FreeCodeCamp and Microsoft</p>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Completed a comprehensive C# programming course, mastering core
              concepts, syntax, and practical application in software
              development. Gained proficiency in variables, data types, control
              structures, and object-oriented programming through hands-on
              projects, enabling confident development and implementation of C#
              applications.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Education;
