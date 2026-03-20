import React from 'react'
import { FaGithub } from "react-icons/fa"; // Import GitHub Icon
import { FiExternalLink } from "react-icons/fi"; // Optional: Para sa Visit icon

const ProjectCard = ({ description, skills, image, visitURL, repoUrl }) => {
    return (
        <div className='w-full md:w-90 rounded-4xl border border-white/10 hover:border-[#1DB954]/50 backdrop-blur-3xl bg-[#282828]/40 flex duration-300 flex-col justify-between p-8 shadow-2xl group'>
            {/* Window Dots Style */}
            <div className='flex gap-2 mb-6'>
                <div className='w-3 h-3 bg-[#ff5f56] rounded-full'></div>
                <div className='w-3 h-3 bg-[#ffbd2e] rounded-full'></div>
                <div className='w-3 h-3 bg-[#27c93f] rounded-full'></div>
            </div>

            {/* Image Container */}
            <div className='relative w-full h-44 rounded-2xl overflow-hidden bg-white/5'>
                <img 
                    src={image} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                    alt="Project Preview"
                />
            </div>

            {/* Description */}
            <p className='text-white/70 text-sm font-source my-6 line-clamp-3 leading-relaxed'>
                {description}
            </p>

            {/* Skills Tags */}
            <div className='flex gap-2 mb-8 flex-wrap'>
                {skills && skills.map((skill, index) => (
                    <span key={index} className='bg-white/5 border border-white/10 text-white/60 rounded-full px-4 py-1 hover:bg-[#1DB954]/10 hover:text-[#1DB954] transition-colors'>
                        <p className='text-[10px] font-bold uppercase tracking-wider'>{skill}</p>
                    </span>
                ))}
            </div>

            {/* Buttons Row */}
            <div className='flex gap-3'>
                {/* Visit Button */}
                <a 
                    href={visitURL || "https://pomodoro-app-orcin-six.vercel.app/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-white gap-2 rounded-xl py-2.5 text-sm font-bold text-black shadow-xl transition-all duration-300 hover:bg-[#1DB954] hover:text-white"
                >
                    Visit <FiExternalLink size={16} />
                </a>

                {/* Source Code Button (GitHub) */}
                <a 
                    href={repoUrl || "https://github.com/yourusername/your-repo"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#181818] border border-white/10 gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                    title="Source Code"
                >
                    <FaGithub size={20} />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard