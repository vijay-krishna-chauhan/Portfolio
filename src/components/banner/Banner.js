import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
