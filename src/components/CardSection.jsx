import React from 'react'
import CardImage1 from '../Images/CardImage1.png'
import CardImage2 from '../Images/CardImage2.png'
import CardImage3 from '../Images/CardImage3.png'
import CardComponent from './CardComponent'
const CardSection = () => {
  return (
    <div className=' w-[98%] min-h-screen mx-auto flex flex-col items-center sm:px-6 lg:px-8 py-8 overflow-hidden'>
      <div className='w-full max-w-3xl flex flex-col items-center'>
        <h2 className='text-[#EEE5FF] text-[28px] sm:text-[35px] text-center leading-[40px] sm:leading-[55px] sora-Title'>
          An All-Round Plugin With Powerful Features
        </h2>
        <p className='text-paracolor-100 text-center break-words w-full sm:max-w-[620px] outfit-Title text-[16px] sm:text-[18px] leading-[24px] sm:leading-[30px] mt-4'>
          Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
        </p>
      </div>

<div className='flex flex-wrap justify-between mt-8 w-full'>
<CardComponent image={CardImage1} heading={"Light Weight"} subHeading={"Motion Art for Elementor is designed to be lightweight"} />
<CardComponent image={CardImage2} heading={"100% Responsivet"} subHeading={"Create a consistent visual experience across all devices."} />
<CardComponent image={CardImage3} heading={"User Friendly Interface"} subHeading={"Ensure a smooth experience for both applicants and administrators."} />
</div>
</div>
  )
}

export default CardSection
