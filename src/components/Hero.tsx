"use client";
import Image from "next/image";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroIcons } from "@/assets";
import { firstLine, secondLine } from "@/constants";
import { useState } from "react";

const Hero = () => {
    const[windowOffset, setWindowOffset] = useState({innerWidth:0, innerHeight:0})
    const [mouseMove, setMouseMove] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e:any)=>{
    const {clientX, clientY} = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = ()=>{
    setWindowOffset({innerWidth:window.innerWidth , innerHeight:window.innerHeight})
    setMouseMove(true)
console.log(innerWidth, innerHeight)
  }

  const {innerWidth , innerHeight} = windowOffset

  const xSpring = useSpring(x, {stiffness:500, damping:10})
  const ySpring = useSpring(y, {stiffness:300, damping:10})

  const rotateY = useTransform(xSpring,[0,innerWidth], [-50,30])
  const rotateX = useTransform(ySpring,[0,innerHeight], [10,-40])


  return (
    <div className="grid place-items-center h-screen" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div className="flex items-center justify-center" style={{
            rotateX: mouseMove? rotateX:0, 
            rotateY: mouseMove? rotateY:0,
            transition:"0.1s"}}>
            <Image
              src={"/person1.png"}
              alt="person image"
              width={400}
              height={400}
              priority={true}
              className=" h-auto w-[100px]"
            />
            <motion.span className="absolute text-3xl text-red-500 font-semibold" 
            initial={{scale:0}}
            animate={{opacity:buttonHover ?0:1, scale:buttonHover?2:0, y:buttonHover?-40:0}}
            transition={{opacity:{delay:0.9}}}>
                Hii...😊</motion.span>
          </motion.div>
          {/* Framer Motion Animated Text */}
          <motion.h1
            className="text-center text-6xl text-blue-600 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.span
              style={{ display: "inline-block", overflow: "hidden" }}
              animate="visible"
              initial="hidden"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: "100%",
                  transition: {
                    delay: 0.5,
                    duration: 3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              {firstLine}
            </motion.span>
          </motion.h1>
          {/* Second Line */}
          <motion.h1
            className="text-center text-2xl font-semibold font-sans mt-3 tracking-wider" // Adjust text size here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2, // Starts after the first line animation
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {secondLine}

            {/* Blinking Cursor */}
            <motion.span
              className="text-red-600 blinking-cursor"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
              }}
            >
              |
            </motion.span>
          </motion.h1>
        </div>
        {/* Call-to-Action Links */}
        <div className="mt-5 flex justify-center gap-x-10  text-purple-400">
          {heroIcons.map((icon, i) => (
            <a
              key={i}
              href="#"
              className="hover:bg-red-500 hover:text-white transition-colors border rounded-lg shadow-lg"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mt-6 mx-auto text-lg w-max block rounded-lg bg-red-500 px-3 py-2 text-white
             font-light capitalize tracking-wider hover:bg-red-700 transition-colors"
             onMouseEnter={()=> setButtonHover(true)}
             onMouseLeave={()=> setButtonHover(false)}
        >
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default Hero;
