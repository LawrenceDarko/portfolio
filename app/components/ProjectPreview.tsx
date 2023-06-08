
import Image from "next/image"

interface ProjectPreviewProps {
    title: string,
    imageLink: string,
    techStack: string[]
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({title, techStack, imageLink}) => {
    return (
        <div id="section Works" className="w-[45%] h-[500px] rounded-2xl overflow-hidden relative gradient-overlay">
            <div className="relative w-full h-full ">
                <Image height={1000} width={1000} src={`/images/${imageLink}`} alt='project' className="relative previewImg"/>
            </div>
            <div className="absolute z-10 flex flex-row items-center justify-between w-full px-8 top-8">
                <p className="text-3xl">{title}</p>
                <div className="flex flex-row gap-4">
                    {techStack?.map(item => <p key={item} className="px-2 bg-[#4D4E52] rounded bg-opacity-[0.7]">{item}</p>)}
                    {/* <p>React</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectPreview