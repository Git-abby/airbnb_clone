import { Title } from '@mui/icons-material'
import React from 'react'

export const Card = ({src, title, description}) => {
  return (
    <div className='card flex flex-col border w-[400px] gap-3 p-2 mt-5 hover:scale-105 transition-transform'>
        <div className='card_img w-full h-full'>
            <img src={src} alt={title} className='w-full h-full object-fill'/>
        </div>
        <div className='flex flex-col p-2 items-start'>
            <h2 className='text-[17px] font-semibold'>{title}</h2>
            <p className='text-sm p-1'>{description}</p>
            <button className='border border-rose-400 mt-1 px-2 py-1 hover:bg-red-400 hover:text-white transition-colors'>Read More</button>
        </div>
    </div>
  )
}
