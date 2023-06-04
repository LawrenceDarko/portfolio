'use client'

import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import randomColor from 'randomcolor'
const SkillsCanvas = () => {
    return (
        <div className='w-full h-auto md:p-5 md:px-8 lg:px-10 xl:px-28 2xl:px-36'>
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20">
                <div className="p-4 md:p-0">
                    <p className="text-xl leading-loose md:text-3xl">Technologies</p>
                    <p className="text-sm md:text-base text-[#92929A] mt-6 leading-6">These represent the powerful tools and technologies that drive my software engineering journey, empowering me to create efficient and scalable solutions while staying at the forefront of emerging fields in the industry.</p>
                </div>
                <div className="w-full md:w-[45%]">
                    <TagCloud
                        options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "normal",
                        })}
                        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                        onClickOptions={{ passive: true }}
                        className="text-[#67B1D2]"
                    >
                        {[
                            "VSCode",
                            "TypeScript",
                            "React",
                            "JSON",
                            "Git",
                            "npm",
                            "REST",
                            "Python",
                            "C++",
                            "Java",
                            "M.L",
                            "A.I",
                            "Jest",
                            "Next.js",
                            "ESLint",
                            "Node.js",
                            "Framer Motion",
                        ]}
                    </TagCloud>
                </div>
            </div>
        </div>
    )
}

export default SkillsCanvas