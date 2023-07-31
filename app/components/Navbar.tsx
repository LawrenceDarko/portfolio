'use client'
import { Inter } from "next/font/google"
import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";
import ToggleButton from "./ToggleButton";

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className='z-10 w-full bg-[#2D2E32] shadow-lg'>
            <div className='py-4'>
                <div className="max-w-[2520px] mx-auto xl:px-36 md:px-10 sm:px-2 px-4">
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <motion.p
                            variants={{
                                hidden: {opacity: 0, y: -20},
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial={'hidden'}
                            animate={mainControls}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }} 
                            className={`${inter.className} font-thin cursor-pointer`}>Lawrence <span className="font-semibold">Darko</span>
                        </motion.p>
                        <NavLinks />
                        <SocialLinks />
                        {/* <ToggleButton /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar