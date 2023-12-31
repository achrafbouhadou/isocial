import {forwardRef , useEffect , useRef} from 'react'

export default forwardRef( function InputText({type = 'text' , className = "" , isFocused = false, ...props} , ref) { 

  const internalRef = useRef(); // Always call useRef unconditionally
  const inputRef = ref || internalRef; // Decide which ref to use

  useEffect(() => {
    if(isFocused){
      inputRef.current.focus()
    }
  }, [])
  
  return (
    <>
    <input 
    {...props}
    type={type}
    className={ 'appearance-none Inter-font  rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100' + className}
    ref={inputRef}
    />
    </>
  )
})
