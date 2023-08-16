import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJava, FaNodeJs} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://www.facebook.com/profile.php?id=100012951392357'><FaFacebookF /></a>
              
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/chauhanvijaykr'><FaTwitter /></a>
              
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/vijay-krishna-chauhan/'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media