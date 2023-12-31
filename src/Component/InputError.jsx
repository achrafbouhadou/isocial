import React from 'react'

export default function InputError({message , className , ...props}) {
  return (
    <>
    <p  
    {...props}
    className={"mt-2 text-xs text-red-600 dark:text-red-400 "+className} 
    >
        {message}</p>    
   
    </>
  )
}
