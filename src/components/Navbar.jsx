import React from 'react'
import envatoLogo from '../Images/envatoLogo.png'
const Navbar = () => {
  return (
    <div className='bg-[#262626] h-[54px] flex justify-between  items-center fixed w-full z-10'>
     <a href="#"> <img src={envatoLogo} width='152px'className=' relative left-4'/></a>
      <a href="#"> <div className=' z-20 px-[20px] leading-1.5 py-[6px] text-center h-[33px]  text-[16px] relative -left-3 flex justify-center items-center text-white bg-[#82b440]  rounded'>Buy now</div></a>
    </div>
  )
}

export default Navbar
