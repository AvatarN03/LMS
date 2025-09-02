"use client"

import CourseDetails from '@/app/(home)/_components/CourseDetails'
import Enrollment from '@/app/(home)/_components/Enrollment'
import VideoPlayer from '@/app/(home)/_components/VideoPlayer'
import { getCoursesById } from '@/app/_services'
import React, { useEffect, useState } from 'react'

const CoursePreview = ({ params }) => {

  const [course, setCourse] = useState(null)

  const { courseId } = React.use(params)

  useEffect(() => {
    console.log(courseId)
    courseId ? getCourseByParams(courseId) : null
  }, [])

  const getCourseByParams = async (courseId) => {
    const result = await getCoursesById(courseId)
    console.log(result)

    setCourse(result)
  }


  return (
    <div>

      {
        course && (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className="col-span-2">
             
             <VideoPlayer videoUrl={course.chapters.videoUrl.url} />

             <CourseDetails course={course} />


            </div>
            <div className="p-2">
              <Enrollment />
            </div>
          </div>
        )
      }

    </div>
  )
}

export default CoursePreview