import React from 'react'
import sectionImage from '../Images/SectionImage.png'
import pageImage from '../Images/PageImage.png'
const ApplySection = () => {
  return (
    <div className='flex flex-col w-11/12 mx-auto gap-y-[80px] z-10 '>
      <h2 className='text-[#EEE5FF] text-center text-[35px] leading-[55px] sora-Title break-words mx-auto w-[60%] '>Apply On Any Section Or Enable For Whole Page</h2>

      <div className='flex md:flex-row flex-col justify-between  gap-x-4 '>
{/* sectione 1 */}
<div className=' w-full '>
    <div className='  bg-gradient-to-b from-[#0D061F] to-[#251E35] border-solid border-2 border-[#FFFFFF10] rounded-2xl transition duration-300'>
      <div className='flex flex-col p-7 gap-y-4'>
      <h2 className='text-[#EEE5FF] text-[25px] leading-[45px] sora-Title '>Apply On Section</h2>
    <p className='text-paracolor-100 text-[18px] leading-[30px] outfit-Title break-words'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
    <div className='flex md:justify-start justify-center items-center'>
    <img src={sectionImage}/>
    </div>
   
      </div>
    
    </div>
</div>

{/* section 2 here */}
<div className= '  w-full '>
    <div className=' bg-gradient-to-b from-[#0D061F] to-[#251E35] border-solid border-2 border-[#FFFFFF10] rounded-2xl transition duration-300 flex  mt-[80px] flex-col  justify-center items-center'>
      <div  className='flex flex-col p-7 gap-y-4'>
      <h2 className='text-[#EEE5FF] text-[25px] leading-[45px] sora-Title'>Apply On Page</h2>
    <p className='text-paracolor-100 text-[18px] leading-[30px] outfit-Title break-words'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </p>
    <div  className='flex md:justify-start justify-center items-center' >
    <img src={pageImage}/>
    </div>
 
      </div>
   
    </div>
</div>


      </div>
    </div>
  )
}

export default ApplySection
