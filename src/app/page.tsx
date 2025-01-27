"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Loader from "@/components/sub/Loader";
import Toogle from "@/components/sub/Toogle";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [id, setId] = useState<string | undefined>(undefined);
  const componentRef = useRef<HTMLDivElement | null>(null);

   useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      const intersecting = entry.isIntersecting
      if(intersecting){
        setId(entry.target.id)
      }
    })
  },{threshold:0.3})

// Check if componentRef.current is not null before accessing it
if (componentRef.current) {
  const componentsArray = Array.from(componentRef.current.children);
  componentsArray.forEach((comp) => {
    observer.observe(comp);
  });
}

// Cleanup observer on component unmount
return () => {
  observer.disconnect();
};
   },[])
  return (
    <>
    <Loader/>
    <Toogle>
    <Navbar id={id}/>
    <div ref={componentRef}>
      <Hero />
      <About/>
      <Experience/>
      <Skills/>      
      <Projects/> 
      <Contact/>
    </div>
    </Toogle>
    </>
  );
}
