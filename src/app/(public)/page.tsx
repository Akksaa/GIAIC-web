"use client"
import Link from "next/link"
import React from "react"


export default function Home() {
  
  return (
    <>
    <div className='min-h-screen pt-36'>
    <div className='flex justify-between w-full '>
      
      <div className='ml-16 w-[50%]'>
      <h1 className='font-extrabold text-7xl text-sky-800'>Governor Sindh</h1>
      <h3 className='font-medium text-5xl text-sky-800 tracking-widest mt-2'>Kamran Khan Tessori</h3><br />
      <h2 className='font-extrabold font-sans text-5xl text-sky-500 text-wrap tracking-wide'>Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)</h2><br />
      <p className='font-extrabold text-2xl text-sky-800'>Earn up to $5,000 / month</p><br />
      <p className='font-extrabold text-2xl text-sky-800'>Now admissions are open in <br /> Hyderabad</p>
      <div className='flex gap-32'>
        <Link href="/login">
        <button className=' px-12 py-3 rounded-md mt-10 tracking-widest text-white font-bold bg-sky-800 hover:bg-white hover:text-sky-800 hover:border-2 border-sky-800 transition-all'>APPLY NOW</button>
        </Link>
      <div className='text-sky-800 text-center'>
        <p className='font-semibold text-4xl pt-9'>562,143</p>
        <p className='tracking-widest'>Accepted Applications</p>
      </div>
      </div>
      </div>
      <div className='w-[50%]'>
      <img src={'/kt2.png'} alt='' className='h-[700px]'></img>
      </div>
      
     
    </div>
    </div>
   
    </>
   
  )
}