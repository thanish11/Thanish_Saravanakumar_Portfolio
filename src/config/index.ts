import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Thanish Saravanakumar — Applied AI & Cloud Engineer",
  author: "Thanish Saravanakumar",
  description:
    "Applied AI & Cloud Engineer specializing in LLM-based systems, scalable backend services, and cloud-native AI platforms. Experienced in building production-grade AI solutions end to end.",
  lang: "en",
  siteLogo: "/thanish.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/thanish-s-319666191" },
    { text: "GitHub", href: "https://github.com/thanish11" },
    { text: "Email", href: "mailto:thanishsaravana2001@gmail.com" },
  ],
  socialImage: "/thanish.jpg",
  canonicalURL: "https://thanishailabs.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Thanish Saravanakumar",
    specialty: "Applied AI & Cloud Engineer",
    summary:
      "I build production-grade AI systems using LLMs, scalable backend APIs, and cloud-native infrastructure. Experienced in end-to-end ownership from architecture to deployment.",
    email: "thanishsaravana2001@gmail.com",
  },

  experience: [
    {
      company: "Infosys BPM",
      position: "AI Engineer",
      startDate: "Jul 2025",
      endDate: "Present",
      summary: [
        "Designed and built AI-powered backend services using Python and FastAPI, integrating LLMs for smart email automation, ticket intelligence, and multilingual conversational AI systems.",
        "Architected and deployed Azure cloud infrastructure using Terraform, managing Dev, UAT, and Production environments with cost-aware and scalable resource provisioning.",
        "Developed secure, scalable APIs and data layers using PostgreSQL, Redis, JWT authentication, and integrated AI systems with enterprise platforms such as ServiceNow and Databricks.",
      ],
    },
    {
      company: "DRDO – Centre for Airborne Systems (CABS)",
      position: "AI & Machine Learning Intern",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      summary: [
        "Worked on AI-based applications for defense systems, focusing on machine learning model optimization, real-time data processing, and sensor data integration.",
        "Collaborated with senior scientists to design scalable AI pipelines for detection and classification tasks in mission-critical environments.",
      ],
    },
    {
      company: "GDS – AICTE",
      position: "Advanced Data Analytics Intern",
      startDate: "Feb 2024",
      endDate: "Apr 2024",
      summary: [
        "Performed exploratory data analysis on healthcare datasets to study illness prevalence and lifestyle correlations.",
        "Designed interactive Power BI dashboards to visualize trends and support data-driven decision-making.",
      ],
    },
  ],

  projects: [
    {
      name: "Enterprise AI Knowledge Assistant",
      summary:
        "A production-grade RAG-based AI system enabling enterprises to query internal documents using LLMs with secure, scalable backend architecture.",
      linkPreview: "/",
      linkSource: "https://github.com/thanish11",
      image: "/AI_Assistant.png",
    },
    {
      name: "AI Ticket & Email Intelligence Platform",
      summary:
        "An AI-driven platform for classifying, prioritizing, and analyzing support tickets and emails with multilingual and sentiment-aware capabilities.",
      linkPreview: "/",
      linkSource: "https://github.com/thanish11",
      image: "/AI_Ticket.png",
    },
    {
      name: "Ovarian Cancer Diagnosis System",
      summary:
        "An AI-powered medical diagnostic system leveraging machine learning models to assist in early-stage ovarian cancer detection.",
      linkPreview: "/",
      linkSource: "https://github.com/thanish11",
      image: "/OC_AI.png",
    },
  ],

  about: {
    description: `
      I am an Applied AI & Cloud Engineer with a strong focus on building real-world, production-grade AI systems. My work sits at the intersection of artificial intelligence, backend engineering, and cloud infrastructure.

      I specialize in designing and deploying LLM-based applications, scalable APIs, and cloud-native AI platforms using Python, FastAPI, Azure, and Infrastructure as Code. I enjoy taking ownership of systems end to end — from problem definition and architecture to deployment, monitoring, and optimization.

      I am particularly interested in applied AI, intelligent automation, and building AI products that solve real enterprise problems at scale.
    `,
    image: "/thanish.jpg",
  },
};