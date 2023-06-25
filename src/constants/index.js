import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eos,
  tripguide,
  threejs,
  wpi,
  kwork,
  publify,
  forkify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Energy of the South",
    icon: eos,
    iconBg: "#383E56",
    date: "May 2020 - Oct 2021",
    points: [
      "Designed and developed software application to support natural resources logistics calculations using Python programming language and the Django framework.",
      "Created and maintained a database system using AWS Relational Database Service (RDS).",
      "Developed an open API using Swagger to enable easy communication between different software components.",
      "Collaborated with team members to identify requirements, troubleshoot issues and propose solutions.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "WPI",
    icon: wpi,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Collaborated with team members to design and develop a web application using AWS, Java and JavaScript",
      "Contributed to the implementation of back-end functionality using AWS Lambda functions to manage user accounts, algorithm search and content-creation.",
      "Participated in the development of a RESTful API using Swagger and AWS API Gateway.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Freelance",
    icon: kwork,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Developed full-stack websites using HTML5, CSS3, SCSS/SASS, JavaScript and React.js.",
      "Collaborated with clients to understand their requirements and ensure their needs met.",
      "Optimized websites performance and loading times through efficient coding, use of caching techniques, image optimization.",
      "Designed and implemented responsive user interfaces using media queries and modern techniques (including responsive grids and flexboxes)",
      "Integrated third-party APIs and services to enhance websites functionality.",
      "Managed project timelines, deliverables, and milestones to ensure timely and successful competition of projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dinmukhamed proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dinmukhamed does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Dinmukhamed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Publify",
    description:
      "Web-based platform that allows users to search, create, and manage posts on any topic. A visitor of this website can create their own accounts, create tags for each post and add comments!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "emotion.js",
        color: "pink-text-gradient",
      },
    ],
    image: publify,
    source_code_link: "https://github.com/JustForFun29/publify-frontend",
  },
  {
    name: "Forkify",
    description:
      "Web application that enables users to search for over 1.000.000 recipes! A user can create their own recipes and bookmark the recipes that they really liked!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/JustForFun29/forkify-application",
  },
];

export { services, technologies, experiences, testimonials, projects };
