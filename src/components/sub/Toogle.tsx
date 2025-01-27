"use client"

import { moonIcon, sunIcon } from '@/assets'
import React, { useEffect, useRef, useState } from 'react'
import {reactLocalStorage} from "reactjs-localstorage"

const Toogle = ({children}:{children:any}) => {
    const[darkTheme , setDarkThem] = useState(false)
    const mainRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
    
        if (savedTheme === "light") {
          removeDarkTheme();
        } else {
          addDarkTheme(); // Default to dark theme
        }
      }, []);
    const addDarkTheme = ()=>{
        mainRef.current?.classList.add("dark")
       setDarkThem(true)
    }
    const removeDarkTheme = ()=>{
        mainRef.current?.classList.remove("dark")
       setDarkThem(false)
    }
  return (
    <main ref={mainRef}>
        <div className='bg-zinc-100 dark:bg-zinc-700 h-full'>
            <div className='max-w-[1200px] xl:w-full mx-auto flex justify-center'>
                <button
                onClick={()=> {
                    if(!darkTheme){
                        addDarkTheme()
                        reactLocalStorage.set("theme", 'dark')
                    }else{
                        removeDarkTheme()
                        reactLocalStorage.set("theme", 'light')
                    }
                }}
                 className='fixed right-14 top-10 text-yellow-500 hover:text-yellow-600'>
                    <span className={`absolute block rounded-full bg-zinc-50 p-1 text-4xl ${!darkTheme && 'bg-zinc-700'}`}>{darkTheme? sunIcon:moonIcon}</span>
                        
                </button>
                
                {children}
            </div>    
        </div>
    </main>
  )
}

export default Toogle