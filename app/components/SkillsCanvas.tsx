'use client'

import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import randomColor from 'randomcolor';

const SkillsCanvas = () => {
    return (
        <div className='w-full h-auto md:p-5 md:px-8 lg:px-10 xl:px-28 2xl:px-36'>
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20">
                <div className="p-4 pt-20 md:p-0 md:w-[500px]">
                    <p className="text-xl leading-loose md:text-3xl">Technologies</p>
                    <p className="text-sm md:text-base text-[#92929A] mt-6 leading-6 md:pr-12">As a Full Stack Developer, I specialize in React for front-end development, along with JavaScript and TypeScript. I leverage Next.js for performant web applications. Python and Django are my go-to choices for back-end development, while Node.js adds scalability. Additionally, I have proficiency in C++ and Java for tackling complex programming challenges. I also have experience in machine learning and AI, adding an extra dimension to my skill set.</p>
                </div>
                <div className="w-full md:w-[50%] flex justify-center items-center">
                    <TagCloud
                        options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "normal",
                        })}
                        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                        onClickOptions={{ passive: true }}
                        className="text-[#64F4AC]"
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
                        ]}
                    </TagCloud>
                </div>
            </div>
        </div>
    )
}

export default SkillsCanvas
