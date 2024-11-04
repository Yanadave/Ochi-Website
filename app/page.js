import React from 'react'
import Navbar from '@/Components/Navbar'
import Landingpage from '@/Components/Landingpage'
import Marque from '@/Components/Marque'
import About from '@/Components/About'
import Eyes from '@/Components/Eyes'
import Featured from '@/Components/Featured'
import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
// import YellowPage from '@/Components/YellowPage'
// import LocomotiveScroll from 'locomotive-scroll'





function page() {

  // const locomotiveScroll = new LocomotiveScroll();
  
  return (
   <div className='w-full min-h-screen text-white bg-zinc-900'>
       <Navbar />
       <Landingpage />
       <Marque />
       <About/>
       <Eyes/>
       <Featured/>
       <Cards/>
       {/* <YellowPage/> */}
       <Footer/>
   </div>
  )
}



export default page