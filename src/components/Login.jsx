import React, { useState , useRef} from 'react'
import { Header } from './Header'
import validateData from '../utils/validation'

export const Login = () => {
    const[isSignIn, setSignIn] = useState(true);
    const[errMsg,setErrMsg] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const fullname = useRef(null)
    const toggleSignIn = () =>{
        setSignIn(!isSignIn)
    }
    
     const validateDataGiven = () =>{
      
        const message =  isSignIn? validateData(email.current.value,password.current.value): validateData(email.current.value,password.current.value, fullname.current.value);
       setErrMsg(message)
       
       
       
     }
  return (


        
    <div className=''>
          <Header/>
          <div >
          <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
          </div>    
        <form onSubmit={e => e.preventDefault()} className='absolute bg-black top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-[27%] rounded-lg bg-opacity-80' >
            <h1 className='text-3xl py-6 ml-16'>{isSignIn? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type="text" ref={fullname} placeholder='Enter Full Name' className='p-3  ml-16 mb-6 w-[70%] bg-gray-800 rounded-lg'  /> }
           
           <input ref={email} type="text" placeholder='Enter email' className='p-3  ml-16 mb-6 w-[70%] bg-gray-800 rounded-lg'  /> 
           <input ref={password} type="password" placeholder='Enter password' className='p-3 ml-16  mb-6 w-[70%] bg-gray-800 rounded-lg' /> 
           <p className='p-3 ml-16  mb-2 text-red-600'>{errMsg}</p>
           <button onClick={validateDataGiven}  className='p-3 ml-16 mb-6  w-[70%] bg-red-700 rounded-lg'>{isSignIn? "Sign In" : "Sign Up"}</button>
           <p  onClick={toggleSignIn} className='p-3 ml-16 mb-8 cursor-pointer ' >New to Netflix? Sign up now.</p>
        </form>
        </div>
    
    
      
  

  

 
  )
}
