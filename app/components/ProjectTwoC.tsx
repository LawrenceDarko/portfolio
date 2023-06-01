'use client'

import { FiGithub } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";

// interface TechStack {
//     name?: string
// }

const ProjectsTwoC = () => {

    // const teckstack: TechStack[] = [

    // ]

    const secondChoice = {
        imageDiv: 'rounded-md overflow-hidden w-[60%] h-full z-2 absolute right-0 bg-opacity-10',
        detailsDiv: 'flex flex-col items-start justify-center relative gap-8  w-[50%] h-full z-1 bg-opacity-20'
    }

    const firstCHoice = {
        imageDiv: 'relative  w-[60%] h-full z-1 bg-slate-500 bg-opacity-20 rounded-md overflow-hidden',
        detailsDiv: 'gap-8 w-[50%] h-full z-2 absolute right-0 bg-opacity-10 flex flex-col items-end justify-center'
    }

    const techStack = ['React', 'Styled Coomponent', 'Tailwind CSS', 'Vercel']

    return (
        <div className="flex justify-center py-12 px-36">
            <div className="h-[447px] w-full flex relative">
                <div className={`${secondChoice.imageDiv}`}>
                    <img src='/images/cariscaa.png' className="relative object-cover w-full h-full"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#64F4AC] opacity-40 hover:opacity-0"></div>
                </div>
                <div className={`${secondChoice.detailsDiv}`}>
                    <div>
                        <p className="text-[#64F4AC]">Featured Project</p>
                        <p className="text-2xl font-bold cursor-pointer hover:text-[#64F4AC]">Halcyon Theme</p>
                    </div>
                    <div className="w-full p-6 bg-[#222126] rounded-lg shadow-md backdrop-blur-md bg-opacity-10">
                        <p className="text-left text-[#92929A]">
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                        </p>
                    </div>
                    <div className="flex gap-5">
                        {techStack.map((stack) => <p key={stack}>{stack}</p>)}
                    </div>
                    <div className="flex gap-5">
                        <FiGithub className="text-2xl text-white"/>
                        <HiOutlineLink className="text-2xl text-white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsTwoC
