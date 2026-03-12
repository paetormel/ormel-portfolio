import React from 'react'

const SkillCard = ({img, title}) => {
    return (
        <div className='flex flex-col justify-center border border-gray-400/10 items-center gap-5 bg-white/10 backdrop-blur-2xl hover:scale-101 transition-shadow duration-500 rounded-xl w-50 h-50 '>
        <img src={`${img}.svg`} className='w-20 h-20' alt="" />
        <h1 className='text-white text-lg font-pixelify'>{title}</h1>
        </div>
    )
}

export default SkillCard