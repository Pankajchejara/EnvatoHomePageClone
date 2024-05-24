import React from 'react';
import BrowserImage from '../Images/BrowserImage.png';

const BrowserSection = () => {
  return (
    <div className='w-11/12 mb-[100px] rounded-2xl mt-[150px] mx-auto flex bg-gradient-to-b from-[#0D061F] to-[#251E35] border-solid border-2 border-[#FFFFFF10]  transition duration-300  gap-y-5  py-[50px] flex-col justify-center items-center'>
     

        <h2 className='text-[#EEE5FF] text-center text-[20px] md:text-[25px] sora-Title '>
          Supported by All Popular Browsers
        </h2>
        
        <p className='text-paracolor-100 text-center text-[18px] outfit-Title md:h-[50px] leading-[30px] max-w-[90%] h-auto md:max-w-[35%]'>
          Rest assured, Motion Art is designed to be compatible with all major web browsers.
        </p>
        <div className='mt-[15px] w-full flex justify-center items-center  mx-auto'>
        <img src={BrowserImage} alt='Browser'  className='md:max-w-[500px] w-[80%]' />
        </div>
   
    </div>
  );
}

export default BrowserSection;
