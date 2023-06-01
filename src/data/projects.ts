// image.src paths are formatted for use with fs.readFile in usePlaceholder
const projects = [
    {
      "title": "Clearbit Guides",
      "description": "Guides on how to integrate Clearbit's products with other popular SaaS services.",
      "technologies": ["Contentful CMS", "Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": "./public/images/guides.png",
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
        "src": "./public/images/powered-by-clearbit.png",
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
        "src": "./public/images/tackle.png",
        "alt": "tackle docs"
        },
      "link": "https://tackle.vercel.app"
    },
    {
      "title": "Clearbit for Business",
      "description": "Landing page introducing Clearbit's entry-level product plan.",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS"
        ],
      "image": {
        "src": "./public/images/clearbit-for-business.png",
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
        "src": "./public/images/capture.png",
        "alt": "clearbit capture landing page"
        },
      "link": "https://www.clearbit.com/platform/capture"
    }
]

export default projects;
