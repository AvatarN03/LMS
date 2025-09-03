import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({ courses }) => {
    return (
        <div className="p-5">
           
            <div className="mt-5 w-full grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                {
                    courses.map((course) => (
                        <Link href={`/course-preview/${course.id}`} key={course.id}>

                            <div
                                key={course.id}
                                className="mb-4 p-4 border rounded-lg shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg 
                                bg-neutral-300 dark:bg-slate-600  hover:-translate-y-2 dark:text-white hover:border-purple-500"
                            >
                                <div className="w-full h-[180px] relative mb-4">
                                    <Image
                                        src={course.banner.url}
                                        alt={course.name}
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                                        className="rounded-md"
                                    />
                                </div>
                                <h2 className="text-xl font-bold mb-2">{course.name}</h2>
                                <h3 className='font-bold dark:text-slate-400 text-slate-600 text-sm'>{course.author}</h3>

                                <div className="flex justify-start gap-2 my-2 items-center">
                                    <Book className='h-4 w-4 text-purple-600' />
                                    <p className="">{course.totalChapters} chapters</p>
                                </div>

                                <span className='inline-flex p-2 rounded-xl bg-purple-500'>{course.cost ? "Paid" : "Free"}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseList