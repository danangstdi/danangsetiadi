"use client"

import Image from "next/image"
import { RocketTakeoff } from "react-bootstrap-icons"
import Avatar from '@/../../public/img/avatar.png'
import Typewriter from 'typewriter-effect'; 

export default function Hero() {
  const handleEmail = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "mailto:danangsetiadi2003@gmail.com";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=danangsetiadi2003@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <section id="hero" className="mt-24 grid lg:grid-cols-2">
       <div className="flex flex-col items-start gap-8 mt-10 mx-4 lg:mt-32 lg:ml-20 xl:ml-48 lg:mr-0">
         <small className="font-semibold lg:text-xl dark:text-slate-100">Hello I&apos;m</small>
         <div className="flex gap-1">
          <h1 className="text-4xl -my-6 poppins-bold text-cyan-400 lg:text-7xl lg:my-0">
            <Typewriter 
              options={{
                loop: true
              }}
              onInit={(typewriter) => { 
                typewriter.typeString('DANANG') 
                  .pauseFor(2500) 
                  .deleteAll() 
                  .start(); 
              }} 
            /> 
          </h1>
          <h1 className="h1-outline text-4xl -my-6 poppins-bold lg:text-7xl lg:my-0 dark:h1-outline-white">
            SETIADI
          </h1>
         </div>
         <p className="line-height-2 text-sm text-gray-600 lg:text-base dark:text-slate-300">
            We offer specialized <strong>digital development and design</strong> services for various projects. With various categories, we also provide complete <strong>resources to help bring your projects to life.</strong>
        </p>
         <button onClick={handleEmail} className="text-xs flex items-center gap-2 py-3 px-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full text-white shadow-lg group lg:text-sm">
           <RocketTakeoff size={18} className="group-hover:rotate-45 group-hover:mr-3 group-hover:duration-300 group-hover:ease-in-out"/>
           Contact Me
         </button>
       </div>
      <figure className="flex justify-center mt-10 h-3/4 sm:h-[85%] lg:h-[145%] lg:mt-0 lg:justify-start lg:ml-28">
        <Image src={Avatar} alt="" className="h-full w-fit z-10 drop-shadow-2xl"/>
      </figure>
    </section>
  )
}
