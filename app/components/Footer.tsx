import { Inter } from "next/font/google"
import { MdOutlineCopyright } from "react-icons/md";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return (
        <div id="section Contact" className="bg-[#222326] w-full h-auto py-28 px-4 md:px-8 lg:px-10 xl:px-36">
            <div className="flex flex-col justify-between lg:items-center lg:h-[60vh] gap-6 lg:flex-row md:gap-20">
                <div className="flex flex-col justify-between w-full h-full md:w-2/3">
                    <p className="text-xl md:text-4xl">Let's make something amazing together.</p>
                    <p className="mb-12 text-xl md:text-4xl md:mb-28">Start by <a className="text-[#64F4AC] underline cursor-pointer" href="mailto:darkolawrence@gmail.com">saying hi</a></p>
                    <div className="flex flex-row items-center gap-4 md:gap-8">
                        <p className={`${inter.className} text-white font-thin cursor-pointer text-lg md:text-3xl`}>Lawrence <span className="font-semibold">Darko</span></p>
                        <div className="flex items-center justify-center pt-2 pr-3">
                        <p className="text-[10px] pr-2"><MdOutlineCopyright /></p>
                        <p className={`font-extralight text-sm md:text-base text-[#92929A]`}>2023. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-full gap-5 md:w-1/3 md:gap-0">
                    <p className={`text-sm md:text-base text-[#92929A] mb-4`}>Information</p>
                    <p className="text-base md:text-xl text-[#92929A]">Tema Sakomono Estate, Accra - Ghana<br /> <span className="pb-5 text-white text-md md:mb-10 md:text-2xl lg:text-[1.7rem]">darkolawrence@gmail.com</span></p>
                    <div className="flex mb-6 md:mb-5">
                        <NavLinks onFooter />
                    </div>
                    <div className="flex">
                        <SocialLinks onFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
