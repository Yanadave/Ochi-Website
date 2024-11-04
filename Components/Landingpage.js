import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            <div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-medium'>We Create</h1>
            </div>
            <div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-medium'>eye-opening</h1>
            </div>
            <div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-medium'>presentations</h1>
            </div>
           
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light leading-none'>{item}</p>
            ))}

            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-2 border-zinc-500 rounded-full font-light text-md'>START THE PROJECT</div>
                <div className='w-10 h-10  border-[1px] flex items-center px-2 border-zinc-500 rounded-full'>
                    <GoArrowUpRight/>
                </div>

            </div>
                
        </div>
    </div>
  )
}

export default Landingpage