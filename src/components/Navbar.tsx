import { NavBarData } from '@/constants/navbarData'
import Image from 'next/image'
import React from 'react'

interface NavbarProps {
    id: string | undefined; 
  }
const Navbar : React.FC<NavbarProps> = ({id}) => {
  return (
    <div className=' fixed flex flex-col w-[80px] h-full left-0 top-0 justify-between border-r border-gray-300 px-4 py-8'>
        <a href="#home">
            <Image src={"/hari.png"} alt='logo' width={100} height={100} />
        </a>
        <br />
        {NavBarData.map((data, i)=>(
        <div key={i} className='flex flex-col gap-y-3'>
            <a href={`#${data.id}`} className='group flex flex-col items-center gap-y-2'>
                <span className={`text-2xl group-hover:scale-125 transition-all 
                    ${data.id === id ? "text-red-700 scale-125" : 'text-yellow-600 scale-100 '}` }> 
                    {data.icon}
                    </span>
                <span className={`text=[10px] tracking-wider  opacity-0 group-hover:translate-x-0
                 group-hover:opacity-100 transition-all duration-300  text-center
             
                  ${data.id===id && '-translate-x-0 opacity-100'}`}>{data.title}</span> 
            </a>
        </div>
         )) }
        <a href="" className='flex items-center justify-center text-[14px] text-gray-500'>
            <span>&copy; 2025</span>
        </a>
    </div>
  )
}

export default Navbar