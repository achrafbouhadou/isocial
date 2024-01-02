import React from 'react'

export default function Link({link , title , className}) {
  return (
    <a href={link} className={className} >{title} </a>
  )
}

