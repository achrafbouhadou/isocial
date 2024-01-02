import { Avatar } from '@chakra-ui/react'
import React from 'react'


export default function UserProfilQuic({name , src ,specialite,lokinFor,ecole}) {
    
  return (
    <div className='flex items-center mb-3'>
       <Avatar size="sm" name={name} src={src} />
        <div className='ml-3'>
            <div className='flex'>
            <h1 className='outfit-font font-black mr-1'>{name} </h1>
            <span className='text-gray-600  font-medium'> is looking for </span>
            <h1 className='outfit-font font-black ml-1 orange-color'>{lokinFor}</h1>
            </div>
            <h1 className='text-gray-500  font-normal text-sm '>{specialite + " " + ecole}</h1>
        </div>

    </div>
  )
}
