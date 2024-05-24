import React from 'react'

const CardComponent = ({image,heading ,subHeading}) => {
  return (
    
      <div className='flex-grow flex-shrink-0 m-[15px] max-w-full mx-auto sm:w-[320px] z-1 md:w-[340px] lg:w-[290px] sm:mx-2 sm:m-2 h-auto sm:h-[390px] bg-gradient-to-b from-[#0D061F] to-[#251E35] border-solid border-2 border-[#FFFFFF10] rounded-2xl transition duration-300'>
          <div className='flex flex-col items-start justify-center h-full p-6 gap-y-3'>
            <img width='188px' src={image} className='mb-4 -z-1 relative -left-[30px] max-w-full   sm:ml-0' style={{ maxHeight: '200px' }} />
            <h2 className='text-[#EEE5FF]  sora-Title leading-[45px] text-[23px] '>{heading}</h2>
            <p className='text-[#EEE5FFBD] text-left text-[18px] leading-[30px] outfit-Title sm:mx-0'>{subHeading}</p>
          </div>
        </div>
    
  )
}

export default CardComponent
