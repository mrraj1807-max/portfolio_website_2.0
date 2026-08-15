import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const SKILL_DATA = [
  {
    skill_name: "Power BI",
    image: "powerbi.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tableau",
    image: "tableau.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Excel",
    image: "excel.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Fabric",
    image: "fabric.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "aws.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Azure",
    image: "azure.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "n8n",
    image: "n8n.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "make.com",
    image: "make.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Power Automate",
    image: "powerautomate.jpg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/amitofficial1807/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/mrraj1807-max",
  },
] as const;

// Data Visualization & Dashboards
export const FRONTEND_SKILL = [
  {
    skill_name: "Power BI",
    image: "powerbi.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tableau",
    image: "tableau.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Excel",
    image: "excel.jpg",
    width: 80,
    height: 80,
  },
] as const;

// Programming & Databases
export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.jpg",
    width: 80,
    height: 80,
  },
] as const;

// Cloud Platforms
export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "aws.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Azure",
    image: "azure.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Fabric",
    image: "fabric.jpg",
    width: 80,
    height: 80,
  },
] as const;

// Process Automation
export const OTHER_SKILL = [
  {
    skill_name: "n8n",
    image: "n8n.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "make.com",
    image: "make.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Power Automate",
    image: "powerautomate.jpg",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Business Insights 360",
    description:
      "End-to-end Power BI dashboard spanning Finance, Sales, Marketing, Supply Chain & Executive views for a hardware company. Integrated data from multiple sources, built complex DAX measures, and surfaced actionable KPIs across 5 business functions.",
    image: "/projects/project-1.png",
    link: "#",
  },
  {
    title: "Telecom Customer Churn Analysis",
    description:
      "Analyzed customer churn patterns in a telecom dataset, identifying key drivers of attrition. Built interactive Tableau dashboards to visualize churn rates by demographics, contract types, and service usage patterns.",
    image: "/projects/project-2.png",
    link: "#",
  },
  {
    title: "Supply Chain Performance Dashboard",
    description:
      "Designed a supply chain analytics dashboard tracking inventory levels, delivery performance, and forecast accuracy. Enabled stakeholders to monitor KPIs in real-time with Power BI and SQL integration.",
    image: "/projects/project-3.png",
    link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/amitofficial1807/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/mrraj1807-max",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "mr.raj.1807@gmail.com",
        icon: FaEnvelope,
        link: "mailto:mr.raj.1807@gmail.com",
      },
      {
        name: "+91 9211411806",
        icon: FaPhone,
        link: "tel:+919211411806",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "/about",
      },
      {
        name: "Experience",
        icon: null,
        link: "/experience",
      },
      {
        name: "Contact",
        icon: null,
        link: "/contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About Me",
    link: "/about",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Experience",
    link: "/#experience",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Awards",
    link: "/awards",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/mrraj1807-max",
};

export const CERTIFICATES = [
  {
    title: "Python for Data Analytics",
    issuer: "Electronics & ICT Academy, IIT Roorkee",
    date: "June 2026",
    image: "/certificates/iit-roorkee-python.jpg",
    description: "20-Hour Self-Paced Course on Python for Data Analytics",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "August 2026",
    image: "/certificates/cisco-data-analytics.jpg",
    badge: "/certificates/cisco-badge.png",
    description:
      "Comprehensive Data Analytics Essentials certification with verified badge",
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Data Analyst Intern",
    company: "IBM",
    period: "2026 — Present",
    description:
      "Working as a Data Analyst Intern at IBM, applying data analysis and business intelligence skills to real-world enterprise projects. Leveraging Python, SQL, and Power BI for data-driven decision making.",
    current: true,
  },
  {
    title: "Virtual Data Analyst Intern",
    company: "AtliQ Technologies",
    period: "2025 — 2026",
    description:
      "Worked through real business case studies across telecom, supply chain, retail, and finance. Built interactive Power BI dashboards for multi-functional analysis. Applied Python and SQL for data cleaning, transformation, and analysis.",
    current: false,
  },
  {
    title: "Business Analytics & Consulting",
    company: "upGrad × PwC India",
    period: "2025",
    description:
      "Completed Professional Certificate in Business Analytics & Consulting. Gained hands-on experience with business case frameworks, KPI development, data storytelling, and stakeholder communication.",
    current: false,
  },
] as const;
