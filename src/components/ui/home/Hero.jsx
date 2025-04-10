"use client"

import Image from "next/image"
import Link from "next/link"
import { RocketTakeoff } from "react-bootstrap-icons"
import Avatar from '@/../public/img/avatar.webp'
import Typewriter from 'typewriter-effect'; 
import Swal from "sweetalert2"

export default function Hero() {
    const handleToast = () => {
      return Swal.fire({
        title: "",
        text: "Mohon maaf, Web masih dalam tahap pengembangan",
        icon: "warning"
      });
    }

  return (
    <section id="hero" className="mt-24 grid overflow-hidden max-h-[46rem] lg:grid-cols-2 lg:max-h-[35rem]">
       <div className="flex flex-col items-start gap-8 mt-10 mx-4 lg:mt-32 lg:ml-48 lg:mr-0">
         <small className="font-semibold lg:text-xl dark:text-slate-100">Hello I&apos;m</small>
         <div className="flex gap-1">
          <h1 className="text-4xl -my-6 poppins-bold text-emerald-400 lg:text-6xl lg:my-0">
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
          <h1 className="h1-outline text-4xl -my-6 poppins-bold lg:text-6xl lg:my-0 dark:h1-outline-white">
            SETIADI
          </h1>
         </div>
         <p className="line-height-2 text-sm text-gray-600 lg:text-base dark:text-slate-300">
            We offer specialized <strong>website development</strong> services for web developers. With various categories, we also provide complete <strong>resources to develop your web projects.</strong>
        </p>
         <Link href='' onClick={handleToast} className="text-xs flex items-center gap-2 py-3 px-12 bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full text-white shadow-lg group lg:text-sm">
           <RocketTakeoff size={18} className="group-hover:rotate-45 group-hover:mr-3 group-hover:duration-300 group-hover:ease-in-out"/>
           Projects
         </Link>
       </div>
      <figure className="flex justify-center mt-10 lg:h-full lg:mt-0 lg:justify-start lg:ml-28">
        <Image src={Avatar} alt="" className="h-full w-fit drop-shadow-2xl"/>
      </figure>
    </section>
  )
}
