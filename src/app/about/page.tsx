import Head from 'next/head';
import Link from 'next/link';
import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function Home() {
  return (
    <main className="main-container">
      <Head>
        <title>Jacob Moore - About</title>
      </Head>
      <header className='flex flex-col items-center sm:py-28 py-20'>
        <h1 className="font-bebas-neue font-bold sm:text-7xl text-6xl text-center">About Jacob Moore</h1>
        
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
      
      <section className='pb-28 space-y-10'>
        <p>
            Hey! I&apos;m Jacob, a former-teacher-turned-frontend-dev <span className='mr-1'>😵‍💫</span> 
        </p>

        <p>
            I spent 6 years in public education, bouncing around as a volunteer in special ed,
            stepping in as a substitute teacher, and finally landing in my own classroom as a high school English and ELD teacher.
            I poured myself into my work — probably too much — and eventually found that I had little time left for my own education.
            Learning is motivating for me, and as I lost time to practice new skills for myself, I lost motivation.
        </p>

        <p>
            I couldn&apos;t ignore the importance of prioritizing my own learning and growth,
            so I made the difficult decision to step away from education for a while and pursue another thing I love, technology.
            Tech, computers, software, games — they&apos;re always changing, always giving me something to read about and learn.
            I was hesitant to take a hobby and turn it into a job, but the more I learned about this field and how to code,
            the more motivated I became to do it professionally. That motivation was multiplied as I met new peers in the industry, who
            who supported my growth by giving me challenging opportunities to practice what I learned.
        </p>

        <p>
            Through that process, I helped teach at a coding bootcamp, started and trained customer-facing engineering teams,
            and earned the opportunity to learn from some amazing web developers at Clearbit.
            At this point, what matters most to me is finding more teammates invested in each other&apos;s growth,
            because all I want to do is continue learning, doing excellent work, sharing my knowledge, and working with peers that want the same.
        </p>
      </section>
    </main>
  )
}
