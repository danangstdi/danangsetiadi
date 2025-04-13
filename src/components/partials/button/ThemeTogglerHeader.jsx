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
    <button type='button' onClick={handleToggle} className='text-gray-700 hidden lg:block dark:text-slate-100'>
      {theme == 'dark' ? <Moon size={20}/> : <Sun size={20}/>}
    </button>
  );
}
