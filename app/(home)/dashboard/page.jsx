"use client"
import React, { useEffect, useState } from 'react'
import { courseList, filterCourse } from '@/app/_services'
import CourseList from '../_components/CourseList'
import SearchInput from '../_components/SearchInput'
import CardSkeleton from '../_components/CardSkeleton'

const page = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = async () => {
    courseList().then((res) => {
      console.log(res)
      setCourses(res)
    }
    )
  }

  const handleSearch = async (term) => {
    if (term) {
      const results = await filterCourse(term);
      console.log("haha",results)
      setCourses(results);
    } else {
      const all = await courseList();
      setCourses(all);
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="mb-8 p-6 bg-purple-600 text-white rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold">Welcome to the Course List</h1>
          <p className="mt-2 text-lg text-neutral-400">Browse our available courses below.</p>
        </div>

        <SearchInput onSearch={handleSearch} />
        {
          courses ? <CourseList courses={courses} /> : <CardSkeleton />
        }
      </div>
    </>
  )
}

export default page