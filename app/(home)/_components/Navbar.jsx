"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { BookMarked, MoonIcon, Sun } from 'lucide-react'
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
            <div className="flex justify-between items-center mx-auto max-w-7xl w-full h-full px-4 py-2">
                <Link href={"/"} className='text-blue-500 flex gap-1  items-center'>
                    <BookMarked />
                    <h2 className='text-2xl font-bold'>Edgine</h2>
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


                    {user && <UserButton />}
                </div>
            </div>
        </div>

    )
}

export default Navbar