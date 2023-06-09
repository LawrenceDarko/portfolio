'use client'

import IntroCards from "./IntroCards";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineCode } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";

function Intro() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return (
        <div
            id="section Intro"
            className="w-full h-auto p-4 md:p-8 lg:p-10 xl:p-28 2xl:p-36"
        >
        <div ref={ref} className="flex flex-col justify-between gap-4 lg:flex-row md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20">
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: { opacity: 1, x: 0 }
                }}
                initial={'hidden'}
                animate={mainControls}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 0.1 }} 
                className="flex flex-col justify-between h-full gap-3 p-0">
                <IntroCards
                    title="Front-End"
                    description="Delivering seamless user interfaces with expertise in front-end development."
                    numProject="More projects"
                    icon={HiOutlineCode}
                />
                <IntroCards
                    title="Back-End"
                    description="Developing secure and high-performance systems with proficiency in using top frameworks."
                    numProject="More projects"
                    icon={IoSettingsOutline}
                />
                <IntroCards
                    title="Mobile Apps"
                    description="Creating innovative mobile applications by leveraging cutting-edge technologies"
                    numProject="More projects"
                    icon={CiMobile3}
                />
                <IntroCards
                    title="Machine Learning"
                    description="Building advanced models and pushing the boundaries of artificial intelligence."
                    numProject="More projects"
                    icon={FaRobot}
                />
            </motion.div>
            <div className="flex flex-col p-0">
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 100},
                    visible: { opacity: 1, x: 0 }
                }}
                initial={'hidden'}
                animate={mainControls}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 0.1 }} 
                className="w-full md:w-[500px]">
                <p className="text-sm text-[#92929A] mb-4 md:mb-8">
                    Introduction
                </p>
                <p className="text-xl font-normal md:text-4xl leading-12">
                    Hello! I&apos;m Lawrence Darko
                </p>
                <p className="mt-6 text-lg italic md:text-2xl">
                    Empowering businesses through elegant and efficient software
                </p>
                <p className="text-sm md:text-base text-[#92929A] mt-6 leading-6">
                    Having embarked on my journey as a freelance developer nearly
                    eight years ago, I&apos;ve had the privilege of remotely collaborating
                    with agencies, providing valuable consultations to startups, and
                    working alongside talented individuals to craft cutting-edge
                    digital products for businesses and consumers alike. With a quiet
                    confidence and an insatiable curiosity, I continuously strive to
                    enhance my expertise, tackling design challenges and solving
                    problems one project at a time. If you&apos;re looking for a full-stack
                    software developer or a mobile app developer, you&apos;ve come to the
                    right place!
                </p>
            </motion.div>
            </div>
        </div>
        </div>
    );
}

export default Intro;
