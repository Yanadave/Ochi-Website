import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 items-center px-32 flex gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
          <div className='card relative rounded-xl  w-full h-full bg-[#004D4D] flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
          <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#96af3d] font-bold'>©2019–2022</button>
          </div>
        </div>

        <div className='cardcontainer  flex gap-5 h-[50vh] w-1/2'>
          <div className='card relative rounded-xl w-1/2 h-full bg-[#90cbcb] flex items-center justify-center'>
             <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
             <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-black font-bold uppercase'>Rating 5.0 on Clutch</button>
          </div>

          <div className='card relative rounded-xl  w-1/2 h-full bg-[#5ac3c3] flex items-center justify-center'>
             <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
              <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-black font-bold uppercase'>Business Bootcamp Alumni</button>
          </div>

        </div>
    </div>
  )
}

export default Cards