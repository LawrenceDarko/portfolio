// 'use client'
// import { Link } from "react-scroll"
// import { useState } from "react"

// interface NavLinksProps {
//     onFooter?: boolean
// }

// const NavLinks: React.FC<NavLinksProps> = ({onFooter}) => {

//     const [onHover, setonHover] = useState(false)

//     return (
//         <div className={`flex ${onFooter? 'flex-col' : 'flex-row'} ${!onFooter? 'items-center' : 'items-start'} justify-center ${onFooter? 'gap-5' : 'gap-12'} navLinks`}>
//             <Link to='section Intro' activeClass="active" offset={100} spy={true} smooth={true} duration={1000}><p onMouseEnter={()=>setonHover(true)} onMouseLeave={()=>setonHover(false)}>{!onHover? 'Services' : '< Services >'}</p></Link>
//             <Link to='section Works' activeClass="active" offset={-180} spy={true} smooth={true} duration={1000}><p onMouseEnter={()=>setonHover(true)} onMouseLeave={()=>setonHover(false)}>{!onHover? 'Works' : '< Works >'}</p></Link>
//             <Link to='section Notes' activeClass="active" offset={-0} spy={true} smooth={true} duration={1000}><p onMouseEnter={()=>setonHover(true)} onMouseLeave={()=>setonHover(false)}>{!onHover? 'Note' : '< Note >'}</p></Link>
//             <Link to='section Contact' activeClass="active" offset={-0} spy={true} smooth={true} duration={1000}><p onMouseEnter={()=>setonHover(true)} onMouseLeave={()=>setonHover(false)}>{!onHover? 'Contact' : '< Contact >'}</p></Link>
//         </div>
//     )
// }

// export default NavLinks


'use client'

import { Link } from "react-scroll";
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from "react";

    interface NavLinksProps {
        onFooter?: boolean;
    }

    interface LinkData {
    to: string;
    text: string;
    offset: number;
    duration?: number;
    }

    const NavLinks: React.FC<NavLinksProps> = ({ onFooter }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [hoveredLink, setHoveredLink] = useState("");

    const mainControls = useAnimation();




    const handleMouseEnter = (link: string) => {
        setHoveredLink(link);
        // console.log("Link is", link)
    };

    const handleMouseLeave = () => {
        setHoveredLink("");
    };

    const linkData: LinkData[] = [
        { to: "section Intro", text: "Services", offset: 100, duration: 0.5 },
        { to: "section Works", text: "Works", offset: -10,duration: 1 },
        { to: "section Notes", text: "Notes", offset: 0, duration: 1.5 },
        { to: "section Contact", text: "Contact", offset: 0 , duration: 2},
    ];

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView])


    return (
        <motion.div ref={ref}
            className={`hidden md:flex ${onFooter ? "flex-col" : "flex-row"} ${!onFooter ? "items-center" : "items-start"} justify-center ${onFooter ? "gap-5" : "gap-12"} navLinks`}>
            {linkData.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    activeClass="active"
                    offset={link.offset}
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <motion.p
                        variants={{
                            hidden: {opacity: 0, x: -100},
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial={'hidden'}
                        animate={mainControls}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: link.duration, delay: 0.1 }}
                        onMouseEnter={() => handleMouseEnter(link.text)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {link.text === hoveredLink ? `< ${link.text} >` : link.text}
                    </motion.p>
                </Link>
            ))}
        </motion.div>
    );
};

export default NavLinks;
