import React from 'react'
import MagicStick from '../Images/stick.png'
import { FaArrowRightLong } from "react-icons/fa6";

const PurchaseSection = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center md:flex-row justify-between gap-y-6 mb-[100px] '>
      <div className=' w-full  md:w-[750px]  flex flex-col gap-y-6'>
<h2 className='text-offwhite-100    text-[35px] md:text-[35px] leading-[55px] sora-Title'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
<p className='text-paracolor-100 leading-[30px] outfit-Title text-[18px]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>

<a href='#'><div className='text-[#fff] cursor-pointer bg-gradient-custom rounded-[20px] max-w-[330px]  text-[20px] sora-btn break-words   py-4 px-8  flex items-center  justify-between'>
    Purchase From Envato <span className='text-white'><FaArrowRightLong /></span>

</div></a>
      </div >
      <img src={MagicStick}/>
    </div>
  )
}

export default PurchaseSection
