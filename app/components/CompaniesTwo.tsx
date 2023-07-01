'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CompaniesTwo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);

    useEffect(() => {
        // Calculate the width of the first card once the component mounts
        if (containerRef.current?.firstChild instanceof HTMLElement) {
        setCardWidth(containerRef.current.firstChild.offsetWidth);
        }
    }, []);

    useEffect(() => {
        if (cardWidth === 0) {
        // Don't do anything until we have the card width
        return;
        }

        const animateScroll = () => {
            setScrollPosition((prevScrollPosition) => prevScrollPosition + 3);
            if (
                containerRef.current &&
                containerRef.current.scrollWidth &&
                containerRef.current.offsetWidth &&
                scrollPosition >= containerRef.current.scrollWidth - containerRef.current.offsetWidth
                ) {
                // Reset the scroll position when we reach the end of the list
                setScrollPosition(0);
                }
                // Scroll the container to the new position
                if (containerRef.current) {
                containerRef.current.scrollTo({ left: scrollPosition + 3, behavior: 'smooth' });
                }
            };
            

        // Start the animation when the component mounts
        const intervalId = setInterval(animateScroll, 50);

        // Stop the animation when the component unmounts
        return () => {
        clearInterval(intervalId);
        };
    }, [cardWidth, scrollPosition]);

    const images = [
        '/images/asu.png',
        '/images/cariscalab.png',
        '/images/luminocity.png',
        '/images/knust.png',
        '/images/payswitch.png',
        '/images/usaid.png'
    ];

    return (
        <div
        className='flex w-[100%] h-[9rem] sm:h-[16rem] mt-12 gap-1 overflow-x-scroll scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [scroll-behavior]:smooth mb-[5rem]'
        ref={containerRef}
        >
            {/* {images.map((src, index) => (
                <div key={index}> */}
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                    <Image src={'/images/asu.png'} height='70' width='170' alt="companies" />
                {/* </div>
            ))} */}
        </div>
    );
};

export default CompaniesTwo;
