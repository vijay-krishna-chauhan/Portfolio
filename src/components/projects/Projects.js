import React from 'react'
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';

import ProjectsCard from './ProjectsCard';
function Projects() {
  return (
    // <section id="projects"
    // className='w-ful py-20 border-b-[1px] border-b-black'>
    //     <div className='flex justify-center items-center text-center'>
    //     <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
    //     </div>
    //     <div className='grid grid-cols-3 gap-14'>
    //         <ProjectCard />
    //         <ProjectCard />
    //         <ProjectCard />
    //         <ProjectCard />
    //         <ProjectCard />
    //     </div>
    // </section>

    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Recipe Information Website"
          des=" Implemented a full-stack web application using the MERN technology stack. Integrated the Mealdb
          API to enable users to search for meals based on their preferences.
          "
          src={projectOne}
        />
        <ProjectsCard
          title="Foundation Website"
          des=" The website facilitated seamless fund transfers from users to the designated bank account.
          Implemented HTML, CSS, and JavaScript to create an intuitive and visually appealing user
          interface. Integrated the Razorpay payment gateway to enable secure and efficient transactions"
          src={projectTwo}
        />
        <ProjectsCard
          title="Portfolio Website"
          des=" Designed and developed a personal portfolio website to showcase my skills, experience and projects."
          src={projectThree}
        />
        
      </div>
    </section>
  )
}

export default Projects