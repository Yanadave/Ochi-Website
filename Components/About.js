import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black text-[3vw] leading-[4.5vw] tracking-tight'>
        <h1>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex border-t-[1px] pt-20 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
            <h1 className='text-7xl'>Our Approach:</h1>
            <button className=' flex gap-5 items-center px-2 py-2 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-4 h-4 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#96af3d]'></div>
        </div>
    </div>
  )
}

export default About