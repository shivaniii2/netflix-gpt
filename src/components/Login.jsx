import React, { useState } from 'react'
import { Header } from './Header'

export const Login = () => {
    const[isSignIn, setSignIn] = useState(true)
    const toggleSignIn = () =>{
        setSignIn(!isSignIn)
    }
  return (


        
    <div className=''>
          <Header/>
          <div >
          <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
          </div>    
        <form className='absolute bg-black top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-[27%] rounded-lg bg-opacity-80' >
            <h1 className='text-3xl py-6 ml-16'>{isSignIn? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type="text" placeholder='Enter Full Name' className='p-3  ml-16 mb-6 w-[70%] bg-gray-800 rounded-lg'  /> }
           
           <input type="text" placeholder='Enter email' className='p-3  ml-16 mb-6 w-[70%] bg-gray-800 rounded-lg'  /> 
           <input type="password" placeholder='Enter password' className='p-3 ml-16  mb-6 w-[70%] bg-gray-800 rounded-lg' /> 
           <button  className='p-3 ml-16 mb-6  w-[70%] bg-red-700 rounded-lg'>{isSignIn? "Sign In" : "Sign Up"}</button>
           <p  onClick={toggleSignIn} className='p-3 ml-16 mb-8 cursor-pointer ' >New to Netflix? Sign up now.</p>
        </form>
        </div>
    
    
      
  

  

 
  )
}
