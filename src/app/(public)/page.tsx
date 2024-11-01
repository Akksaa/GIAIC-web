"use client"
import Link from "next/link"
import React from "react"


export default function Home() {
  
  return (
    <>
    <div className='min-h-screen pt-10 lg:pt-16 px-4 sm:px-8 md:px-16'>
    <div className='flex flex-col md:flex-row justify-between w-full'>
      <div className='sm:w-full lg:w-1/2 flex flex-col items-start'>
      <h1 className="font-extrabold poppins leading-10 text-3xl sm:text-5xl text-left sm:leading-none lg:text-6xl text-sky-800 tracking-wider whitespace-nowrap">Governor Sindh</h1>
      <h3 className='font-medium text-2xl sm:text-3xl lg:text-5xl text-sky-800 lg:tracking-widest lg:mt-2'>Kamran Khan Tessori</h3><br />
      <h2 className="font-extrabold poppins text-2xl sm:text-3xl lg:text-[48px] text-sky-500 text-wrap lg:tracking-widest mt-2">
      Certified Cloud Applied Generative AI  Engineer (GenEng)</h2><br />
      <p className="font-extrabold text-lg sm:text-xl lg:text-2xl text-sky-800">
      Earn up to $5,000 / month</p><br />
      <p className="font-extrabold text-lg sm:text-xl lg:text-2xl text-sky-800 ">Now admissions are open in <br /> Hyderabad</p>

      <div className="flex gap-8 md:gap-32 items-center mt-10">
        <Link href="/login">
          <button className="px-8 py-3 rounded-md tracking-widest text-white font-bold bg-sky-800 hover:bg-white hover:text-sky-800 hover:border-2 border-sky-800 transition-all">
            APPLY NOW
          </button>
        </Link>
        
        <div className="text-sky-800 text-center hidden lg:flex flex-col items-center">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl pt-2">562,143</p>
          <p className="tracking-widest text-xs sm:text-sm lg:text-base">
            Accepted Applications
          </p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
      <img src={'/kt2.png'} alt="Kamran Khan Tessori" className="w-full max-w-md lg:max-w-lg lg:h-[700px]" />
    </div>
    </div>
    </div>
   
   <div className="w-full flex justify-center mt-6 sm:mt-28">
    <div className='w-[90%] lg:w-[95%] xl:w-[1300px]'>
      <p className="text-center text-sky-800 roboto font-extrabold md:text-[36px] text-[20px] m-auto leading-[2rem]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</p>
      <p className="md:tracking-widest text-justify sm:text-[1.25rem] mt-7 xl:text-[1.25rem] text-[0.75rem] m-auto">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members</p>

    <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 m-3 ">
        <img src="1.jpg" alt="" loading="lazy" height={1088} width={896} className="h-[300px] mb-6  object-cover w-full rounded-lg shadow-xl shadow-black bg-transparent"/>
        <img src="2.jpg" alt="" loading="lazy" height={1088} width={896} className="h-[300px] mb-6 object-cover w-full rounded-lg shadow-xl shadow-black bg-transparent" />
        <img src="3.jpg" alt="" loading="lazy" height={1088} width={896} className="h-[300px] object-cover w-full rounded-lg shadow-xl shadow-black bg-transparent" />
    </div>

    <div className="wrapper mt-10 mb-10">
      <img src="4.jpg" alt="" height={1300} width={800} className="item" />
      <img src="5.jpg" alt="" height={1300} width={800} className="item" />
      <img src="6.jpg" alt="" height={1300} width={800} className="item" />
      <img src="7.jpg" alt="" height={1300} width={800} className="item" />
      <img src="8.jpg" alt="" height={1300} width={800} className="item" />
      <img src="9.jpg" alt="" height={1300} width={800} className="item" />
      <img src="10.jpg" alt="" height={1300} width={800} className="item" />
      <img src="11.jpg" alt="" height={1300} width={800} className="item" />
    </div>

    <div className="roboto">
      <h1 className="md:text-4xl text-3xl font-[900] text-sky-800">Core Courses Sequence</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="13.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Programming Fundamentals</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="12.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Web2 Using NextJS</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="14.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Earn as You Learn</p>
            </div>  
          </div>
        </div>
        

      </div>
    </div>
    <div className="roboto mt-10">
      <h1 className="md:text-4xl text-3xl font-[900] text-sky-800">Advance Courses</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="15.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Artificial Intelligence</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="16.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Web 3 and Metaverse</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="17.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Cloud-Native Computing</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="18.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Ambient Computing nad Iot</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="19.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Genomics and Bioinformatics</p>
            </div>  
          </div>
        </div>
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden shadow-lg shadow-slate-400 h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
             <img src="20.jpg" alt="" width={450} height={300} loading="lazy" className="object-cover w-full"/>   
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <p>Network Programmability and Automation</p>
            </div>  
          </div>
        </div>
        
      
      </div>
    </div>
    </div>
    
   </div>
    </>
   
  )
}