import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

function LeftBanner() {
    const [text] = useTypewriter({
        words: ["Coder.", "Full Stack Developer.", "Java Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
   
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">
              Vijay Krishna Chauhan
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a{" "}
            <span>
              {text}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </span>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          My journey into the world of programming started with Java, a language that has captured my heart ever since.
           From designing algorithms to building robust applications,
           I find joy in solving complex problems and creating software that stands the test of time.<br/>
           My expertise lies in front-end and back-end development, where I combine my creativity with technical skills to build seamless online solutions.
          </p>
        </div>
        
          <Media/>
        </div>
   
  )
}

export default LeftBanner