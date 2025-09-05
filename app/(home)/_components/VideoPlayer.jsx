import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const VideoPlayer = ({ video}) => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }


  return (
    <div className='border rounded-lg p-3'>
      <button className='my-2 p-3 dark:bg-black/80 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full' onClick={handleBack}>
        <ArrowLeft />
      </button>
      <h2 className='text-gray-400 mb-3'>Course Preview</h2>
      {
        video ?
          <video width="100%" height="250" controls controlsList='nodownload'>
            <source src={video.url} type="video/mp4" />
          </video> :  <p className='text-center my-4 text-sm'>"No Demo Video"</p>
      }
    </div>
  )
}

export default VideoPlayer