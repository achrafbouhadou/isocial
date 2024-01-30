import React from 'react'
import './button.css'
export default function Button({title , className,onCollab}) {
  return (
    <>
    <button onClick={onCollab}  className={'py-1.5 px-16 text-white ' + className}>{title}</button>
    </>
  )
}
