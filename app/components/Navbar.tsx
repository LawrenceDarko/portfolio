'use client'
import { Inter } from "next/font/google"
import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {

    return (
        <div className='z-10 w-full bg-[#2D2E32] shadow-lg'>
            <div className='py-4'>
                <div className="max-w-[2520px] mx-auto xl:px-36 md:px-10 sm:px-2 px-4">
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <p className={`${inter.className} font-thin cursor-pointer`}>Lawrence <span className="font-semibold">Darko</span></p>
                        <NavLinks />
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar