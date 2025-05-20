import React, { useRef,useEffect } from 'react'
import { Card } from './Card'
import { blogCardsData } from '../data/blogCardsData'
import { Subscribe } from './Subscribe'
import { useLocation } from 'react-router-dom'

export const LandingPage = () => {
    const location = useLocation();
    const aboutRef = useRef(null);
    const blogRef = useRef(null);
    const subscribeRef = useRef(null);

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });   
    }

    useEffect(()=>{
        if(location.hash){
            const element = document.querySelector(location.hash);
            if(element){
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },[location]);




  return (
    <>
       <main className='mt-20 flex flex-col items-center justify-center '>

         <h1 
         id='headLine'
         className='mb-5 text-center text-3xl sm:text-4xl md:text-5xl font-bold '
         >Turning Everyday Problems Into Web-Based Solutions
         </h1>
         <h2 className='mt-6 text-center text-2xl sm:text-3xl md:text-4xl font-light'>A Blog That Reflects My Problem-Solving Mindset

         </h2>

         <div className='mt-10 px-8  flex justify-center gap-8' >
           <button 
           onClick={() => scrollToSection(blogRef)}
           className = 'font-bold border rounded-md border-indigo-600 bg-indigo-500 hover:bg-indigo-700 text-white mt-1 px-4 py-4 sm:px-9 sm:py-6' >Read Blogs</button>
           <button 
           onClick={() => scrollToSection(subscribeRef)}
           className = 'font-bold border rounded-md border-indigo-600 bg-indigo-100 hover:bg-indigo-700 hover:text-white text-indigo-800 mt-1 px-4 py-4 sm:px-9 sm:py-6' >Subscribe</button>
         </div>
      </main>

      <section className='ml-2'>
        <h2
        id='about' 
        ref={aboutRef} 
        className='mt-5 text-left text-2xl sm:text-3xl md:text-4xl font-semibold'>About</h2>
        <p className='mt-5 text-left text-lg sm:text-xl md:text-2xl font-light'>
        Welcome to my Blog! Here's where I share what I notice, what bothers me, and what I'd build to fix it.
        I break down real-world problems and explore how web-based solutions might help.
        Each post includes honest analysis, pros and cons, and my thought process as a problem-solver.
        Whether you're a student, builder, or just curious,this blog is a space to think aloud
        about how simple tech ideas can solve real-world problems.
        </p>
      </section>

    <section className='ml-2'>
      <h2
      id='blog' 
      ref={blogRef}
      className='mt-5 text-left text-2xl sm:text-3xl md:text-4xl font-semibold'>Latest Blogs</h2>
      <div className='mt-5 mb-10 flex flex-wrap gap-6 justify-center'>
        {blogCardsData.map((blogCardData) => (
          <Card key={blogCardData.id} cardData={blogCardData} />
        ))} 
      </div>
    </section>
    <Subscribe innerRef={subscribeRef}/>
      
    </>
    

   
  )
}
