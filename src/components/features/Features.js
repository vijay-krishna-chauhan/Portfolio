import React from 'react'
import Title from '../layouts/Title'
import {AiFillAppstore} from 'react-icons/ai'
import {BsBook, BsCode} from 'react-icons/bs'
import {FaJava, FaNodeJs,FaLightbulb} from 'react-icons/fa'
import Cards from './Cards'

function Features() {
  return (
    <section id='features' className='w-full  py-20 border-b-[1px] border-b-black'>
        <Title title="Features" des="What I do"/>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
            
            <Cards
            title="Full Stack Development"
            des="I possess full stack capabilities, meaning I can handle both frontend and backend development. "
              icon={<FaNodeJs/>}
            />
            <Cards
            title="Lifelong Learner"
            des="In the dynamic world of technology, I recognize the importance of continuous learning. I'm committed to staying updated with the latest industry trends, tools, and methodologies. "
              icon={<BsBook/>}
            />
            <Cards
            title="Web development"
            des="As a web developer, I create user-friendly websites using a combination of HTML,
              CSS, and JavaScript. I'm well-versed in responsive design,
               ensuring that websites."
              icon={<BsCode/>}
            />
            <Cards
            title="Java Development"
            des="With a strong passion for Java programming,
             I specialize in developing robust and scalable Java
              applications. Solving complex problems using algorithms."
              icon={<FaJava/>}
            />
            <Cards
            title="Problem Solver"
            des="At the heart of my approach is my problem-solving mindset. Whether it's debugging a complex issue, optimizing code for efficiency, or finding creative solutions to technical challenges. "
              icon={<FaLightbulb/>}
            />
        
        </div>
        
    </section>
  )
}

export default Features