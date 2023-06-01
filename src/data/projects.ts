import guidesImage from '../../public/images/guides.png';
import poweredByClearbitImage from '../../public/images/powered-by-clearbit.png';
import tackleImage from '../../public/images/tackle.png';
import clearbitForBusinessImage from '../../public/images/clearbit-for-business.png';
import captureImage from '../../public/images/capture.png';

const projects = [
    {
      "title": "Clearbit Guides",
      "description": "Guides on how to integrate Clearbit's products with other popular SaaS services.",
      "technologies": ["Contentful CMS", "Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": guidesImage,
        "alt": "clearbit guides landing page"
        },
      "link": "https://www.clearbit.com/resources/guides"
    },
    {
      "title": "Powered by Clearbit",
      "description": "Landing page introducing Clearbit's developer-focused partner plan.",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": poweredByClearbitImage,
        "alt": "powered by clearbit landing page"
        },
      "link": "https://www.clearbit.com/partners/powered-by-clearbit"
    },
    {
      "title": "tackle",
      "description": "React UI components that I worked on as a personal project.",
      "technologies": ["React", "TypeScript", "Tailwind CSS", "Framer Motion"
        ],
      "image": {
        "src": tackleImage,
        "alt": "tackle docs"
        },
      "link": "https://tackle.vercel.app"
    },
    {
      "title": "Clearbit for Business",
      "description": "Landing page introducing Clearbit's entry-level product plan",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": clearbitForBusinessImage,
        "alt": "clearbit capture landing page"
        },
      "link": "https://www.clearbit.com/lp/use-cases/clearbit-for-business"
    },
    {
      "title": "Clearbit Capture",
      "description": "Landing page introducing Clearbit's automated website prospecting solution.",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": captureImage,
        "alt": "clearbit capture landing page"
        },
      "link": "https://www.clearbit.com/platform/capture"
    }
]

export default projects;
