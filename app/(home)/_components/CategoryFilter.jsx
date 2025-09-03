"use client"
import React, { useState } from 'react'

const CategoryFilter = () => {

  const [activeCategory, setActiveCategory] = useState(1);
  const filterOptions = [
    {
      id: 1,
      title: 'All Categories',
      value: 'all'
    }, {
      id: 2,
      title: "Next.js",
      value: 'nextjs'
    }, {
      id: 3,
      title: "React.js",
      value: 'reactjs'
    }, {
      id: 4,
      title: "JavaScript",
      value: 'javascript'
    }, {
      id: 5,
      title: "Python",
      value: 'python'
    }, {
      id: 6,
      title: "Django",
      value: 'django'
    }, {
      id: 7,
      title: "Data Science",
      value: 'data-science'
    }, {
      id: 8,
      title: "Machine Learning",
      value: 'machine-learning'
    }
  ]
  return (
    <div className=" my-3 p-3 border-b shadow">
      <div className="mb-8 p-6 bg-purple-600 text-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold">Welcome to the Course List</h1>
        <p className="mt-2 text-lg text-neutral-400">Browse our available courses below.</p>
      </div>
      <h1 className='text-slate-700 dark:text-white  text-xl font-mono mb-3'>Categories</h1>

      <div className='flex flex-wrap gap-4 '>

        {
          filterOptions.map(option => (
            <button key={option.id}
              onClick={() => setActiveCategory(option.id)}
              className={`px-4 py-2 m-1 dark:text-neutral-700 bg-gray-200 rounded hover:bg-gray-300 ${activeCategory === option.id ? 'bg-purple-500 text-white hover:bg-purple-600' : ''}`}>
              {option.title}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryFilter