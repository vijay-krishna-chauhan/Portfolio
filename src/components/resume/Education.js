import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'

function Education() {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BTech Computer Science and Engineering"
              subTitle="Galgotias College of Engineering & Technology (2020 - present)"
              result="8.25/10"
              des="My education has honed my analytical thinking, teamwork, and communication skills, empowering me to create impactful digital solutions. I am dedicated to pushing the boundaries of what's possible in the tech world."
            />
            <ResumeCard
              title="Class XII"
              subTitle="St. Xavier's High School (2019)"
              result="77.2%"
              des=" I successfully completed my Class 12th education with dedication and determination. My academic journey at this level instilled in me a strong foundation in various subjects and honed my critical thinking skills."
            />
            <ResumeCard
              title="Class X"
              subTitle="St. Xavier's High School (2017)"
              result="10/10"
              des="Embark on a glimpse of my academic voyage during 10th grade, where I embraced diverse subjects, tackled challenges head-on, and nurtured a passion for learning."
            />
          </div>
        </div>

        {/* <div className="w-1/2">
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">2021-2021</p>
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="mt-6  lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
          </div>
        </div> */}
        <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Intern"
            subTitle="The Sparks Foundation - (2021)"
            result="Remote"
            des="Designed and developed a website focused on payment gateway integration during my internship. Implemented HTML, CSS, and JavaScript to create an intuitive and visually appealing user
interface."
          />
          
        </div>
      </div>
      </motion.div>
  )
}

export default Education