'use client'
import { FiGithub } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";


interface ProjectTwoItemProps {
    showRight?: boolean;
    image: string;
    title: string;
    description: string;
}

const ProjectTwoItem: React.FC<ProjectTwoItemProps> = ({showRight, image, title, description}) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    const secondChoice = {
        imageDiv: 'rounded-md overflow-hidden w-full md:w-[60%] h-full z-2 absolute right-0 bg-opacity-10',
        detailsDiv: 'md:flex flex-col items-start justify-center relative gap-8  w-[50%] h-full z-1 bg-opacity-20'
    }

    const firstCHoice = {
        imageDiv: 'relative w-full md:w-[60%] h-full z-1 bg-slate-500 bg-opacity-20 rounded-md overflow-hidden',
        detailsDiv: 'gap-8 w-[50%] h-full z-2 absolute right-0 bg-opacity-10 md:flex flex-col items-end justify-center'
    }

    const techStack = ['React', 'Styled Coomponent', 'Tailwind CSS', 'Vercel']

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: { opacity: 1, y: 0 }
            }}
            initial={'hidden'}
            animate={mainControls}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div ref={ref} className="h-[447px] w-full flex relative">
                <div className={`${showRight? firstCHoice.imageDiv : secondChoice.imageDiv}`}>
                    <img src={`/images/${image}`} className="relative object-cover w-full h-full"/>
                    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm md:backdrop-blur-0 bg-[#000000ac] md:bg-[#64F4AC] bg-opacity-60  md:bg-opacity-40 hover:bg-opacity-0">
                        <div className="relative md:hidden">
                            <div className="absolute flex flex-col gap-4 px-3 py-12 z-2">
                                <p className="text-[#64F4AC] font-bold">Featured Project</p>
                                <p className="text-2xl font-bold cursor-pointer hover:text-[#64F4AC]">{title}</p>
                                <div className="py-4">
                                    <p className={`'text-right text-[#92929A] text-xs`}>
                                        {description}
                                    </p>
                                </div>
                                <div className="flex flex-row flex-wrap items-start gap-5">
                                    {techStack.map((stack) => <p className="text-xs leading-3 text-left text-[#92929A]" key={stack}>{stack}</p>)}
                                </div>
                                <div className="flex gap-5">
                                    <FiGithub className="text-2xl text-white"/>
                                    <HiOutlineLink className="text-2xl text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${showRight? firstCHoice.detailsDiv : secondChoice.detailsDiv} hidden`}>
                    <div>
                        <p className="text-[#64F4AC]">Featured Project</p>
                        <p className={`text-2xl font-bold cursor-pointer hover:text-[#64F4AC] ${!showRight? 'text-left' : 'text-right'}`}>{title}</p>
                    </div>
                    <div className="w-full p-6 bg-[#222126] rounded-lg shadow-md backdrop-blur-md bg-opacity-100">
                        <p className={`${!showRight? 'text-left' : 'text-right'} text-[#92929A]`}>
                            {description}
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
        </motion.div>
    )
}

export default ProjectTwoItem