'use client'

import Image from "next/image";
import { useGeneralContext } from "../contexts/GeneralContext";
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";

function Header() {
    const { setShowModal} = useGeneralContext()
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className="h-full w-full xl:h-[95vh] bg-[#2D2E32] pt-16">
            <motion.div 
                variants={{
                    hidden: {opacity: 0, translateY: -50},
                    visible: { opacity: 1, translateY: 0 }
                }}
                initial={'hidden'}
                animate={mainControls}
                exit={{ opacity: 0, x: -20 }}
                transition={{ease: 'easeIn', duration: 1, delay: 1.8 }} 
                className="flex flex-col justify-between px-4 md:flex-row xl:px-36 md:px-10 sm:px-2">
                <div className="flex flex-col w-full md:w-1/2">
                    <div className="relative flex flex-col justify-center h-full gap-8 md:gap-10 lg:gap-12">
                        <div className="bg-[#64F4AC] rounded justify-center items-center w-[215px]">
                            <p className="px-2 py-[2px] text-gray-900 text-base">Full-Stack Developer</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl lg:text-6xl">Talk is cheap.</p>
                            <p className="text-4xl md:text-5xl lg:text-6xl">Show me the code</p>
                        </div>
                        <div className="w-full md:w-[400px]">
                            {/* <p className="text-[#92929A]">I design and code beautifully amazing things, and I love what I do</p> */}
                            <p className="text-[#92929A]">I specialize in JavaScript, C++, Java and Python. Proficient in machine learning</p>
                        </div>
                        <div onClick={()=>setShowModal(true)}>
                            <p className="cursor-pointer glowing-text">A portal to the Multiverse!</p>
                        </div>
                        <a href="mailto:darkolawrence@gmail.com" className="text-[#64F4AC] font-normal underline text-xl mb-5 cursor-pointer">LET&apos;S CHAT!</a>
                    </div>
                    <div className="flex flex-col gap-8 mb-12 md:flex-row md:gap-16">
                        <div className="flex flex-row items-center">
                            <p className="pr-1 text-4xl md:text-5xl">6</p>
                            <p className="font-thin text-[#92929A] leading-5">YEARS<br /> EXPERIENCE</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="pr-1 text-4xl md:text-5xl">20</p>
                            <p className="font-thin text-[#92929A] leading-5">PROJECTS<br /> COMPLETED</p>
                        </div>
                    </div>
                </div>
                <div className="h-[400px] md:h-[610px] w-full md:w-[50%] relative">
                <Image src="/images/portfolioh.png" height={1000} width={1000} alt="headerImage" className="imgb" />
                </div>
            </motion.div> 
        </div>
    );
}

export default Header;
