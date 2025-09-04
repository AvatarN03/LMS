import { BookImage, Github, Youtube } from 'lucide-react'
import React from 'react'

const Enrollment = () => {
    const optionList = [
        {
            id: 1,
            icon: <Github />,
            name: "GitHub"

        },
        {
            id: 2,
            icon: <BookImage />,
            name: "Demo"
        },
        {
            id: 3,
            icon: <Youtube />,
            name: "YouTube"
        }
    ]
    return (
        <div className='flex justify-evenly gap-4 items-center w-full'>
            {
                optionList.map((option) => (
                    <div key={option.id} className='flex items-center flex-col gap-2 border p-2 rounded-lg my-3 cursor-pointer hover:shadow-lg hover:bg-slate-500'>
                        <div className='p-1 bg-gray-200 rounded-full dark:bg-slate-800 border-[.2px] border-slate-500'>
                            {option.icon}
                        </div>
                        <p className='font-semibold text-base'>{option.name}</p>
                    </div>

                )
                )
            }
        </div>
    )
}

export default Enrollment