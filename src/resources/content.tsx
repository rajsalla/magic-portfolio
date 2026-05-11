import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Raj",
  lastName: "Salla",
  name: "Raj Salla",
  role: "AI/ML Engineer",
  avatar: "/images/avatar.jpg",
  email: "rsalla72@gmail.com",
  location: "America/Thunder_Bay", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rajsalla",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raj-salla/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI/ML Engineer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Aviara</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/vensora",
  },
  subline: (
    <>
    I build production AI systems that ship - from agentic pipelines and RAG architectures to on-device ML for edge hardware.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/raj-salla/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI/ML Engineer with 5 years of software engineering experience, including 2 years deploying production-grade Generative AI and voice systems. Focused on moving beyond "AI is cool" to build products that earn, with deep expertise in custom RAG architectures, vector databases (Pinecone), and modular agentic pipelines. Architect end-to-end solutions from Whisper speech recognition to scalable Python APIs that seamlessly translate complex business requirements into reliable, high-performance applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Vensora Inc (United States - Remote)",
        timeframe: "May 2025 - Present",
        role: "AI/ML Engineer",
        achievements: [
          "Built production ML pipelines in Python and TensorFlow, including data preprocessing (Pandas), dataset versioning on S3, and reproducible training workflows for speech and medical imaging models.",
          "Accelerated patient diagnostic workflows and reduced manual workload for doctors, achieving a 35% improvement in diagnostic and documentation accuracy by training and deploying computer vision and NLP models on AWS EC2 using Docker and FastAPI.",
          "Led end-to-end edge deployment by converting TensorFlow models to Core ML, applying quantization and pruning for iPad constraints, enabling low-latency, offline inference and reducing on-device inference time by 40%.",
        ],
        images: [],
      },
      {
        company: "LinePal (Ontario, Canada - Remote)",
        timeframe: "Jun 2024 - Apr 2025",
        role: "iOS Engineer",
        achievements: [
          "Architected and delivered a production iOS app from scratch with Swift, SwiftUI, and MVVM; modularized components and state management for maintainability.",
          "Scaled LinePal iOS app from 0 to 4.5K users in 2 weeks through rapid iteration and user-driven optimization; later grew to 50K users.",
          "Optimized UX with efficient state management and custom UI components, driving engagement and securing a 4+ star App Store rating.",
        ],
        images: [],
      },
      {
        company: "Vosyn (Ontario, Canada - Remote)",
        timeframe: "Dec 2023 - Jun 2024",
        role: "AI Software Engineer",
        achievements: [
          "Reduced end-to-end processing latency by 40% and saved $25k in annual operational costs by architecting scalable AI microservices using Python, FastAPI, and Docker on AWS.",
          "Architected and deployed production-grade multilingual voice and Generative AI pipelines using Whisper ASR, LLM-based prompt workflows, and modular containerized services, enabling real-time conversational and localization use cases.",
          "Designed a custom agentic architecture where independent Dockerized services handled transcription, semantic retrieval, translation, and voice synthesis, improving system scalability and fault isolation.",
        ],
        images: [],
      },
      {
        company: "Volansys Technologies (India - Onsite)",
        timeframe: "May 2017 - Mar 2020",
        role: "Associate Software Engineer",
        achievements: [
          "Achieved a 4.7 average App Store rating across five successfully delivered iOS applications by collaborating on end-to-end development using Swift, Objective-C, and Xcode.",
          "Reduced app load times by 30% and significantly enhanced user experience by engineering optimized data layers with Core Data and rendering pipelines with Core Animation.",
          "Boosted user engagement by 30% and reduced code complexity by 20% by integrating Firebase for real-time features and structuring the codebase with scalable MVVM architecture.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Lakehead University",
        description: <>Master of Science in Computer Science (May 2023) - Lakehead University - Ontario, Canada</>,
      },
      {
        name: "A D Patel Institute of Technology",
        description: <>Bachelor of Engineering in Computer Engineering (May 2018) - ADIT - Gujarat, India</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Machine Learning & NLP",
        description: (
          <>Python, PyTorch, TensorFlow, LLMs, RAG, LangChain, semantic search, NLP</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PyTorch",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Data & Backend",
        description: (
          <>Pandas, NumPy, FastAPI, RESTful APIs, microservices, asynchronous processing</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "FastAPI",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & MLOps",
        description: (
          <>AWS (EC2, SageMaker, EKS, S3), Docker, CI/CD, Pinecone Vector DB, GPU-based inference</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Mobile & Edge AI",
        description: (
          <>iOS (Swift, SwiftUI, UIKit), Core ML, on-device inference, BLE integration</>
        ),
        tags: [
          {
            name: "Swift",
            icon: "swift",
          },
          {
            name: "Core ML",
            icon: "apple",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
