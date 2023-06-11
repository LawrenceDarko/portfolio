'use client'

import Image from "next/image";
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from "react";

const Companies = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    // { opacity: 1, y: 0 }

    const images = [
        '/images/asu.png',
        '/images/cariscalab.png',
        '/images/luminocity.png',
        '/images/knust.png',
        '/images/usaid.png'
    ];

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])
    

    return (
        <div className="w-full h-auto p-4 md:p-8 lg:p-10 xl:p-28 2xl:p-36">
        <div className="flex flex-col items-center justify-center w-full mb-10 md:items-start">
            <p className="text-xl leading-loose md:text-3xl">Institutions</p>
            <p className="text-[#92929A] text-xs md:text-sm">These are some institutions I've worked with</p>
        </div>
        <AnimatePresence>
            <div ref={ref} className="flex flex-row flex-wrap items-center justify-center gap-20 opacity-40">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: {opacity: 0, y: 100},
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                <Image src={src} height='70' width='170' alt="companies" />
                </motion.div>
            ))}
            </div>
        </AnimatePresence>
        </div>
    );
}

export default Companies;
