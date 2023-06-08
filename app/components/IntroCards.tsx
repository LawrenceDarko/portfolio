import { IconType } from "react-icons";

interface CardProps {
    title: string;
    description: string;
    icon?: IconType;
    numProject?: string;
}

const IntroCards: React.FC<CardProps> = ({
    title,
    description,
    numProject,
    icon: Icon
}) => {
    return (
        <div className="w-full sm:w-[600px] bg-[#2D2E32] hover:bg-[#222126] rounded p-6 cursor-pointer check">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <p className="hover:text-[#64F4AC] cursor-pointer text-2xl">{title}</p>
                    {Icon && <Icon className="text-[#64f4ac] text-xl" />}
                </div>
                <p className="text-[#92929A] text-sm mb-5">{description}</p>
                <p className="text-[10px] font-medium uppercase cursor-pointer hover:underline">
                {numProject}
                </p>
            </div>
        </div>
    );
};

export default IntroCards;
