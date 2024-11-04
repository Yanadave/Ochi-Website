import React from 'react'

function Footer() {
  return (
    <div className=' flex gap-5 w-full h-screen bg-zinc-100 p-20 text-black'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
      <div className='heading'>
      <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-1'>eye-</h1>
      <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-1'>opening</h1>
      </div>
      <h3 className='font-semibold text-4xl'>Ochi</h3>
      </div>
      <div className='w-1/2'>
      <h1 className='text-[6vw] font-semibold uppercase leading-none -mb-1 text-black'>Presentations</h1>
        <div className='dets mt-10'>
          <a className='block text-xl font-light' href='#'>Facebook</a>
          <a className='block text-xl font-light' href='#'>Instagram</a>
          <a className='block text-xl font-light' href='#'>Twitter</a>

        </div>
      </div>
    </div>
  )
}

export default Footer