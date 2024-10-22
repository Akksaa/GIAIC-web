import React from 'react';
import { MailIcon, UserIcon, LockClosedIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function SignUp() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className='bg-gray-200 p-6 w-[500px] px-16 rounded-2xl shadow-xl border-2 border-sky-800' >
      <img src="/login.png" alt="" className='rounded-full h-20 -mt-16 ml-24' />
      <h2 className='text-2xl inline-block ml-20 font-sans text-sky-800 text-center border-b-4 p-2 border-sky-800'>Sign up!</h2>

      <form action="" className='space-y-4 py-4'>
        <div className="relative mt-4">
          <label htmlFor="name" className='text-sky-800 block text-sm font-medium'>NAME</label>
          <div className="absolute mt-5 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input 
          type="text" 
          name="" 
          id="" 
          placeholder='ENTER NAME'
          className='pl-10 block mt-1 w-full border text-xs hover:border-sky-300 shadow-md focus:outline-none focus:ring-sky-800 focus:border-sky-800 rounded-lg px-3 py-2'
          />
        </div>
        <div className="relative">
          <label htmlFor="name" className='text-sky-800 block text-sm font-medium'>E MAIL</label>
          <div className="absolute mt-[30px] inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input 
          type="email" 
          name="" 
          id="" 
          placeholder='ENTER MAIL'
          className='pl-10 block mt-1 w-full border text-xs hover:border-sky-300 shadow-md focus:outline-none focus:ring-sky-800 focus:border-sky-800 rounded-lg px-3 py-2'
          />
        </div>
        <div className="relative">
          <label htmlFor="name" className='text-sky-800 block text-sm font-medium'>PASSWORD</label>
          <div className="absolute mt-[30px] inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockClosedIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input 
          type="password" 
          name="" 
          id="" 
          placeholder='ENTER PASSWORD'
          className='pl-10 block mt-1 w-full border text-xs hover:border-sky-300 shadow-md focus:outline-none focus:ring-sky-800 focus:border-sky-800 rounded-lg px-3 py-2 '
          />
        </div>
        <div className='text-xs text-center justify-center flex '>
            <p>Already have an Account? </p>
            <Link href={"/login"} className='text-sky-800 ml-2 underline'>Login</Link>
        </div>
        <div className=''>
            <Link href={"/"}>
            <button 
            type="submit"
            className='bg-sky-800 w-full block text-sm rounded-xl transition-all py-2 border hover:bg-white hover:border-sky-800 hover:text-sky-800 text-white'
            >SIGN UP
            </button>
            </Link>
            
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp
