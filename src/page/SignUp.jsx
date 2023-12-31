import React, { useRef, useState } from 'react'
import Logo from '../Component/Logo'
import Link from '../Component/Link'
import Motivation from './layout/Motivation'
import InputText from '../Component/InputText'
import InputError from '../Component/InputError'





export default function SignUp() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const City = useRef();
  const currentSchool = useRef();
  const birday = useRef();
  const field = useRef();
  const linkCheckbox = useRef();
  
  let [errorMessage, setErrorMessage] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    let newErrors = {};

    if (firstName.current.value.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (lastName.current.value.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }

    setErrorMessage(newErrors); // Update the state with new error object
  };

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
       <div className='w-1/2 flex items-center justify-center'>
        <div>
            <Logo  width={67} height={52} />
            <h1 className="font-black text-3xl mt-6  outfit-font ">
            Create Account
            </h1>
            <div className='flex mb-6 '>
              <h3 className='mr-2'>Already A Member?</h3>
             <Link  link={'#'} title={'log in'} />
            </div>
            <form>
            <div className='flex '>
              <div className=" mr-2">
                <InputText  
                defaultValue=""
                id="firstName" 
                type="text" 
                placeholder="First Name"
                isFocused={true}
                ref={firstName}
                required
                />
                <InputError message={errorMessage.firstName} />
              </div>
              <div>
                <InputText className=" " 
                defaultValue=""
                id="lastName" 
                type="text" 
                placeholder="Last Name"
                ref={lastName}
                required
                />
                <InputError message={errorMessage.lastName} />
              </div>
              
            </div>
              <div className=" mt-2" > 
                <InputText 
                defaultValue=""
                id="email" 
                type="email"  
                placeholder="Email"
                ref={email}
                required
                />
              </div>
           

            <div className='flex '>
              <div className=" mt-2 mr-2 ">
                <InputText  
                defaultValue=""
                iid="password" 
                type="password" 
                placeholder="Password"
                ref={password}
                required
                />
              </div>
              <div className=" mt-2">
                <InputText  
                defaultValue=""
                id="rePassword" 
                type="password" 
                placeholder="Repeat Password"
                ref={rePassword}
                required
                />
              </div>
             
            </div>
            <div className='flex '>
              <div className=" mt-2 mr-2">
                <InputText  
                defaultValue=""
                id="birday" 
                type="date" 
                placeholder="MM/DD/YYYY"
                ref={birday}
                required
                />
              </div>
          
            <select required defaultValue="" id="City" className="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option value="">City</option>
              <option value="ma">Marrakech</option>
              <option value="ra">Rabat</option>
              <option value="casa">Casablanca</option>
              <option value="agad">Agadir</option>
            </select>
            </div>
            <select required defaultValue="" id="currentSchool" className="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option value="">Current School</option>
              <option value="ma">ISMAGI</option>
              <option value="ra">EMSI</option>
              <option value="casa">ENSA</option>
              <option value="agad">ENCG</option>
            </select>
            <select required defaultValue="" id="field" className="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option value="">Field</option>
              <option value="ma">Full-stack developer</option>
              <option value="ra">graphic designer</option>
              <option value="casa">Marketing</option>
              <option value="agad">Comptabel</option>
            </select>
            <div className="flex items-center mt-2">
                <input required id="linkCheckbox" type="checkbox" value="" className="w-3 h-3 primary-color bg-gray-200  rounded " />
                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium Inter-font text-gray-500 ">I agree with the <a href="#" className="primary-color hover:underline">terms and conditions</a> and <a href="#" className="primary-color hover:underline">Privacy Policy </a>.</label>
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
