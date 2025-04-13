"use client"

import dynamic from 'next/dynamic';
import Link from "next/link"
import { Book, Boxes, House, Person } from "react-bootstrap-icons"
import Swal from "sweetalert2"
const ThemeTogglerBottomNav = dynamic( () => {
  return import( '../partials/button/ThemeTogglerBottomNav' );
}, { ssr: false } );

export default function BottomNav() {
  const handleToast = () => {
    return Swal.fire({
      title: "",
      text: "Mohon maaf, Web masih dalam tahap pengembangan",
      icon: "warning"
    });
  }

  return (
    <nav className='fixed z-30 bottom-nav-animate inset-x-0 bottom-0 h-[3.7rem] border-t bg-white bg-opacity-90 backdrop-blur-md md:hidden dark:bg-slate-900 dark:bg-opacity-90 dark:border-t-slate-700'>
      <ul className="flex items-center justify-between h-full">
        <li className="w-full">
           <Link href='/' onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 dark:text-slate-100">
            <House size={18}/>
            <p className="text-[.65rem]">Home</p>
          </Link>
        </li>
        <li className="w-full">
           <Link href='' onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 dark:text-slate-100">
            <Book size={18}/>
            <p className="text-[.65rem]">Blog</p>
          </Link>
        </li>
        <li className="w-full">
          <ThemeTogglerBottomNav/>
        </li>
        <li className="w-full">
           <Link href='' onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 dark:text-slate-100">
            <Boxes size={18}/>
            <p className="text-[.65rem]">Project</p>
          </Link>
        </li>
        <li className="w-full">
           <Link href='' onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 dark:text-slate-100">
            <Person size={18}/>
            <p className="text-[.65rem]">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
