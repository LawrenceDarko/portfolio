
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi"
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

interface SocialLinksProps {
    onFooter?: boolean
}

const SocialLinks: React.FC<SocialLinksProps> = ({onFooter}) => {
    return (
        <div className='flex-row items-center justify-center hidden gap-10 md:flex'>
            <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[17px] socialIcons"/>
                {!onFooter && <p>Twitter</p>}
            </div>
            <a href="https://github.com/LawrenceDarko" className="flex flex-row items-center justify-center gap-2 cursor-pointer">
                <AiFillGithub className="text-white text-[17px] socialIcons"/>
                {!onFooter && <p>Github</p>}
            </a>
            <a href="maito:darkolawrence@gmail.com" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                <HiOutlineMail className="text-white text-[17px] socialIcons"/>
            </a>
            {onFooter && <a href="https://www.instagram.com/ampem_dev/" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                <FiInstagram className="text-white text-[17px] socialIcons"/>
            </a>}
            {onFooter && <a href="https://www.linkedin.com/in/lawrence-darko-baah-113316211/" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                <AiOutlineLinkedin className="text-white text-[17px] socialIcons"/>
            </a>}
        </div>
    )
}

export default SocialLinks