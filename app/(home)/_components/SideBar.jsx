"use client"
import { Compass, LayoutDashboard, Mail, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SideBar = () => {

    const [active, setActive] = useState(1);
    const currentPath = usePathname();

    useEffect(() => {

        const activeItem = menuList.find(item => item.path === currentPath);
        if (activeItem) {
            setActive(activeItem.id);
        }
    }, [])

    const menuList = [
        {
            id: 1,
            name: "Browse",
            icon: <Compass />,
            path: "/browse"
        }, {
            id: 2,
            name: "Dashboard",
            icon: <LayoutDashboard />,
            path: "/dashboard"
        },
        {
            id: 3,
            name: "Upgrade",
            icon: <Shield />,
            path: "/upgrade"
        },
        {
            id: 4,
            name: "Newsletter",
            icon: <Mail />,
            path: "/newsletter"
        }
    ]

    return (
        <div className="h-full flex flex-col overflow-y-auto shadow-md bg-slate-200 dark:bg-slate-900  border-r">
            <div className="p-5 shadow-lg">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
            </div>
            <ul className="mt-10 flex flex-col gap-2 p-2 ">
                {
                    menuList.map((item) => (
                        <Link href={item.path} key={item.id} onClick={() => setActive(item.id)}>
                            <li key={item.id} className={`px-5 py-3  rounded  cursor-pointer flex items-center gap-3 ${active == item.id ? "bg-purple-400 text-purple-800 dark:text-black" : "hover:bg-slate-300 hover:dark:text-black/80"} `}>
                                {item.icon}
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>

    )
}

export default SideBar