"use client"
import { motion } from 'framer-motion'
import React from 'react'

function Marque()  {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-950'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear",duration: 10}} className='text-[17vw] leading-none font-semibold pt-8 -mb-[1vw] mr-20'>WE ARE OCHI</motion.h1>
            
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear",duration: 10}} className='text-[17vw] leading-none font-semibold pt-10 -mb-[7vw] mr-20'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

            
export default Marque

