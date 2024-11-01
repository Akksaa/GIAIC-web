import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';

function page() {
  return (
    <>
    <div className='h-[700px] flex justify-center items-center '>
      <div className='w-[850px] sm:h-[600px] h-[500px] rounded backdrop-blur-3xl shadow-lg z-8 mx-4 my-8 md:p-16 md:mx-14 flex-col gap-5 items-center justify-center'>
          <h1 className='roboto text-sky-800 text-lg p-4 sm:p-0 font-medium sm:text-3xl text-center text-main tracking-tight sm:tracking-wide'>Before continuing to the application please subscribe on these social media platforms.</h1>
          <div className='flex justify-center mt-5 md:mt-8 gap-3 text-2xl md:text-4xl opacity-80 text-blue-800 cursor-pointer'>
            <AiFillFacebook className='rounded-full' />
          </div> 
          <div className='flex justify-center mt-8 md:mt-14 gap-3 hover:translate-y-1 transition-transform'>
            <button className='bg-sky-800 py-2 md:py-4 px-8 md:px-16 text-white poppins cursor-not-allowed tracking-wider opacity-60'>CONTINUE</button>
          </div>
          <div className='flex justify-center mt-8 md:mt-4 gap-2'>
            <p className='text-sm md:text-lg'>Already applied?</p>
            <p className='text-sky-500 underline cursor-pointer text-sm md:text-lg'>Get Admit Card</p>
          </div>
      </div>
    </div>

    <div className='flex justify-center items-center'>
    <ul className='md:flex flex-col-1 space-y-2 md:space-y-0 gap-6 text-sky-800'>
      <li className='flex gap-4 md:gap-6'>
        <p className='rounded-full border-2 px-4 py-2 border-sky-800'>1</p>
        <p className='text-lg mt-2'>facebook</p>
      </li>
      <li className='flex gap-4 md:gap-6'>
        <p className='rounded-full border-2 px-4 py-2 border-gray-300'>2</p>
        <p className='text-lg mt-2'>Youtube</p>
      </li>
      <li className='flex gap-4 md:gap-6'>
        <p className='rounded-full border-2 px-4 py-2 border-gray-300'>3</p>
        <p className='text-lg mt-2'>Twitter</p>
      </li>
      <li className='flex gap-4 md:gap-6'>
        <p className='rounded-full border-2 px-4 py-2 border-gray-300'>4</p>
        <p className='text-lg mt-2'>Instagram</p>
      </li>
      <li className='flex gap-4 md:gap-6'>
        <p className='rounded-full border-2 px-4 py-2 border-gray-300'>5</p>
        <p className='text-lg mt-2'>Apply</p>
      </li>
    </ul>
  </div>
  </>
  )
}

export default page
