import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Intro from './components/Intro'
import Companies from './components/Companies'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectsTwo from './components/ProjectsTwo'
import ProjectTwoC from './components/ProjectTwoC'
import { useInView } from 'framer-motion'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const { ref, inView, entry } = useInView(options);

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Intro />
      <Companies />
      {/* <Projects /> */}
      <ProjectsTwo/>
      {/* <ProjectsTwo /> */}
      {/* <ProjectsTwo showRight/> */}
      <Footer />
      {/* <audio id="myAudio" autoPlay loop controls>
        <source src="/music/zion.mp3"/>
      </audio> */}
    </div>
  )
}
