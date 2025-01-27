"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { ProjectData } from "@/constants/projectData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the section is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <div id="projects"
      ref={ref}
      className="flex flex-col py-20 px-5 sm:px-20 lg:px-40 min-h-screen"
    >
      {/* Heading */}
      <Heading heading="Projects" />

      {/* Projects Container */}
      <motion.div
        className="grid gap-10 mt-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Individual Project Card */}
        {ProjectData.map((project, i) => (
          <motion.div
            key={i}
            className="flex flex-col p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            variants={containerVariants}
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt="Project image"
                width={300}
                height={500}
                objectFit="cover"
                className="rounded-t-lg w-[300px] h-[200px]"
              />
            </div>
            <div className="mt-2">
              <p className="mb-3">{project.description}</p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink ? project.liveLink : undefined}
                  target={project.liveLink ? "_blank" : undefined}
                  rel={project.liveLink ? "noopener noreferrer" : undefined}
                  className={`px-4 py-2 rounded-lg ${
                    project.liveLink
                      ? "text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
                      : "text-gray-400 bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Live Link
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
