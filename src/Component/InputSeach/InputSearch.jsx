import React from 'react'
import './InputSearch.css'
export default function InputSearch({textButton , className , ...props}) {
  return (
    <>
   
<form class="flex items-center w-full">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search collaborator..." required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white ">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">textButton</span>
    </button>
</form>

   
    </>
  )
}
