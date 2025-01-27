import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

const Loader = () => {
    const [load, setLLoad] = useState(false)

    useEffect(()=>{
setLLoad(true)
    },[])
  return (
    <motion.div
    initial={{top:0}}
    animate={{top:load? '-100%':0}}
    transition={{duration:0.5}} 
    className='w-full h-full fixed top-0 left-0 flex justify-center 
    items-center bg-gradient-to-t from-yellow-50 to-red-100 z-50'>
        <Image src="horse.gif" alt="loader" /> 
    </motion.div>
  )
}

export default Loader