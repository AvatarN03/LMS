"use client"

import CourseDetails from '@/app/(home)/_components/CourseDetails'

import VideoPlayer from '@/app/(home)/_components/VideoPlayer'
import { getCourseById } from '@/app/_services'
import React, { useEffect, useState } from 'react'

const CoursePreview = ({ params }) => {

  const [course, setCourse] = useState(null)


  const { courseId } = React.use(params)

  useEffect(() => {
    console.log(courseId)
    courseId ? getCourseByParams(courseId) : null
  }, [])

  const getCourseByParams = async (courseId) => {
    const result = await getCourseById(courseId)
    console.log(result)

    setCourse(result)
  }


  return (
    <div className='max-w-7xl mx-auto bg-neutral-200 dark:bg-transparent h-full'>

      {
        course && (
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className="col-span-2">
             <VideoPlayer video={course.video} />               

            </div>
            <div className="p-2">
              <CourseDetails course={course} />
            </div>
          </div>
        )
      }

    </div>
  )
}

export default CoursePreview