import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    java,
    figma,
    reactjs,
    tailwind,
    nodejs,
    git,
    python,
    django,
    carepulse,
    weatherforecast,
    inventorymanagement,
    Interface11,
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Full Stack Developer",
      icon: backend,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Python Full Stack Developer",
      company_name: "Interface11 Pvt. Ltd.",
      icon: Interface11,
      iconBg: "#383E56",
      date: "Feb 2025 - Present",
      points: [
        "Developing and maintaining full-stack web applications using Python (Flask/Django) and React.js.",
  "Designing and integrating RESTful APIs and managing backend logic with database connectivity.",
  "Creating responsive, user-friendly interfaces with HTML, CSS, JavaScript, and Tailwind CSS.",
  "Collaborating with designers, product managers, and fellow developers to deliver scalable features.",
  "Implementing cross-browser compatible designs and ensuring mobile-first responsiveness.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Inventory Management System",
      description:
        "Inventory Management System allows users to add, update, and track products efficiently through a user-friendly interface. It manages product details like name, quantity, and price using a Django REST API backend and a React frontend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "orange-text-gradient",
        },
      ],
      image: inventorymanagement,
      source_code_link: "https://github.com/",
    },
    {
      name: "CarePulse",
      description:
        "CarePulse is a healthcare management web application that enables patients to register, book appointments, and securely access their medical records. It provides real-time dashboards for doctors and admins using Next.js and Appwrite.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "twilio",
          color: "pink-text-gradient",
        },
      ],
      image: carepulse,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather Forecasting App",
      description:
        "The Weather Forecast web app provides real-time weather updates based on user location or searched cities. It displays temperature, humidity, wind speed, and weather conditions using data from a public weather API.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: weatherforecast,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };