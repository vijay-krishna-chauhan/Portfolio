import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
      
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/*  */}
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Web Development Intern"
            subTitle="The Sparks Foundation - (2021)"
            result="Remote"
            des="Designed and developed a website focused on payment gateway integration during my internship. Implemented HTML, CSS, and JavaScript to create an intuitive and visually appealing user
interface."
          />
        </div>
      </div>
      <div>
        
      </div>
    </motion.div>
  )
}

export default Experience