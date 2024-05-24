import React from 'react'
import logo from '../Images/logo.png'
const HeroSection = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col py-[35px]  gap-y-[90px] '>


      <div className=' flex justify-between'>
      <img src={logo} className='relative  w-[220px] -left-2 aspect-[220/52]'/>
    <a href='#'> <div className=' text-center py-[13px] px-[35px] text-[18px]  bg-white hidden lg:block rounded-[5px] border-2 border-[#FFFFFF] text-black hover:bg-transparent outfit-Title hover:text-white transition-all duration-200 break-words'>Purchase   Now</div></a>
    </div>


{/* hero  */}

<div className='flex md:gap-x-[120px] md:flex-row  flex-col gap-y-6   '>
    {/* side  */}
    <div className='  w-full md:w-[350px]  flex flex-col  md:justify-start  md:items-start items-center justify-center'>
      <div className=' w-[30%] md:w-[65%] lg:w-[67%] md:justify-start md:items-start flex flex-col gap-y-2 justify-center items-center  '>

        <h2 className=' w-full break-words text-[18px] gradient-text sora-Title font-medium'>Transform Your Website</h2>
        <p className='text-paracolor-100 w-full break-words  outfit-Title text-[18px] '>With Motion Art Effect</p>
      </div>

    
    </div>
{/* beside */}
    <div className='   flex flex-col gap-y-7 '>
      <div className=' w-full md:w-[80%] gap-y-9'>

        <h2 className='text-white  text-[40px] font-medium text-center sm:text-left  break-words leading-[60px] sora-Title   lg:text-[55px] lg:leading-[75px]'>Attract Your Visitors Attention With Colorful <span className='gradient-text '>Motion Art Effect</span></h2>
        <p className='text-paracolor-100 break-words text-[18px] outfit-Title   mt-2 leading-[1.6em]'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
      </div>
     
    </div>
</div>
    </div>
  )
}

export default HeroSection
