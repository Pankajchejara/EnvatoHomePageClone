import React from 'react'
import ReviewImage2 from '../Images/ReviewPic2.png'
import star from '../Images/star.png'
import ReviewImage1 from '../Images/ReviewPic1.png'
import ReviewImage3 from '../Images/ReviewPic3.png'
const ReviewSection = () => {
  return (
    <div className='  mx-auto w-11/12 flex flex-col mt-[75px]'>
      <p className='text-center text-[#EEE5FF] text-[22px] mb-[80px] outfit-Title'>Trusted by thousands of users around the world</p>
      {/* //whole div  */}
      <div className='flex gap-y-[50px] flex-row h-auto mb-[80px]  w-full justify-between flex-wrap  '>


     <div className='flex   lg:justify-start justify-center flex-grow flex-shrink-0 w-full h-auto sm:w-[312px]  sm:h-[100px] '>
      <div className='sm:flex-row gap-x-2  items-center flex flex-col'>
      <img src={ReviewImage1} alt='Error'/>
     <div className='flex flex-col gap-y-4 mt-5 '>
        <img src={star}/>
        <p className='text-paracolor-100 text-center break-words relative -left-[5px] outfit-Title'>4.5 Score, 9 Reviews</p>
     </div>
      </div>
    
     </div>

     <div className='flex items-center justify-center flex-grow flex-shrink-0 w-full  sm:w-[312px] gap-x-2 h-auto  sm:h-[100px]  '>
     <div className='sm:flex-row gap-x-2 items-center  flex flex-col'>
     <img src={ReviewImage2} alt='Error'/>
     <div className='flex flex-col gap-y-4 justify-start mt-5 '>
        <img src={star}/>
        <p className='text-paracolor-100 break-words text-center relative -left-[5px] outfit-Title'>4.5 Score, 9 Reviews</p>
     </div>
     </div>
     </div>

     <div className='flex items-center justify-center lg:justify-end flex-grow w-full flex-shrink-0 sm:w-[312px] gap-x-2 h-auto  sm:h-[100px]  '>
     <div className='     sm:flex-row gap-x-2 items-center flex flex-col'>
     <img src={ReviewImage3} alt='Error'/>
     <div className='flex flex-col gap-y-4 mt-5 '>
        <img src={star}/>
        <p className='text-paracolor-100 break-words text-center relative -left-[5px] outfit-Title'>4.5 Score, 9 Reviews</p>
     </div>
     </div>
     </div>

      </div>





    // </div>
    



  )
}

export default ReviewSection


