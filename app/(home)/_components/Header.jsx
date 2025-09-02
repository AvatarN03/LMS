"use client"
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { MoonIcon, Sun } from 'lucide-react'

const Header = ({darkMode, toggleDarkMode}) => {
    

    const { user } = useUser();
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <div className='ml-64 flex p-5 justify-between items-center shadow-md border-b bg-slate-50 dark:bg-black text-black'>
            <SearchInput />

            <div className="flex justify-center gap-4 items-center">

                <button className='p-2 border-purple-500 border-2 text-black  dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700' onClick={() => toggleDarkMode()}>
                    {
                        darkMode ?
                        <MoonIcon /> :
                        <Sun />
                    }
                </button>

                {!user ?
                    <Link href="/sign-in">
                        <button className='bg-purple-400 rounded-md p-1 font-semibold hover:bg-purple-500 '>Login</button>
                    </Link> : <UserButton />
                }
            </div>
        </div>
    )
}

export default Header