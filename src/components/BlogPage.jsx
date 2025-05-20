import React, { useEffect } from 'react'
import blog1Img from '../assets/blog-1-bg.png'
import { blogPagesData } from '../data/blogPagesData'
import { useParams } from 'react-router-dom'
import { Subscribe } from './Subscribe'


export const BlogPage = () => {
    const { id } = useParams();
    const blogData = blogPagesData.find((blog) => blog.id == id);
    
    console.log(blogData);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);


  return (
    <div className='flex flex-col justify-center p-2 sm:p-4 gap-3'>
        <h1
        className='my-5 text-left text-4xl sm:text-5xl md:text-6xl font-bold'
        >{blogData.title}
        </h1>
        <p
         className='font-light text-gray-600 text-left text-1xl sm:text-2xl md:text-3xl'
         >{blogData.summary}</p>
        <img 
        src={blog1Img}
        alt="Blog-1-Img"
        className='w-full h-96 sm:w-[700px] sm:mx-auto object-cover rounded-lg shadow-lg'
         />

        <div>
            {blogData.sections.map((section,index)=> (
                <div key={blogData.id}>
                    <h2
                    className='mt-5 text-left text-2xl sm:text-3xl md:text-4xl font-semibold'>
                    {section.heading}
                    </h2>
                    <p 
                    className='mt-5 text-left text-lg sm:text-xl md:text-2xl' > 
                    {section.content}
                    </p>
                </div>

            ))}
        </div>
      <Subscribe />
    </div>
  )
}
