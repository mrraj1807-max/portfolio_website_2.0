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
    title: "AtliQ Hardware — Sales & Finance Analysis",
    description:
      "End-to-end Sales & Finance Analytics for AtliQ Hardware using Microsoft Excel. Built with Power Query (ETL), Pivot Tables, DAX measures, and conditional formatting across 23 global markets. Covers Customer Performance, P&L by Market, Gross Margin trends, and FY2021 Target vs. Actual across 189 customers & 800K+ transactions.",
    image: "/projects/project-4.jpg",
    link: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ",
    documents: [
      {
        label: "🌐 Live Interactive Dashboard",
        url: "https://mrraj1807-max.github.io/sales_-_finance_analysis_of-_AtliQ/",
      },
      {
        label: "📊 GitHub Repository",
        url: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ",
      },
      {
        label: "📄 Customer Performance (PDF)",
        url: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ/blob/main/reports/AtliQ_Customer_Sales_Analysis.pdf",
      },
      {
        label: "📄 Target vs Performance (PDF)",
        url: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ/blob/main/reports/AtliQ_Target_Report_21.pdf",
      },
      {
        label: "📥 Excel Analytics Workbench (.xlsx)",
        url: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ/raw/main/excel/AtliQ_Hardware_Sales_Finance_Analysis.xlsx",
      },
      {
        label: "📥 P&L Statement Model (.xlsx)",
        url: "https://github.com/mrraj1807-max/sales_-_finance_analysis_of-_AtliQ/raw/main/excel/AtliQ_Hardware_P&L_Statement.xlsx",
      },
    ],
  },
  {
    title: "Business Insights 360 — AtliQ Hardware",
    description:
      "Enterprise Power BI dashboard suite providing 360° analytics across Finance, Sales, Marketing, Supply Chain, and Executive functions. Features 50+ DAX measures, Star Schema data modeling (MySQL gdb041 & gdb056), forecast accuracy tracking, and custom dark UI design system.",
    image: "/projects/business-insight-360.png",
    link: "https://github.com/mrraj1807-max/business_insight_360",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/business_insight_360",
      },
      {
        label: "🖼️ Dashboard & UI Assets",
        url: "https://github.com/mrraj1807-max/business_insight_360/tree/main/assets",
      },
      {
        label: "🎨 Power BI Dark Theme (.json)",
        url: "https://github.com/mrraj1807-max/business_insight_360/blob/main/BusinessInsight360_Theme.json",
      },
      {
        label: "📐 Design Guide & Specs",
        url: "https://github.com/mrraj1807-max/business_insight_360/blob/main/DESIGN_GUIDE.md",
      },
      {
        label: "📥 Power BI Model (.pbix)",
        url: "https://github.com/mrraj1807-max/business_insight_360/raw/main/Business_Insight__360.pbix",
      },
      {
        label: "📖 DAX Measures & P&L Pipeline",
        url: "https://github.com/mrraj1807-max/business_insight_360#readme",
      },
    ],
  },
  {
    title: "Elizium Hotels — Revenue & Booking Analytics",
    description:
      "Comprehensive hospitality business analytics dashboard built in Power BI for luxury hotel chains. Tracks RevPAR, ADR, Occupancy %, Realisation %, and cancellation patterns across multiple properties and room classes, unlocking revenue optimization strategies.",
    image: "/projects/elizium-hotels.png",
    link: "https://github.com/mrraj1807-max/elezium_hotel_project",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/elezium_hotel_project",
      },
      {
        label: "📥 Power BI Model (.pbix)",
        url: "https://github.com/mrraj1807-max/elezium_hotel_project/raw/main/Elizium%20Hotels.pbix",
      },
      {
        label: "📊 Metrics & KPI List (.xlsx)",
        url: "https://github.com/mrraj1807-max/elezium_hotel_project/raw/main/metrics_list.xlsx",
      },
      {
        label: "📖 Case Study & README",
        url: "https://github.com/mrraj1807-max/elezium_hotel_project#readme",
      },
    ],
  },
  {
    title: "Bank Marketing Campaign Analysis (EDA)",
    description:
      "Exploratory Data Analysis (EDA) on banking telemarketing campaigns to assess customer propensity towards term deposits. Features customer segmentation, contact duration impact, seasonal trends, and predictive conversion insights to boost campaign ROI.",
    image: "/projects/bank-marketing-eda.png",
    link: "https://github.com/mrraj1807-max/bank_marketing_eda",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/bank_marketing_eda",
      },
      {
        label: "📄 Marketing Assignment Report (PDF)",
        url: "https://github.com/mrraj1807-max/bank_marketing_eda/raw/main/Bank%20Marketing%20Assignment%20By%20Upgrad.pdf",
      },
      {
        label: "📥 Excel Analytics Workbook (.xlsx)",
        url: "https://github.com/mrraj1807-max/bank_marketing_eda/raw/main/Bank%20Marketing%20Assignment%20Excel%20File%20By%20Upgrad%20.xlsx",
      },
      {
        label: "📖 Documentation & Insights",
        url: "https://github.com/mrraj1807-max/bank_marketing_eda#readme",
      },
    ],
  },
  {
    title: "IMDB Movie Rating Analysis (SQL)",
    description:
      "In-depth SQL analytical project evaluating decades of IMDB movie datasets. Utilizes complex queries, CTEs, window functions, and multi-table joins to analyze box office performance, genre shifts, multilingual productions, and director success rates.",
    image: "/projects/imdb-rating-sql.png",
    link: "https://github.com/mrraj1807-max/imdb_rating_project",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/imdb_rating_project",
      },
      {
        label: "💾 SQL Query Suite (.sql)",
        url: "https://github.com/mrraj1807-max/imdb_rating_project/raw/main/Imdb%20Project%20unguided%20by%20upgrad%20sql%20file.sql",
      },
      {
        label: "📄 Project Brief & Findings (PDF)",
        url: "https://github.com/mrraj1807-max/imdb_rating_project/raw/main/Imdb%20Project%20unguided%20by%20upgrad.pdf",
      },
      {
        label: "📖 Documentation & Queries",
        url: "https://github.com/mrraj1807-max/imdb_rating_project#readme",
      },
    ],
  },
  {
    title: "Movie Exploratory Data Analysis (Python)",
    description:
      "Python data science workflow conducting end-to-end exploratory analysis on film industry performance. Employs Pandas and NumPy for rigorous data wrangling, with Seaborn and Matplotlib generating statistical distributions and correlation heatmaps.",
    image: "/projects/movie-assignment-python.png",
    link: "https://github.com/mrraj1807-max/movie_assiment",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/movie_assiment",
      },
      {
        label: "📓 Jupyter Analysis Notebook (.ipynb)",
        url: "https://github.com/mrraj1807-max/movie_assiment/blob/main/Movie%20Assignment%20unguided%20project%20by%20upgrad.ipynb",
      },
      {
        label: "📖 README & Workflow",
        url: "https://github.com/mrraj1807-max/movie_assiment#readme",
      },
    ],
  },
  {
    title: "SaaS Business & Financial Analytics",
    description:
      "Financial and cohort analytics engine for subscription SaaS models. Tracks MRR, ARR, churn rate, Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), and multi-tier revenue retention matrices with strategic business optimization.",
    image: "/projects/saas-project.png",
    link: "https://github.com/mrraj1807-max/saas_project",
    documents: [
      {
        label: "📂 GitHub Repository",
        url: "https://github.com/mrraj1807-max/saas_project",
      },
      {
        label: "📥 SaaS Financial Model (.xlsx)",
        url: "https://github.com/mrraj1807-max/saas_project/raw/main/Saas%20Project%20Excel%20File%20Unguided%20By%20Upgrad.xlsx",
      },
      {
        label: "📄 Executive Report & Strategy (PDF)",
        url: "https://github.com/mrraj1807-max/saas_project/raw/main/Saas%20Unguided%20Project%20By%20Upgrad.pdf",
      },
      {
        label: "📖 Documentation & Metrics",
        url: "https://github.com/mrraj1807-max/saas_project#readme",
      },
    ],
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
        link: "/#experience",
      },
      {
        name: "Awards",
        icon: null,
        link: "/#awards",
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
    link: "/#awards",
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
