"use client"
import React from 'react';
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function Login() {

  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className='bg-gray-200 p-6 w-[500px] px-16 rounded-2xl shadow-xl border-2 border-sky-800' >
      <img src="/login.png" alt="" className='rounded-full h-20 -mt-16 ml-24' />
      <h2 className='text-2xl inline-block ml-12 font-sans text-sky-800 text-center border-b-4 p-2 border-sky-800'>Welcome Back!</h2>

      <form action="" className='space-y-4 py-4 my-6'>
        <div className="relative">
          <label htmlFor="name" className='text-sky-800 block text-sm font-medium'>E MAIL</label>
          <div className="absolute mt-[30px] inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input 
          type="email" 
          name="" 
          id="email" 
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
          id="password" 
          placeholder='ENTER PASSWORD'
          className='pl-10 block mt-1 w-full border text-xs hover:border-sky-300 shadow-md focus:outline-none focus:ring-sky-800 focus:border-sky-800 rounded-lg px-3 py-2 '
          />
        </div>
        <div className='text-xs text-center justify-center flex '>
            <p>Don&apos;t have an Account? </p>
            <Link href={"/signup"} className='text-sky-800 ml-2 underline'>Create New Account</Link>
        </div><br />
        <div className=''>
          <Link href={"/"}>
          <button 
            type="submit"
            className='bg-sky-800 w-full block text-sm rounded-xl transition-all py-2 border hover:bg-white hover:border-sky-800 hover:text-sky-800 text-white'
            >LOGIN
            </button>
          </Link>   
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login

