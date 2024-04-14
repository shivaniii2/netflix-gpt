import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'

export const GptSearchBar = () => {
  
const langKey = useSelector((store) => store.appConfig.preferedLanguage)
  return (
        <div className='bg-black mt-[15%]'>
              <form className='flex justify-between p-2 pl-4 w-[50vw] border-black border'>
            <input className='w-[80%] px-2  rounded-lg' type="text" placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='px-14 py-3 ml-2 bg-red-500 rounded-lg'>{lang[langKey].search}</button>
        </form>
        </div>
      
  
  )
}
