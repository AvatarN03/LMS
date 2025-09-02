"use client"
import React, { useEffect, useState } from 'react'
import SideBar from '../_components/SideBar'
import Header from '../_components/Header'

const homeLayout = ({ children }) => {


  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setDarkMode(!darkMode);
  }


  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white w-full min-h-screen">

        <div className="h-full  w-64 shadow-lg fixed inset-y-0 flex flex-col z-50">
          <SideBar />
        </div>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="ml-64">
          {children}
        </div>
      </div>
    </>
  )
}

export default homeLayout