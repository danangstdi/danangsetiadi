"use client"

import Link from "next/link"
import { Book, Boxes, House, Link45deg, Moon } from "react-bootstrap-icons"
import Swal from "sweetalert2"

export default function BottomNav() {
  const menuLists = [
    {url: '/', label: 'Home', icon: <House size={18}/>},
    {url: '/blog', label: 'Blog', icon: <Book size={18}/>},
    {url: '/forum', label: 'Dark', icon: <Moon size={18}/>},
    {url: '/project', label: 'Project', icon: <Boxes size={18}/>},
    {url: '/gallery', label: 'Social', icon: <Link45deg size={18}/>},
  ]

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
        {menuLists.map((menu) => (
          <li key={menu.url} className="w-full">
            {/* <button type="button" onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 hover:text-emerald-500 dark:text-slate-100">
              {menu.icon}
              <p className="text-[.65rem]">{menu.label}</p>
            </button> */}
            <Link href='' onClick={handleToast} className="text-gray-700 flex flex-col justify-center items-center gap-1 hover:text-emerald-500 dark:text-slate-100">
              {menu.icon}
              <p className="text-[.65rem]">{menu.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
