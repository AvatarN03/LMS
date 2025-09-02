"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from '../../_components/CategoryFilter'
import { courseList } from '@/app/_services'
import CourseList from '../../_components/CourseList'

const page = () => {

  const [ courses, setCourses ] = useState([])

  useEffect(()=>{
    getCourses()
  }, [])

  const getCourses = async () => {
    courseList().then((res)=> {
      console.log(res)
      setCourses(res)
    }
    )
  }

  return (
    <>
     <CategoryFilter />
     {
      courses ? <CourseList courses={courses} /> : <p>Loading...</p>
     }
    </>
  )
}

export default page