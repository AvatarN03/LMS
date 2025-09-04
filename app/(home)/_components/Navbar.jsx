"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { MoonIcon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {

    const { user } = useUser();
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <div className="h-24 w-full text-purple-800 transition-all shadow-lg dark:shadow-indigo-400">
            <div className="flex justify-between items-center mx-auto max-w-7xl w-full h-full">
                <Link href={"/"}>
                    <Image src="/logo.png" alt="logo" width={100} height={40} />
                </Link>

                <div className="flex items-center gap-4">
                    <button className='p-2 border-purple-500 border-2 text-black  dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700' onClick={() => toggleDarkMode()}>
                        {
                            darkMode ?
                                <MoonIcon /> :
                                <Sun />
                        }
                    </button>
                        <Link href="/dashboard">
                            <button className='bg-purple-400 rounded-md p-1 font-semibold hover:bg-purple-500 '>Dashboard</button>
                        </Link> 
                        

                    {user &&  <UserButton />  }
                </div>
            </div>
        </div>

    )
}

export default Navbar