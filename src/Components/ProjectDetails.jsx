import React from 'react'
import { IoClose } from "react-icons/io5";
const ProjectDetails = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'>
          <button className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
       <IoClose className='w-6 h-6'/>
          </button>
      </div>
    </div>
  )
}

export default ProjectDetails
