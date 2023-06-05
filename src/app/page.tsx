import Head from 'next/head';
import Link from 'next/link';
import projects from '@/data/projects';
import LoomEmbed from '@/components/LoomEmbed';
import ProjectCard from '@/components/ProjectCard';
import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function Home() {
  return (
    <main className="main-container">
      <Head>
        <title>Jacob Moore - Portfolio</title>
      </Head>
      <header className='flex flex-col items-center sm:py-28 py-20'>
        <h1 className="font-bebas-neue font-bold sm:text-7xl text-6xl">Jacob Moore</h1>
        
        <div className="h4 flex sm:flex-row flex-col text-center">
          <span>Frontend Developer</span>
          <span className='hidden sm:block mx-2'>&bull;</span>
          <span>Sacramento, CA</span>
        </div>

        <div className='flex space-x-3 mt-2'>
          <Link href="https://www.linkedin.com/in/jacob-moore-692533171" target='blank'>
            <SiLinkedin size={25} className='profile-icon'/>
          </Link>
          <Link href="https://github.com/jrmoore117" target='blank'>
            <SiGithub size={25} className='profile-icon' />
          </Link>
        </div>
      </header>
      
      <section className='flex flex-col items-center pb-28'>
        <h2 className='h2'>Portfolio</h2>

        {projects && projects.map(({ title, description, technologies, image, link }) => (
          /* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */
          /* @ts-expect-error Async Server Component */
          <ProjectCard
            key={title}
            title={title}
            description={description}
            technologies={technologies}
            image={image}
            link={link}
          />
        ))}

        <h2 className='h2 mt-28'>References</h2>
        
        <LoomEmbed src="https://www.loom.com/embed/9e552d98fa1448788fac79f6e999532b" />
      </section>
    </main>
  )
}
