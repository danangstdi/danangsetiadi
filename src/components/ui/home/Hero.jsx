import Image from "next/image"
import Link from "next/link"
import { RocketTakeoff } from "react-bootstrap-icons"
import Avatar from '@/../public/img/avatar.webp'

export default function Hero() {
  return (
    <section id="hero" className="mt-24 grid overflow-hidden max-h-[48rem] lg:grid-cols-2 lg:max-h-[28rem]">
       <div className="flex flex-col items-start gap-8 mt-10 mx-4 lg:mt-32 lg:ml-48 lg:mr-0">
         <small className="font-semibold lg:text-xl">Hello I&apos;m</small>
         <h1 className="text-4xl -my-6 poppins-bold text-emerald-400 lg:text-6xl lg:my-0">
           DANANG <span>SETIADI</span>
         </h1>
         <p className="line-height-2 text-sm text-gray-600 lg:text-base">We offer specialized <strong>website development</strong> services for web developers. With various categories, we also provide complete <strong>resources to develop your web projects.</strong></p>
         <Link href='' className="text-xs flex items-center gap-2 py-3 px-12 bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full text-white shadow-lg group lg:text-sm">
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
