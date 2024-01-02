import React from 'react'

export default function ExploreWithIcon({svg , name }) {
  return (
    <div className='flex item-center w-full ml-4 mt-8'>
       <div className='mr-3 flex items-center'>
        {svg}
        </div> 
        <div className='flex items-center'>
            <h1 className='font-bold Inter-font explor-tiltle-color' >{name}</h1>
        </div>
    </div>
  )
}
