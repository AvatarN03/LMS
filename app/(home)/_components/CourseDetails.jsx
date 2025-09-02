import { Book } from 'lucide-react'
import React from 'react'

const CourseDetails = ({ course }) => {
    return (
        <div className='mt-5 p-5 rounded-lg border-r'>
            <h2 className='text-2xl font-bold mb-3'>{course.name}</h2>
            <div className="flex justify-start gap-2 my-2 items-center">
                <Book className='h-4 w-4 text-purple-600' />
                <p className="">{course.totalChapters} chapters</p>
            </div>
            <h4 className='font-thin mt-4'>Description: </h4>
            <p className='line-clamp-3 mt-2 text-gray-400'>{course.description}</p>
        </div>
    )
}

export default CourseDetails