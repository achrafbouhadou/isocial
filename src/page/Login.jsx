import React, { useRef, useState }  from 'react'

import Logo from '../Component/Logo'
import Link from '../Component/Link'
import Motivation from './layout/Motivation'
import InputText from '../Component/InputText'
import InputError from '../Component/InputError'

export default function Login
() {
    const email = useRef();
  const password = useRef();
  let [errorMessage, setErrorMessage] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault(); 

    let newErrors = {};
    if (email.current.value.trim() === '') {
      newErrors.email = 'email is required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.current.value.trim())) {
      newErrors.email = 'Invalid email address';
    }
    
    if (password.current.value === '') {
      newErrors.password = 'password is required';
    }else if (password.current.value.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
   
    setErrorMessage(newErrors); 
  };
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
       <div className='w-1/2 flex items-center justify-center'>
        <div>
            <Logo  width={67} height={52} color={"#001D31"} />
            <h1 className="font-black text-3xl mt-6  outfit-font ">
            Create Account
            </h1>
            <div className='flex mb-6 '>
              <h3 className='mr-2'>Already A Member?</h3>
             <Link className={"primary-color"}  link={'#'} title={'log in'} />
            </div>
            <form>
            
              <div className=" mt-2" > 
                <InputText 
                defaultValue=""
                id="email" 
                type="email"  
                placeholder="Email"
                ref={email}
                
                required
                />
                <InputError message={errorMessage.email} />
              </div>
           

           
              <div className=" mt-2 mr-2 ">
                <InputText  
                defaultValue=""
                iid="password" 
                type="password" 
                placeholder="Password"
                ref={password}
                required
                />
                <InputError message={errorMessage.password} />

              </div>
              
            

              <button onClick={handleSubmit} className='outfit-font font-black text-xl primary-background text-white w-full py-3 rounded-xl mt-3 hover:hover-primary-background hover:text-gray-50 ease-in duration-200'>Sign Up</button>
            </form>
            </div>
        </div> 
    <Motivation  />
        
   
    </div>

    </>
  )
}
