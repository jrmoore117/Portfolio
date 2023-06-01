import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: {
    src: StaticImageData;
    alt: string;
  }
  link: string;
}

const ProjectCard = ({ title, description, technologies, image, link }: ProjectCardProps) => (
  <Link href={link} target='blank' className='w-full'>
    <div className='project-card'>
      <div className='project-image-wrapper'>
        <Image src={image.src} alt={image.alt} className='project-image' />
      </div>
      <div className='project-info'>
        <h3 className='project-title'>{title}</h3>
        <p>{description}</p>
        <div className='flex flex-wrap'>
          {technologies && technologies.map((tech) => (
            <span key={tech} className='project-technology'>{tech}</span>
          ))}
        </div>
      </div>
    </div> 
  </Link>
);

export default ProjectCard;
