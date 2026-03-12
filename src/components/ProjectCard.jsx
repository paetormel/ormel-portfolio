import React from 'react'

const ProjectCard = ({description, skills, image}) => {
    return (
        <div className='w-full md:w-90 rounded-2xl border border-gray-400/50 hover:border-blue backdrop-blur-5xl bg-white/10 flex duration-300 flex-col justify-between p-10 '>
        <div className='flex gap-2 mb-5'>
            <div className='w-5 h-5 bg-blue rounded-full'></div>
            <div className='w-5 h-5 bg-blue rounded-full'></div>
            <div className='w-5 h-5 bg-blue rounded-full'></div>
        </div>
            <div className='bg-gray-300 w-full h-40 rounded-2xl '>
            <img src={`${image}`} className='w-full h-full rounded-2xl' />
            </div>
            <p className='text-white font-source my-5'>{description}</p>
            <div className='flex gap-1 mb-10 flex-wrap'>
                {
                    skills && skills.map((skill, index)=>(
                        <span key={index} className='bg-white text-gray-900 rounded-2xl px-5 py-1'>
                            <p className='text-xs font-medium'>{skill}</p>
                        </span>
                    ))
                }
            </div>
            <button className="group inline-flex items-center justify-center bg-white gap-2 rounded-full border border-white px-10 py-2 text-lg font-google-sans text-black shadow-xl transition-colors duration-200 hover:bg-transparent hover:text-white cursor-pointer">
            Visit
          </button>
        </div>
    )
}

export default ProjectCard