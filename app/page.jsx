"use client"
import Link from 'next/link'
import Navbar from './(home)/_components/Navbar'
import Image from 'next/image'
import { features } from './lib/constant'
import { darkMode, toggleDarkMode } from './lib/theme'

const Page = () => {


  return (
    <>

      <section className='h-[50vh] p-5 w-full bg-indigo-300 dark:bg-indigo-900' >
        <div className='mx-auto max-w-5xl h-full flex justify-center items-center gap-10'>
          <div className="flex flex-col gap-8 ">

            <h1 className="text-6xl font-bold">
              Learn Without Limits with EduSphere
            </h1>
            <p className="">The most powerful learning platform that helps you achieve your goals with interactive courses from world-class instructors.</p>
            <Link href="/dashboard" className='bg-indigo-400 dark:hover:bg-indigo-200 dark:bg-indigo-600 p-3 shadow-md rounded-md w-auto text-center hover:bg-indigo-500'>
              <button >
                Get started
              </button>
            </Link>
          </div>

          <Image src="/image.png" alt="lms" width={500} height={500} />
        </div>
      </section >

      <section className="w-full min-h-[60vh] py-12 px-4  max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className='text-3xl font-bold my-4'>Powerful Features for Effective Learning</h2>
          <p className="text-gray-600 text-sm my-3 mb-10">LMS provides everything you need to create, manage and track learning experiences.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-200 dark:bg-gray-700 rounded-2xl shadow hover:shadow-lg dark:shadow-indigo-500 transition"
              >
                <div className="flex items-center justify-center bg-slate-400 dark:bg-gray-800 w-12 h-12 rounded-full  mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 -mt-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            )
            )}
          </div>
        </div>
      </section>
      <footer class="bg-gray-900 text-white py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">EduSphere</h3>
              <p class="text-gray-400">The most powerful learning platform that helps you achieve your goals.</p>
              <div class="flex space-x-4 mt-4">
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Company</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Resources</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Webinars</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Legal</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400">© 2023 EduSphere. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" class="text-gray-400 hover:text-white">Terms</a>
              <a href="#" class="text-gray-400 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Page