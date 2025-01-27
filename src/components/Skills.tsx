"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { skills } from "@/constants";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.0 + i * 0.1,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col 
      px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 gap-y-12 
      sm:gap-y-20 justify-center items-center mt-16 lg:ml-0 sm:ml-96 "
      
    >
      {/* Heading */}
      <Heading heading="Skills" />

      {/* Skills Grid */}
      <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-6 md:gap-8">
        {skills.map((skill, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            key={i}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500 bg-zinc-200 px-3 py-2 sm:px-4 sm:py-4 shadow-md"
          >
            <Image
              src={skill.image}
              alt="skillImage"
              width={100}
              height={100}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
            />
            <p className="text-xs sm:text-sm md:text-base text-center">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
