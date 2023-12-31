import React from 'react'

export default function Link({link , title}) {
  return (
    <a href={link} className='primary-color' >{title} </a>
  )
}

