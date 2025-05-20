import React from 'react'
import blog1Img from '../assets/blog-1-bg.png'
import { useNavigate } from 'react-router-dom'

export const Card = ({cardData}) => {

    const navigate = useNavigate();
  return (
    <div >
        <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[300px] sm:w-[400px]'>
            <img src={blog1Img} alt="Blog 1" className='w-full h-48 object-cover' />
            <div className='p-4'>
            <h2 className='text-xl font-bold'>{cardData.title}</h2>
            <p className='text-slate-800'>{cardData.caption}</p>
            <div className='mt-2 flex items-center text-sm text-gray-500 space-x-2'>
                <span>{cardData.date}</span>
                <span>•</span>
                <span>{cardData.time}</span>
              </div>
            <button 
              className='mt-4 border-indigo-600 bg-indigo-100 hover:bg-indigo-700 hover:text-white text-indigo-800  py-2 px-4 rounded'
              onClick={() => navigate(`/blog/${cardData.id}`)}
              >Read More</button>
            </div>
        </div>
    </div>
  )
}
