import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Raj",
  lastName: "Salla",
  name: `Raj Salla`,
  role: "iOS and AI/ML Engineer",
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
  headline: <>iOS and AI/ML Engineer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">LinePal</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/linepal",
  },
  subline: (
    <>
    I'm an iOS and AI/ML engineer with 5+ years building production apps and on-device intelligence. From clinical workflows at Vensora to voice synthesis pipelines at Vosyn, my work sits at the intersection of mobile experience and applied AI.
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
        I'm an iOS and AI/ML engineer with 5+ years building production apps and on-device intelligence.
        From clinical workflows at Vensora to voice synthesis pipelines at Vosyn, my work sits at the
        intersection of mobile experience and applied AI. I help startups bring their iOS and AI solutions
        to life — and I care deeply about building technology that genuinely helps people.
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
        role: "iOS and AI/ML Engineer",
        achievements: [
          <>
            Led end-to-end iPad development integrating BLE peripherals, real-time processing, and Core ML on-device using Swift and MVVM, delivering accessible, localized interfaces
          </>,
          <>
            Translated PRDs into reliable clinical workflows; partnered with product, design, and QA to define release criteria and accessibility standards, improving workflow reliability by 35%
          </>,
          <>
            Implemented audio capture and signal pipelines with telemetry and robust error handling, reducing audio processing latency by 42%
          </>,
          <>
            Drove AI model deployment with Core ML and CI/CD to streamline automation, boosting automation efficiency by 30%
          </>,
        ],
        images: [],
      },
      {
        company: "LinePal (Ontario, Canada - Remote)",
        timeframe: "Jun 2024 - Present",
        role: "iOS Engineer",
        achievements: [
          <>
            Architected and delivered a production iOS app from scratch with Swift, SwiftUI, and MVVM; modularized components and state management for maintainability
          </>,
          <>
            Built and integrated a Django backend with RESTful APIs; designed contracts, auth flows, and data models for dependable client-server operations
          </>,
          <>
            Optimized custom UI components and animations; improved rendering performance and responsiveness, increasing session duration by 28% and retention by 21%
          </>,
          <>
            Managed App Store releases via TestFlight and AppStore Connect; instrumented Firebase analytics achieving 99.6% crash-free sessions
          </>,
          <>
            Scaled infrastructure to support 3x traffic spike, achieving 99.9% app uptime while maintaining sub-200ms response times
          </>,
        ],
        images: [],
      },
      {
        company: "Vosyn (Ontario, Canada - Remote)",
        timeframe: "Dec 2023 - Jun 2024",
        role: "AI Software Engineer",
        achievements: [
          <>
            Engineered and fine-tuned multilingual voice synthesis models using Whisper ASR and NVIDIA V100/T4 GPUs, improving Naturalness score (NISQA) by 16.7% (3.47 → 4.05)
          </>,
          <>
            Built scalable microservice infrastructure for AI audio pipelines using AWS, Docker, FastAPI and S3; reduced processing time by 40% and cut operational expenses by $25,000
          </>,
          <>
            Developed end-to-end auto-dubbing and localization pipeline supporting English, French, and Spanish; resolved alignment issues and increased output accuracy by 22%
          </>,
          <>
            Designed inference deployment strategy on AWS SageMaker and containerized models for rapid testing; improved model update cycle from days to hours
          </>,
        ],
        images: [],
      },
      {
        company: "Volansys Technologies (India - Onsite)",
        timeframe: "2017 - 2020",
        role: "iOS Developer",
        achievements: [
          <>
            Worked on multiple client projects as part of a 5+ developer iOS team, delivering production apps across IoT and smart home domains
          </>,
          <>
            Developed smart home safety app with smoke/CO alarm monitoring, implementing CoreBluetooth connectivity, WiFi provisioning, and Amazon Alexa integration
          </>,
          <>
            Built UI/UX components and integrated RESTful APIs for real-time device communication and HomeKit compatibility
          </>,
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
        description: <>Master of Science in Computer Science (May 2023) - Ontario, Canada</>,
      },
      {
        name: "A D Patel Institute of Technology",
        description: <>Bachelor of Engineering in Computer Engineering (May 2018) - Gujarat, India</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "iOS Development",
        description: (
          <>Expert in Swift, SwiftUI, and UIKit with 5+ years building production iOS apps using MVVM architecture.</>
        ),
        tags: [
          {
            name: "Swift",
            icon: "swift",
          },
          {
            name: "SwiftUI",
            icon: "swift",
          },
        ],
        images: [],
      },
      {
        title: "AI/ML Engineering",
        description: (
          <>Building on-device AI with Core ML, voice synthesis pipelines, and real-time audio processing systems.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Core ML",
            icon: "apple",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>Experience with Django, FastAPI, AWS (S3, SageMaker), Docker, and REST API development.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AWS",
            icon: "aws",
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
