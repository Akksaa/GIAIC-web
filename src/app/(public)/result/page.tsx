import React from 'react'

export default function page() {
  return (
    <>
<div className='items-center flex-col justify-center py-8'>
    <h1 className='text-sky-800 text-2xl md:text-3xl poppins font-extrabold text-center'>Grand Entrance Exam Result</h1>
    <div className="flex items-center justify-center m-auto md:mt-16 md:mx-0 mx-4">
    <div className="bg-white pt-16 p-6 rounded-2xl shadow-lg max-w-2xl w-full">
            <form className="space-y-7">
              <div>
                <label htmlFor="regNum" className='roboto text-slate-700 text-md md:text-xl'>Registration Number *</label>
                <input
                  type="tel"
                  name='regNum'
                  className="mt-1 block w-full px-2 py-2 md:px-4 md:py-[10px] border outline-none text-md md:text-xl border-gray-400 bg-gray-100 focus:border-sub focus:ring-sub rounded-md focus:ring-1"
                  placeholder="Registration number"
                />
              </div>
              <div>
                <label htmlFor="regNum" className='roboto text-slate-700 text-md md:text-xl'>CNIC or B-Form Number *</label>
                <input
                  type="tel"
                  name='regNum'
                  className="mt-1 block w-full px-2 md:px-4 py-2 md:py-[10px] border outline-none text-md md:text-xl border-gray-400 bg-gray-100 focus:border-sub focus:ring-sub rounded-md focus:ring-1"
                  placeholder="CNIC or B-Form Number"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <button
                type="submit"
                className="inline poppins tracking-wider mt-4 md:mt-10 py-2 md:py-4 px-8 md:px-14 bg-sky-900 text-white font-bold hover:translate-y-1 duration-200 focus:outline-none focus:ring-2"
              >
                GET RESULT
              </button>
              </div>
              
            </form>
          </div>
          </div>
    </div>
    </>
  )
}
