"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-bootstrap-icons";

export default function ThemeTogglerNav() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button type='button'  onClick={handleToggle} className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
        {theme == 'dark' 
        ? <><Moon size={20}/>
          <p className='text-sm'>Dark Mode : On</p></>
        : <><Sun size={20}/>
          <p className='text-sm'>Dark Mode : Off</p></>
      }
    </button>
  );
}
