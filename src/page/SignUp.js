import React from 'react'
import Logo from '../Component/Logo'
import Link from '../Component/Link'
import Motivation from './layout/Motivation'




export default function SignUp() {
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
            <input className=" appearance-none Inter-font mr-2 rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="firstName" type="text" placeholder="First Name" />
            <input className=" appearance-none Inter-font   rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="lastName" type="text" placeholder="Last Name" />
            </div>
            <input className=" appearance-none Inter-font mt-2 rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="email" type="email"  placeholder="Email" />
            <div className='flex '>
            <input className=" appearance-none Inter-font mt-2 mr-2 rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="password" type="text" placeholder="Password" />
            <input className=" appearance-none Inter-font  mt-2  rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="rePassword" type="text" placeholder="Repeat Password" />
            </div>
            <div className='flex '>
            <input className=" appearance-none Inter-font mt-2 mr-2 rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" id="birday" type="date" placeholder="MM/DD/YYYY" />
            <select id="City" class="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option selected>City</option>
              <option value="ma">Marrakech</option>
              <option value="ra">Rabat</option>
              <option value="casa">Casablanca</option>
              <option value="agad">Agadir</option>
            </select>
            </div>
            <select id="currentSchool" class="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option selected>Current School</option>
              <option value="ma">ISMAGI</option>
              <option value="ra">EMSI</option>
              <option value="casa">ENSA</option>
              <option value="agad">ENCG</option>
            </select>
            <select id="field" class="bg-gray-100 mt-2 text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
              <option selected>Field</option>
              <option value="ma">Full-stack developer</option>
              <option value="ra">graphic designer</option>
              <option value="casa">Marketing</option>
              <option value="agad">Comptabel</option>
            </select>
            <div class="flex items-center mt-2">
                <input id="link-checkbox" type="checkbox" value="" class="w-3 h-3 primary-color bg-gray-200  rounded " />
                <label for="link-checkbox" class="ms-2 text-sm font-medium Inter-font text-gray-500 ">I agree with the <a href="#" class="primary-color hover:underline">terms and conditions</a> and <a href="#" class="primary-color hover:underline">Privacy Policy </a>.</label>
            </div>

              <button className='outfit-font font-black text-xl primary-background text-white w-full py-3 rounded-xl mt-3 hover:hover-primary-background hover:text-gray-50 ease-in duration-200'>Sign Up</button>
            </form>
            </div>
        </div> 
    <Motivation  />
        
   
    </div>

    </>
  )
}
