import ProjectPreview from "./ProjectPreview"

const Projects = () => {
    return (
        <div className="w-full h-[1200px] pb-28 px-36 flex flex-col flex-wrap gap-20">
            <div className="w-[48%] flex justify-center">
                <div className="flex flex-col justify-center">
                    <p className="text-3xl leading-loose">Latest Works</p>
                    <p className="text-[#92929A] text-sm">perfect solutions for digital experience</p>
                </div>
            </div>
            <ProjectPreview title="Whatsapp Clone" techStack={["NodeJs", "ReactJs"]} imageLink="whatsapp.png"/>
            <div className="w-[48%] flex">
                <div className="flex flex-col justify-center w-[400px]">
                    <p className="mb-1 text-3xl leading-loose text-[#64F4AC]">ALL PROJECTS</p>
                    <p className="text-[#92929A] text-sm">* Some projects do not allow publish by NDA, if you want to see more <span className="text-[#64F4AC] underline cursor-pointer">contact</span></p>
                </div>
            </div>
            <ProjectPreview title="CARISCA Lab" techStack={["Next", "ReactJs"]} imageLink="carisca.png"/>
            <ProjectPreview title="Whatsapp Clone" techStack={["NodeJs", "ReactJs"]} imageLink="slack.png"/>
            {/* <ProjectPreview title="Whatsapp Clone" techStack={["NodeJs", "ReactJs"]} imageLink="whatsapp.png"/>
            <ProjectPreview title="Whatsapp Clone" techStack={["NodeJs", "ReactJs"]} imageLink="whatsapp.png"/>
            <ProjectPreview title="Whatsapp Clone" techStack={["NodeJs", "ReactJs"]} imageLink="whatsapp.png"/> */}


        </div>
    )
}

export default Projects