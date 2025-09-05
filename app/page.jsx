import Link from 'next/link'
import Image from 'next/image'
import { features } from './lib/constant'
import AboutMe from './(home)/_components/AboutMe'
import { Github } from 'lucide-react'

const Page = () => {


  return (
    <>

      <section className='min-h-[50vh] p-5 w-full bg-indigo-300 dark:bg-indigo-900' >
        <div className='mx-auto max-w-5xl h-full flex justify-center items-center gap-10 flex-col md:flex-row'>
          <div className="flex flex-col gap-4 sm:gap-8 text-center md:text-left px-7 md:px-3">

            <h1 className="text-3xl sm:text-5xl my-2 leading-[1.2] md:text-6xl font-bold">
              Learn Without Limits with Edgine
            </h1>
            <p className="text-sm md:text-base">Edgine is a sleek, modern Learning Management System that simplifies how courses are created, delivered, and tracked. Designed for educators and learners alike, it combines intuitive design with powerful tools to make learning seamless and engaging.</p>
            <Link href="/dashboard" className='bg-indigo-400 dark:hover:bg-indigo-400/80 dark:bg-indigo-600 p-3 shadow-md rounded-md text-center hover:bg-indigo-500'>
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
          <p className="text-gray-400 text-sm my-3 mb-10">Edgine offers everything you need to manage learning in one place. Create and organize courses with rich text, video, and downloadable resources. Track learner progress with clear dashboards and analytics. Streamline communication through announcements and feedback, while integrated media support ensures a smooth video experience. With flexible course structures, role-based access, and a responsive interface, Edgine adapts effortlessly to classrooms, training programs, or self-paced learning</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
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
      <AboutMe />
      <footer class="bg-gray-900 text-white py-6 md:py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-evenly items-start gap-8">
            <div>
              <h3 class="text-lg tracking-widest font-semibold mb-4 ">Edgine - LMS</h3>
              <p class="text-gray-400 w-[60%]">The most powerful learning platform that helps you achieve your goals. <br />LMS - Learning Management System</p>

            </div>

            <div className=''>
              <h3 class="text-lg font-semibold mb-4">Company</h3>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#home" class="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#home" class="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#home" class="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>




          </div>

          <div class="border-t border-gray-800 mt-12 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400">© {new Date().getFullYear()} Edgine. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" class="text-gray-400 hover:text-white">Terms</a>
              <a href="#" class="text-gray-400 hover:text-white">Sitemap</a>
            </div>
            <div className="fixed bottom-4 right-4 w-10" title='Repo URL of this Project'>
              <Link
                href="https://github.com/AvatarN03/Edgine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 rounded-full bg-gray-800 text-white shadow hover:bg-gray-700"
              >
                <Github />
              </Link>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Page