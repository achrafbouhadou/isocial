import React from 'react'
import './InputSearch.css'
export default function InputSearch({textButton , className , ...props}) {
  return (
    <>
    <form className='w-full'>   
    <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm opacity-100  text-white border border-gray-300 rounded-full bg-white" placeholder="Search Collaborators..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2 secondary-color   focus:outline-none font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 ">{textButton}</button>
    </div>
    </form>
    </>
  )
}
