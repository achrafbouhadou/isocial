import React, { useRef, useState } from 'react'
import Logo from '../Component/Logo'
import Link from '../Component/Link'
import Motivation from './layout/Motivation'
import InputText from '../Component/InputText'
import InputError from '../Component/InputError'
import axios from 'axios'





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
  let [errorMessageFromBack, setErrorMessageFromBack] = useState('')

  // function that handle  validation  for signup form
  const validation = ()=>{
    let newErrors = {};

    if (firstName.current.value.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (lastName.current.value.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }
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
    if (rePassword.current.value.trim() === '') {
      newErrors.rePassword = 'repate Password is required';
    }else if (rePassword.current.value !== password.current.value) {
      newErrors.rePassword = 'Passwords do not match';
    }
    if (birday.current.value == '') {
      birday.lastName = 'birtday is required';
    }
    if (City.current.value === '') {
      newErrors.City = 'City is required';
    }
    if (currentSchool.current.value === '') {
      newErrors.currentSchool = 'currentSchool is required';
    }
    if (field.current.value === '') {
      newErrors.field = 'field is required';
    }
    if (birday.current.value === '') {
      newErrors.birday = 'birthday is required';
    }
    if (!linkCheckbox.current.checked ) {

      newErrors.linkCheckbox = 'you must accepte the terms and privacy';
    }
    return newErrors;
  }

  /// function that handle submite 
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    validation();
    if (Object.keys(validation()).length === 0) {
      const userData = {
        firstname:firstName.current.value,
        lastName:lastName.current.value,
        email:email.current.value,
        password:password.current.value,
        rePassword:rePassword.current.value,
        birday:birday.current.value,
        currentSchool:currentSchool.current.value,
        field:field.current.value,
        City:City.current.value,
      }
      try {
        var signupApi = 'http://localhost:8888/isocial_Backend/auth/signup.php'
        const response = await axios.post(signupApi,userData)
       if(!response.data.success ){
        console.log(response.data)
        setErrorMessageFromBack(response.data.message)
        console.log(errorMessageFromBack)
       }
      } catch (error) {
        console.log(error)
      }
      setErrorMessage({})
     
    } else {
     
      setErrorMessage(validation());
      console.log(errorMessage);
    }
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
            <InputError message={errorMessageFromBack} />
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
                <InputError message={errorMessage.email} />
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
                <InputError message={errorMessage.password} />

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
                <InputError message={errorMessage.rePassword} />
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
                  <InputError message={errorMessage.birday} />
              </div>
          <div className='mt-2 w-full '>
          <select required ref={City} defaultValue="" id="City" className="bg-gray-100 w-full  text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block py-3 px-3 ">
              <option value="">City</option>
              <option value="ma">Marrakech</option>
              <option value="ra">Rabat</option>
              <option value="casa">Casablanca</option>
              <option value="agad">Agadir</option>
            </select>
            <InputError message={errorMessage.City} />
          </div>
            
            </div>
            <div className='mt-2'>
            <select required ref={currentSchool} defaultValue="" id="currentSchool" className="bg-gray-100  text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option value="">Current School</option>
              <option value="ma">ISMAGI</option>
              <option value="ra">EMSI</option>
              <option value="casa">ENSA</option>
              <option value="agad">ENCG</option>
            </select>
            <InputError message={errorMessage.currentSchool} />
            </div>
            
            <div className='mt-2'>
              <select required ref={field} defaultValue="" id="field" className="bg-gray-100  text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
                <option value="">Field</option>
                <option value="1">Full-stack developer</option>
                <option value="2">graphic designer</option>
                <option value="3">Marketing</option>
                <option value="4">Comptabel</option>
              </select>
              <InputError message={errorMessage.field} />
            </div>
            
            <div className="items-center mt-2">
                <div>
                  <input required ref={linkCheckbox} id="linkCheckbox" type="checkbox" value="" className="w-3 h-3 primary-color bg-gray-200  rounded " />
                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium Inter-font text-gray-500 ">I agree with the <a href="#" className="primary-color hover:underline">terms and conditions</a> and <a href="#" className="primary-color hover:underline">Privacy Policy </a>.</label>
                </div>
                  <InputError message={errorMessage.linkCheckbox} />
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
