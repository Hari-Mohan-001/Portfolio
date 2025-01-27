'use client';

import { experiences } from "@/constants";
import Image from "next/image";
import {motion} from "framer-motion"
import Heading from "./sub/Heading";



const Experience = () => {
    return (
      <div id="experience" className="relative max-w-4xl  mx-auto py-10 ">
         <div className="flex   items-center justify-between ">
        {/* Heading */}
        <Heading heading="Experience"/>
        
        {/* Image */}
       <Image
                 src={'/experience.png'}
                 alt="experience image"
                 width={400}
                 height={400}
                 className="w-[200px] sm:w-[300px] md:w-[250px] lg:w-[200px] h-auto"
               />
      </div>
      
        {/* Vertical line */}
        <div className="absolute left-1/2 top-60 bottom-0 border-l-2 border-gray-300 -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
          <motion.div
          key={exp.id}
          className={`relative flex items-center w-full ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Content */}
          <div
            className={`relative max-w-md p-6 shadow-md rounded-lg bg-slate-300 ${
              index % 2 === 0 ? "mr-10" : "ml-10"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <span className="text-xs text-gray-500">{exp.duration}</span>
            <p className="mt-2 text-sm text-gray-700">{exp.description}</p>
          </div>

          {/* Circle indicator */}
          <div
            className={`absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white -translate-x-1/2 left-1/2`}
          ></div>
        </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Experience;
