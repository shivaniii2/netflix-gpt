import React from 'react'
import { CDN_URL } from '../utils/constants';

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 min-w-52 px-3'>
        <img src={CDN_URL+ posterPath} alt=''></img>
    </div>
  )
}
