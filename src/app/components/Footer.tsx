import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillSkype } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTikTok } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <div className='bg-gray-200 p-8 roboto md:p-20 w-full mt-10 gap-16 md:flex justify-start flex-wrap'>
      <div className='mb-6 sm:mb-0'>
        <h3 className='font-semibold tracking-wide text-lg md:text-2xl'>Core Courses</h3>
        <ul className=' mt-2 md:mt-4 text-sm md:text-xl gap-6 cursor-pointer' >
          <li className='mb-2 hover:text-sky-800 transition-colors'>Programming Fundamentals</li>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Web2 Using NextJs</li>
          <li className='hover:text-sky-800 transition-colors'>Earn as You Learn</li>
        </ul>
      </div>
      <div className='mb-6 sm:mb-0'>
        <p className='font-semibold text-lg md:text-2xl tracking-wide'>Advanced Courses</p>
        <ul className='mt-2 md:mt-4 text-sm md:text-xl cursor-pointer'>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Web3 And Metaverse</li>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Cloud-Native Computing</li>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Artificial Intelligence (AI) and Deep Learning</li>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Ambient Computing and IoT</li>
          <li className='mb-2 hover:text-sky-800 transition-colors'>Genomics and Bioinformatics</li>
          <li className='hover:text-sky-800 transition-colors'>Network Programmability and Automation</li>
        </ul>
      </div>
      <div className=''>
        <p className='font-semibold text-lg md:text-2xl tracking-wide'>Social Links</p>
        <ul className='flex mt-2 md:mt-4 text-lg md:text-4xl md:gap-2 cursor-pointer'>
          <li> <AiFillFacebook/> </li>
          <li> <AiFillYoutube/> </li>
          <li> <AiFillSkype/> </li>
          <li> <AiFillInstagram/> </li>
          <li> <AiFillTikTok/> </li>
        </ul>
        <ul className='flex gap-2 items-end text-sky-800 cursor-pointer'>
          <li className=' text-lg md:text-2xl mt-4'> <AiOutlineMail/></li>
          <li className='underline text-sm md:text-lg'> education@governorsindh.com</li>
        </ul>
        

      </div>
    </div>
  )
}

export default Footer
