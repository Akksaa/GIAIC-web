"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineClose } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';


function Header() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
<div className="sticky top-0 w-full z-10">
  <div className="bg-sky-800 p-4 md:p-6 flex items-center justify-between">
    
    <div className="flex items-center space-x-4">
      <Image
        src={'/logo.png'}
        alt="Logo"
        height={120}
        width={80}
        className="h-[75px] w-[60px] md:h-[100px] md:w-[75px] -mb-24 sm:-mb-14 lg:-mb-20 sm:ml-10"
      />
      <h1 className="font-semibold text-blue-100 text-lg md:text-xl lg:hidden">
        Tuition Free Program
      </h1>
    </div>
    
    <h1 className="font-bold roboto text-blue-100 text-2xl hidden lg:flex">
      Tuition Free Education Program on Latest Technologies
    </h1>
    
    <ul className="hidden lg:flex items-center gap-10 font-medium text-white pl-12">
      <Link href={'/'}><li>Home</li></Link>
      <Link href={'/apply'}><li>Apply</li></Link>
      <Link href={'/jobs'}><li>Jobs</li></Link>
      <Link href={'/result'}><li>Result</li></Link>
    </ul>

    <div className="lg:hidden flex items-center text-white p-2">
      <button onClick={() => setIsOpen((prev) => !prev)}>
         {isOpen ? (
          <AiOutlineClose className="" />
        ) : (
          <AiOutlineMenu className="" />
        )}
      </button>

      {isOpen && (
        <div className=' bg-sky-800 opacity-85 absolute w-[300px] top-0 h-[600px] left-0 rounded transition-transform duration-200'>
          <div className='h-full p-3'>
          <ul className="font-medium flex-col text-white">
            <Link href={'/'} ><li className='mt-12 pb-4 mb-5 border-b-2 border-gray-200'>Home</li></Link>
            <Link href={'/apply'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Apply</li></Link>
            <Link href={'/jobs'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Jobs</li></Link>
            <Link href={'/result'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Result</li></Link>
          </ul>
          </div>
        </div>
      )}
    </div>
    {/* <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="pl-3 text-white fixed top-4 right-4 z-50"
      >
        {isOpen ? (
          <AiOutlineClose className="" />
        ) : (
          <AiOutlineMenu className="" />
        )}
      </button>

      <div 
        className={`absolute w-[300px] opacity-80 bg-sky-800 top-0 h-[600px] right-0 rounded transition-transform duration-200
          ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <div className='h-full p-3'>
          <ul className="font-medium flex-col text-white">
            <Link href={'/'} ><li className='mt-12 pb-4 mb-5 border-b-2 border-gray-200'>Home</li></Link>
            <Link href={'/apply'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Apply</li></Link>
            <Link href={'/jobs'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Jobs</li></Link>
            <Link href={'/result'}><li className='pb-4 mb-5 border-b-2 border-gray-200'>Result</li></Link>
          </ul>
        </div>
      </div>
    </div> */}

    <div className="hidden lg:flex items-center ml-10 relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-white font-medium flex items-center"
      >
        Courses
        {isOpen ? (
          <AiOutlineCaretUp className="ml-2" />
        ) : (
          <AiOutlineCaretDown className="ml-2" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[400px] bg-white p-4 shadow-md rounded">
          <div className="border-b-2 border-gray-200 pb-2 mb-2">
            <h3 className="font-medium text-lg">Core Courses</h3>
            <ul className="mt-2 ml-2 space-y-2 text-gray-700">
              <li className="hover:text-sky-800 transition-colors">Programming Fundamentals</li>
              <li className="hover:text-sky-800 transition-colors">Web2 Using NextJs</li>
              <li className="hover:text-sky-800 transition-colors">Earn as You Learn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Advanced Courses</h3>
            <ul className="mt-2 ml-2 space-y-2 text-gray-700">
              <li className="hover:text-sky-800 transition-colors">Web3 And Metaverse</li>
              <li className="hover:text-sky-800 transition-colors">Cloud-Native Computing</li>
              <li className="hover:text-sky-800 transition-colors">Artificial Intelligence (AI) and Deep Learning</li>
              <li className="hover:text-sky-800 transition-colors">Ambient Computing and IoT</li>
              <li className="hover:text-sky-800 transition-colors">Genomics and Bioinformatics</li>
              <li className="hover:text-sky-800 transition-colors">Network Programmability and Automation</li>
            </ul>
          </div>
        </div>
      )}
    </div>
    
  </div>
</div>

          

    </>
  )
}

export default Header

