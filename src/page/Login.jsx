import React, { useRef, useState,useContext, useEffect }  from 'react'

import Logo from '../Component/Logo'
import Link from '../Component/Link'
import Motivation from './layout/Motivation'
import InputText from '../Component/InputText'
import InputError from '../Component/InputError'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';




export default function Login
() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast()
  const email = useRef();
  const password = useRef();
  let [errorMessage, setErrorMessage] = useState({})

  useEffect(() => {
    if (isLoggedIn) {
        navigate('/'); 
    }
}, [isLoggedIn, navigate]);

  
  const validate = ()=>{
    let newErrors = {};
    if (email.current.value.trim() === '') {
      newErrors.email = 'email is required';
    }
    
    if (password.current.value === '') {
      newErrors.password = 'password is required';
    }
    return newErrors
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    validate()

   
   
   
    if(Object.keys(validate()).length==0){
        setErrorMessage({});
        const userData = {
          email:email.current.value,
          password:password.current.value
        }
        try {
          const loginApi = 'http://localhost:8888/isocial_Backend/auth/login.php'
        const response = await axios.post(loginApi,userData);
        console.log(response.data);
        
        if(!response.data.success){
          toast({
            title: response.data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }else{
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
          console.log(response.data.token) // output eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjgsImlhdCI6MTcwNDc4NTk5MCwiZXhwIjoxNzA0ODAwMzkwfQ.Edy8lTTwaQUNpy20Mm5-5OEghv_p3NJkBYf2xfnssl8
          login(response.data.token)
          navigate('/');
        }
        } catch (error) {
          console.log(error)
        }
        

        

    }else{
      setErrorMessage(validate()); 
    }
  };
  return (
    
     <>
    <div className='flex  justify-center h-screen'>
       <div className='w-1/2 flex justify-center'>
        <div className='w-80  mt-16'>
            <Logo  width={67} height={52} color={"#001D31"} />
            <h1 className="font-black text-3xl mt-6  outfit-font ">
            Login
            </h1>
            <div className='flex mb-6 '>
              <h3 className='mr-2'>Don’t have an account?</h3>
             <Link className={"primary-color"}  link={'#'} title={'Sign Up'} />
            </div>
            <form>
           
            
              <div className=" w-full mt-2" > 
                <InputText 
                defaultValue=""
                id="email" 
                type="email"  
                placeholder="Email"
                ref={email}
                className={' w-full'}
                required
                />
                <InputError message={errorMessage.email} />
              </div>
           

           
              <div className=" mt-2">
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
          
            
           
            
            
            

              <button onClick={handleSubmit} className='outfit-font font-black text-xl primary-background text-white w-full py-3 rounded-xl mt-3 hover:hover-primary-background hover:text-gray-50 ease-in duration-200'>Login</button>
            </form>
            </div>
        </div> 
    <Motivation  />
        
   
    </div>

    </>
  )
}
