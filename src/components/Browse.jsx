import React from 'react'
import {Header} from "./Header";
import {auth} from "../utils/firebase"
import { signOut } from 'firebase/auth';
import { USER_AVTAR } from '../utils/constants';
import FirstContainer from './FirstContainer';
import { SecondContainer } from './secondContainer';
import UseGetNowPlaying from '../utils/usegetNowPlaying.';


export const Browse = () => {
  UseGetNowPlaying()
  
  //const navigate = useNavigate()
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
  
  
  return (
    <div className='flex justify-between'>
      <div>
      <Header/>
      <FirstContainer/>
      <SecondContainer/>
      </div>
      
      <div className='flex mt-10 mr-7 z-50 h-10'>
      <img className="w-9 mr-3" src={USER_AVTAR}/>
        <button onClick={handleSignOut} className='text-red-600 font-bold text-xl cursor-pointer'>Sign Out</button>
      </div>
    </div>
  )
}
