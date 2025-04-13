"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-bootstrap-icons";

export default function ThemeTogglerBottomNav() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button onClick={handleToggle} className="w-full text-gray-700 flex flex-col justify-center items-center gap-1 dark:text-slate-100">
      {theme == 'dark' ? <Moon size={18}/> : <Sun size={18}/>}
      <p className="text-[.65rem]">Theme</p>
    </button>
  );
}
