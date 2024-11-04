import React from 'react'

function YellowPage() {
  return (
    <div className='w-full h-full bg-[#CDEA6B]  rounded-xl uppercase text-[150px]  leading-none tracking-tighter '>
        {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
                    return (
                        <div className='masker '>
                            <div className='w-fit flex items-center ml-56 '>
                            {index === 0 && <div className='ml-52'></div>}
                            {index === 1 && <div className='ml-20'></div>}
                            
                                <h1 className='uppercase text-[10vw] font-semibold
                                tracking-tighter leading-none mt-12'>{item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
    </div>
  )
}

export default YellowPage