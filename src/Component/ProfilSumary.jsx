import React from 'react'
import UserProfilQuic from './UserProfilQuic'
import { Progress } from '@chakra-ui/react'


export default function ProfilSumary() {
  return (
    <div className='py-4 px-5 ml-4 primary-background  rounded-lg   inline-block h-48'>
      <UserProfilQuic className={"text-white"} name={"Achraf Bouhadou"} specialite={"Devlopper"} ecole={",Designer"}/>
      <div className='bg-gray-100 rounded-lg Inter-font text-gray-500  text-sm py-1 px-2 inline-block mt-3 mb-3'> 
       <span className='primary-color'>6</span>  collab
      </div>
      <div className='flex Inter-font justify-between text-xs'>
        <h6 className='primary-color text-xs'>Complete your profile</h6>
        <h6 className='primary-color text-xs' >40%</h6>
      </div>
      <Progress colorScheme='teal' value={40} className='rounded-lg' />
    </div>
  )
}
