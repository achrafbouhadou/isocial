import React from 'react'
import { Avatar } from '@chakra-ui/react'

export default function AddPost() {
  return (
    <div className='flex items-center  bg-gray-50 p-5 rounded-lg'>
       <Avatar size="sm" name='Achraf bouhadou' src='https://bit.ly/tioluwani-kolawole' />
       <div className='bg-white w-full Inter-font p-5 ml-3 cursor-pointer'>
          Ask for collab
       </div>
    </div>
  )
}
