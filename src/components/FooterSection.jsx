import React from 'react'

const FooterSection = () => {
  return (
    <div className='w-[100%] h-auto lg:h-[54px]  bg-gradient-to-r overflow-y-hidden  from-[#F87516] to-[#5E11FF]'>
        <div className=' w-11/12 mb-[30px]  lg:h-[45px] mx-auto flex lg:flex-row flex-col-reverse gap-y-[40px] justify-center items-center lg:items-end  lg:justify-between '>

      <p className='text-[#EEE5FFB8] text-center break-words text-[14px] outfit-Title'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <div className='flex justify-between flex-row below-200:justify-center below-200:items-center below-200:flex-col gap-y-[30px] w-[200px] mt-6 break-words'>
        <a href='#' className='text-[#EEE5FFB8] break-words text-[14px]'> Documentation</a>
        <a href='#' className='text-[#EEE5FFB8]  break-words text-[14px]'>Support</a>
      </div>
        </div>
    </div>
  )
}

export default FooterSection
