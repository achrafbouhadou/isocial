import React from 'react'
import UserProfilQuic from './UserProfilQuic'
import Link from '../Component/Link'
import Button from './Button/Button'


export default function Post({title , name , src,text }) {
  return (
    <div className='relative py-4 px-5 mt-3 bg-gray-50 rounded-lg'>
        <h1 className='Inter-font font-bold text-2xl mb-3'>{title}</h1>
        <UserProfilQuic name={name} src={src} isFromPost={true}  specialite={"Devlopper"} lokinFor={"UI / UX Designer"} ecole={"ISMAGI"} />
        <p className='w-full'>
          {text}
        </p >
        <Link title='more' link={'#'} className='orange-color underline' />
        <div className='flex mb-3  mt-3'>
          <div className='flex mr-16 '>
          <h3 className='text-gray-500  font-normal text-sm mr-3'>PFE</h3>
          <h3 className='text-gray-500  font-normal text-sm '>15/02/24</h3>
          </div>
          <div className='flex'>
            <h3 className='text-gray-500  font-normal text-sm mr-3 '>UX/UI Design</h3>
            <h3 className='text-gray-500  font-normal text-sm '>ISMAGI</h3>
          </div>
          
        </div>
        <div className='flex justify-between '>
          <h3 className='text-gray-500  font-normal text-sm '>Posted 21 hours ago</h3>
        <Button title={'Collab'} />
        </div>
    </div>
  )
}
