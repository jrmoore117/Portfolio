import Link from 'next/link';
import Image from 'next/image';
import usePlaceholder from '@/hooks/usePlaceholder';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
  }
  link: string;
}

const ProjectCard = async ({ title, description, technologies, image, link }: ProjectCardProps) => {
  const { base64, img } = await usePlaceholder(image.src);

  return (
    <Link href={link} target='blank' className='w-full'>
      <div className='project-card'>
        <div className='project-image-wrapper'>
          <Image
            {...img}
            alt={image.alt}
            blurDataURL={base64}
            placeholder="blur"
            className='project-image'
          />
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
}

export default ProjectCard;
