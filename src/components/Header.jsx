import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { SUPPORTED_LANGUAGES, USER_AVTAR } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {LOGO} from '../utils/constants'
import { signOut } from 'firebase/auth';
import { ToggleGpt } from '../utils/gptSlice';
import { changeLanguage } from '../utils/appConfigSlice';

export const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const showGptSearchPage = useSelector((store) => store.gpt.showComponent)
  
  
  const handleShowGptSearch = () =>{
    dispatch(ToggleGpt())
  }
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate("/")
    // As the logic is there in the onAuthStateChanged
    }).catch((error) => {
      // An error happened.
     // navigate("/error")
    });
  }
  
  const handleLangChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  
  useEffect(()=>{
   const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid,displayName,email} = user;
        dispatch(addUser({uid:uid , displayName:displayName , email:email}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        // ...
      }
     
    });
    return () => unsubscribe()
  },[])

  return (
    <>
      <div className='absolute w-screen bg-gradient-to-b from-black to-transparent z-50 flex justify-between'>
        <img className='  w-44 ml-16 pt-6' src={LOGO} alt=''></img>
        {user && (
           <div className='flex mt-10 mr-7  h-10'>
            {showGptSearchPage && 
             <select className='mr-3 p-2 bg-gray-700 text-white' onChange={handleLangChange} >
             {SUPPORTED_LANGUAGES.map((language)=> <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
             
           </select>
            }
           
            <button className='bg-purple-500 text-white rounded-lg px-3 mr-4' onClick={handleShowGptSearch}>{showGptSearchPage? 'Home' : "GPT Search"}</button>
           <img className="w-9 mr-3" src={USER_AVTAR} alt=''/>
             <button onClick={handleSignOut} className='text-red-600 font-bold text-xl cursor-pointer'>Sign Out</button>
           </div>
        )}
       
    </div>
       
    </>
  
  )
}
