import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {LOGO} from '../utils/constants'

export const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    <div className='absolute w-screen bg-gradient-to-b from-black to-transparent z-50'>
        <img className='  w-44 ml-16 pt-6' src={LOGO} alt=''></img>
    </div>
  )
}
