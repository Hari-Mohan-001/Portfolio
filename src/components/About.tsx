'use client'
import { aboutText } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Heading from './sub/Heading'

const About = () => {
  return (
    <div id='about' className="flex flex-col min-h-screen px-5 sm:px-10 lg:px-40 xl:px-52 items-center justify-center ">
      <Heading heading='About'/>

      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-8 md:gap-16 mt-10">
        {/* Image Section */}
        <Image
          src={'/about.png'}
          alt="about image" 
          width={400}
          height={400}
          className="w-[200px] sm:w-[300px] md:w-[250px] lg:w-[200px] h-auto"
        />

        {/* Text and Link Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <span className="text-gray-600 text-sm md:text-base bg-zinc-200 rounded-lg shadow-md p-1 first-letter:pl-3">
             {aboutText}
          </span>
          <a
            href="/Hari Mohan Resume.pdf"
            download={""}
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <span>Download CV</span>
            <span className="text-lg">📄</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
