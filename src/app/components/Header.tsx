"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function Header() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <div className='fixed w-full'>
      <div className='bg-sky-800 p-4 w-full'>
      <div className='flex justify-center items-center text-white'>
          <h1 className='font-bold text-blue-100 text-2xl pl-28'>Tuition Free Education Program on Latest Technologies</h1>
          <ul className='md:flex gap-10 font-sm hidden pl-28'>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/'}><li>Apply</li></Link>
            <Link href={'/'}><li>Jobs</li></Link>
            <Link href={'/'}><li>Result</li></Link>
         </ul>
         <div>
          <button
           onClick={() => setIsOpen((prev) => !prev)}
           className=' ml-10 flex relative'>
            Courses

            {!isOpen ? (
              <AiOutlineCaretDown className='h-3 ml-2 mt-[8px]'/>
            ):
            (
              <AiOutlineCaretUp className='h-3 ml-2 mt-[8px]'/>
            )}

            {isOpen && (
              <div className='bg-white top-[35px] p-4 w-[450px] absolute right-1 text-black text-start tracking-tighter'>
                <div className='border-b-2 border-gray-200'>
                <h3 className='font-medium text-xl'>Core Courses</h3>
                <ul className='mt-4 ml-4 text-md gap-6' >
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Programming Fundamentals</li>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Web2 Using NextJs</li>
                  <li className='hover:text-sky-800 transition-colors'>Earn as You Learn</li>
                </ul><br />
                </div><br />
                <div>
                  <h3 className='font-medium text-xl'>Advanced Courses</h3>
                  <ul className='mt-4 ml-4 text-md'>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Web3 And Metaverse</li>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Cloud-Native Computing</li>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Artificial Intelligence (AI) and Deep Learning</li>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Ambient Computing and IoT</li>
                  <li className='mb-2 hover:text-sky-800 transition-colors'>Genomics and Bioinformatics</li>
                  <li className='hover:text-sky-800 transition-colors'>Network Programmability and Automation</li>
                </ul>
                </div>
              </div>
            )}
            </button>
         </div>
      </div>
    </div>
    <div className='w-full'>
    <Image src={'/logo.png'} alt=''height={120} width={80} className='h-[100px] ml-16 -mt-10'></Image>
    </div>
    </div>
    </>
  )
}

export default Header

