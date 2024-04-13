import React from 'react'

export const VideoTitle = ({title,overview}) => {
  return (
    <div className='ml-14 w-[500px] absolute mt-80 text-white z-50'>
       <h1 className='text-5xl font-bold mb-4'>
        {title}
       </h1>
       <p className='font-bold'>{overview}</p>
       <div className='flex mt-4'>
        <button className='bg-white text-black rounded-lg mr-3 w-24 py-3'> ▶️Play</button>
        <button className='bg-gray-500 text-white rounded-lg mr-3 w-24 py-3 bg-opacity-50'>More Info</button>
       </div>
        </div>
  )
}
