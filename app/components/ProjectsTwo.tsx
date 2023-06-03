'use client'

import ProjectTwoItem from "./ProjectTwoItem"
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";



const ProjectsTwo = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    const descriptions = {
        desc1: 'VeganEats" is a stylish food ordering app designed for vegans. With a sleek, dark blue theme, it offers a seamless experience for users. The app consists of dedicated components such as a Riders App, Users App, Restaurant Dashboard, and Main Admin Dashboard. It can be easily accessed and installed through various platforms, catering to the needs of developers and enthusiasts alike.',
        desc2: 'A cutting-edge website for Carisca Lab, a supply chain innovation lab. The website highlights their team of skilled developers and programmers, who work on groundbreaking solutions for supply chain optimization. It showcases their innovative projects, expertise, and services, attracting potential partners and clients in the industry.',
        desc3: '"NetflixClone" is my fun and boredom-inspired project, a lighthearted replica of the popular streaming platform. It showcases my coding skills and creativity, offering a playful and unique experience. Sit back, relax, and dive into the world of my homemade streaming platform!'
    }

    return (
        <div id="section Works" className="flex flex-col justify-center gap-8 px-4 py-8 md:py-12 md:gap-28 md:px-10 lg:px-16 xl:px-36">
            <div className="flex justify-start w-full">
                <div className="flex flex-col justify-center">
                    <p className="text-xl leading-loose md:text-3xl">Latest Works</p>
                    <p className="text-[#92929A] text-xs md:text-sm">perfect solutions for digital experience</p>
                </div>
            </div>
            <ProjectTwoItem image='cariscaa.png' title="CARISCA Lab" description={descriptions.desc2}/>
            <ProjectTwoItem showRight image="vegancol.png" title="FindVegan" description={descriptions.desc1}/>
            <ProjectTwoItem image="netflix.png" title="Netflix Clone" description={descriptions.desc3} githublink="https://github.com/LawrenceDarko/netflix-clone"/>
            <div ref={ref} className="flex justify-end w-full">
                <motion.div
                    variants={{
                        hidden: {opacity: 0, x: -600},
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 1, delay: 0.1 }} 
                    className="flex flex-col justify-center w-full md:w-[400px]">
                    <p className="mb-1 text-xl md:text-3xl leading-loose text-[#64F4AC]">ALL PROJECTS</p>
                    <p className="text-[#92929A] text-xs md:text-sm">
                        * Some projects do not allow publish by NDA, if you want to see more{" "}
                        <a href="mailto:darkolawrence@gmail.com" className="text-[#64F4AC] underline cursor-pointer">contact</a>
                    </p>
                    <a href="/pdf/Resume.pdf" className="mt-5 text-white cursor-pointer">View Full Résumé</a>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectsTwo;
