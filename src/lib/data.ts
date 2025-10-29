
import { Github, Linkedin, Briefcase, GraduationCap, Mail, Award, Database, BarChart, Settings, TestTube, Search, Users, GitBranch, Terminal, MessageSquare, Presentation } from "lucide-react";
import { BigQueryIcon, SSMSIcon, PowerBiIcon } from "@/components/common/CustomIcons";
import { FaPython, FaTable, FaFileExcel, FaGitAlt, FaJava, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiLooker, SiTableau, SiPandas, SiNumpy, SiJavascript, SiTypescript, SiExpress, SiPostman, SiHugo, SiMui, SiPenpot, SiMongodb } from 'react-icons/si';
import { VscJson } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";

export type IconType = React.ComponentType<{ className?: string }> | { type: 'img', src: string };

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: { name: string; url: string; icon: IconType }[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Steffin12-git',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/steffin-thomas-b85549260/',
    icon: Linkedin,
  },
    {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/steffinthomas12/',
    icon: { type: 'img', src: 'https://i.postimg.cc/KY3TCQfH/leetcode.png' },
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/steffinthomas12',
    icon: { type: 'img', src: 'https://i.postimg.cc/6qJfMFNc/hackerrank.png' },
  },
];

export const about = {
  bio: 'Results-driven Data Analyst with expertise in SQL, Python, Power BI, and BigQuery. Skilled in building ETL pipelines, predictive models, and interactive dashboards that turn raw data into actionable business insights. Transitioning from frontend development, bringing a strong foundation in automation, data storytelling, and visualization.',
};

export const skillsData = [
  {
    category: "Programming & Databases",
    icon: Database,
    skills: [
      { name: "SQL", tooltip: "Used for complex joins, CTEs, and window functions to aggregate hospitality data." },
      { name: "Python", tooltip: "Used Pandas/NumPy for data wrangling and Scikit-learn for building prediction models." },
      { name: "BigQuery", tooltip: "Managed and processed 15,000+ HR records for employee churn analysis." },
      { name: "SQLite", tooltip: "Stored real-time data from a Python ETL pipeline for the COVID-19 tracking project." },
      { name: "SQL Server", tooltip: "Queried and managed relational databases for enterprise applications." }
    ]
  },
  {
    category: "Data Analysis",
    icon: Search,
    skills: [
        { name: "Data Cleaning", tooltip: "Processed raw API data, handled missing values, and ensured data integrity for dashboards." },
        { name: "Anomaly Detection", tooltip: "Identified unusual spikes in COVID-19 data to flag potential outbreaks." },
        { name: "Statistical Analysis", tooltip: "Applied statistical methods to validate hypotheses and derive business insights." },
        { name: "Forecasting & Projections", tooltip: "Projected 2030 EV market sales using CAGR assumptions in Power BI." },
        { name: "A/B Testing", tooltip: "Experience in designing and analyzing A/B tests to drive product decisions." }
    ]
  },
  {
    category: "Data Engineering",
    icon: Settings,
    skills: [
        { name: "Automated ETL Pipelines", tooltip: "Built a daily ETL job with Python and Task Scheduler to ingest live COVID-19 data." },
        { name: "Data Lifecycle Management", tooltip: "Managed data from ingestion and storage to archival in various projects." },
        { name: "API Integrations", tooltip: "Fetched data from public APIs like disease.sh for real-time analytics." },
        { name: "Data Validation & Monitoring", tooltip: "Implemented checks to ensure data quality and consistency in ETL workflows." }
    ]
  },
  {
    category: "Visualization & BI",
    icon: BarChart,
    skills: [
        { name: "Power BI", tooltip: "Created interactive dashboards with DAX measures for hospitality and EV market analysis." },
        { name: "Tableau", tooltip: "Developed visualizations to explore and present complex datasets." },
        { name: "Looker Studio", tooltip: "Built a dashboard to visualize employee churn predictions from a BigQuery ML model." },
        { name: "Excel / Google Sheets", tooltip: "Used for initial data exploration, cleaning, and ad-hoc analysis." }
    ]
  },
    {
    category: "Collaboration & Tools",
    icon: Terminal,
    skills: [
      { name: "Git / GitHub / GitLab", tooltip: "Used for version control and collaboration on all personal and professional projects." },
      { name: "REST API", tooltip: "Experience in consuming REST APIs for data extraction and integration." },
      { name: "Google Workspace", tooltip: "Collaborated on documents, sheets, and presentations for project delivery." },
      { name: "Documentation", tooltip: "Wrote clear documentation for code, models, and project findings." },
      { name: "SSMS", tooltip: "Used SQL Server Management Studio for database administration and querying." }
    ]
  },
  {
    category: "Soft & Business Skills",
    icon: Presentation,
    skills: [
      { name: "Stakeholder Communication", tooltip: "Presented findings and recommendations to both technical and non-technical audiences." },
      { name: "Requirements Gathering", tooltip: "Worked with stakeholders to define project scope and key metrics for dashboards." },
      { name: "Agile Collaboration", tooltip: "Participated in agile ceremonies and collaborated with cross-functional teams." },
      { name: "Data Storytelling", tooltip: "Transformed complex data insights into clear, compelling narratives." },
      { name: "Business Insights", tooltip: "Translated data analysis into actionable recommendations to drive business strategy." }
    ]
  }
];


export const techStackSkills = [
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'SQL', icon: BsDatabaseFill, color: 'text-cyan-400' },
  { name: 'Power BI', icon: PowerBiIcon, color: 'text-yellow-400' },
  { name: 'BigQuery', icon: BigQueryIcon, color: 'text-blue-500' },
  { name: 'Tableau', icon: SiTableau, color: 'text-blue-500' },
  { name: 'Pandas', icon: SiPandas, color: 'text-purple-400' },
  { name: 'NumPy', icon: SiNumpy, color: 'text-blue-400' },
  { name: 'Excel', icon: FaFileExcel, color: 'text-green-500' },
  { name: 'Looker', icon: SiLooker, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'API', icon: AiOutlineApi, color: 'text-purple-500' },
  { name: 'SSMS', icon: SSMSIcon, color: 'text-red-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Java', icon: FaJava, color: 'text-red-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
  { name: 'Penpot', icon: SiPenpot, color: 'text-green-500' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
  { name: 'Hugo', icon: SiHugo, color: 'text-purple-500' },
  { name: 'MUI', icon: SiMui, color: 'text-blue-500' },
];


export const projectsData = [
  {
    title: 'Hospitality Revenue Analysis – AtliQ Grands',
    description: 'Automated ETL pipelines with optimized SQL queries, reducing reporting cycle by 40%. Built KPI dashboards (ADR, RevPAR, occupancy) to optimize pricing and revenue decisions.',
    tags: ['Power BI', 'SQL', 'Excel'],
    image: { id: "1", hint: "Indian palace hotel" },
    githubUrl: 'https://github.com/Steffin12-git/hospitality-revenue-analysis',
    language: 'Power BI',
    dashboardImage: 'https://raw.githubusercontent.com/Steffin12-git/hospitality-revenue-analysis/main/Dashboard_screenshot.png',
    detailedDescription: `
### Problem Statement
AtliQ Grands, a prestigious hotel chain, faced declining revenue and market share due to increased competition and inefficient decision-making. They needed a business intelligence solution to guide their strategy.

### My Role & Tasks
As the data analyst, I was tasked to:
- **Develop Key Metrics:** Established critical KPIs like ADR, RevPAR, Occupancy %, and Realisation %.
- **Build a Power BI Dashboard:** Created an insightful dashboard based on stakeholder requirements to track performance.
- **Derive Actionable Insights:** Analyzed the data to find opportunities for revenue growth and operational improvement.

### Key Insights & Recommendations
- **Insight 1: Static Pricing:** Noticed that pricing was the same for weekdays and weekends.
  - **Action:** Recommended implementing a **dynamic pricing** strategy to increase revenue during high-demand weekend periods.

- **Insight 2: High Cancellations on Certain Platforms:** Some booking platforms had significantly higher cancellation rates.
  - **Action:** Suggested optimizing OTA (Online Travel Agency) partnerships or enforcing stricter cancellation policies for underperforming platforms.

- **Insight 3: Top Performing Cities:** Mumbai and Hyderabad properties consistently outperformed others.
  - **Action:** Advised using these properties as **benchmarks** to replicate their successful strategies across other locations.

- **Insight 4: Revenue Driven by Luxury Segment:** The luxury hotel category generated 62% of the revenue despite having fewer properties.
  - **Action:** Proposed creating **upselling strategies** and package deals to encourage guests to upgrade from Business to Luxury rooms.
`
  },
  {
    title: 'Employee Churn Prediction – HR Analytics',
    description: 'Processed 15,000+ HR records in BigQuery, ensuring high-quality datasets. Developed churn prediction model with Random Forest, flagging high-risk employees 25% earlier, helping reduce attrition costs. Interactive Looker Studio dashboard visualizing churn risk by department and employee segments.',
    tags: ['BigQuery', 'PyCaret', 'Looker Studio'],
    image: { id: "2", hint: "churn prediction" },
    githubUrl: 'https://github.com/Steffin12-git/Employee-Churn-Analysis',
    language: 'BigQuery',
    dashboardImage: 'https://raw.githubusercontent.com/Steffin12-git/Employee-Churn-Analysis/main/Dashboard%20picture/Employee_Churn_Report-1.png',
    detailedDescription: `
### Problem Statement
High employee turnover leads to significant business challenges, including increased hiring costs, productivity loss, and lowered morale. This project's goal was to build a predictive model that proactively identifies employees at risk of leaving and provides actionable insights for retention strategies.

### Tech Stack & Workflow
- **Data Storage & Querying:** Google BigQuery
- **Modeling & Processing:** Python on Google Colab with PyCaret for AutoML.
- **Visualization:** Google Looker Studio for the final dashboard.
The workflow involved collecting and cleaning HR data in BigQuery, training multiple models using PyCaret's AutoML, selecting the best-performing model, and visualizing the predictions in a Looker Studio dashboard for HR teams.

### Model Performance & Selection
A **Random Forest Classifier** was chosen as the final model due to its superior performance.
- **Accuracy:** 98%
- **Precision:** 0.99
- **Recall:** 0.95
- **F1-Score:** 0.97
It achieved the best balance between precision and recall, ensuring that the model could reliably identify at-risk employees without generating excessive false positives. The model demonstrated near-perfect separation on the ROC metric (AUC ≈ 0.99).

### Key Insights & Recommendations
- **Key Churn Drivers:** Job satisfaction, tenure, number of projects, and average monthly hours were the most predictive features for employee churn.
- **Proactive Retention:** The model identified 7 high-risk employees in the pilot program, allowing HR to conduct targeted "stay interviews."
- **Department Focus:** The dashboard highlighted that the **technical, support, and sales** departments had the highest concentration of at-risk employees.
- **Strategic Actions:** Recommendations included implementing employee recognition programs, creating clear career development paths, and offering retention incentives to at-risk employees.
`
  },
  {
    title: 'EV Market Entry Strategy – Automotive Sector',
    description: 'Forecasted EV adoption and sales scenarios using SQL + CAGR/DAX, improving forecast accuracy by 30%. Created dashboards comparing state-wise penetration, competitor performance, and market trends. Delivered data-driven recommendations for a multimillion-dollar investment strategy.',
    tags: ['Power BI', 'Excel', 'DAX'],
    image: { id: "3", hint: "ev market" },
    githubUrl: 'https://github.com/Steffin12-git/Automotive_project',
    language: 'Power BI',
    dashboardImage: [
        'https://i.postimg.cc/BvfNwcvC/Main-dashboard-1.png',
        'https://i.postimg.cc/Y2DRww90/Main-dashboard-2.png',
        'https://i.postimg.cc/Z5px3BLv/Main-dashboard-3.png'
    ],
    detailedDescription: `
### Problem Statement
AtliQ Motors, an automotive giant from the USA, is planning to launch its best-selling electric and hybrid vehicles in India. The task is to analyze the existing EV/Hybrid market in India, answer key research questions, and present the findings in a dashboard to support the company's expansion.

### Key Metrics & DAX Measures
- **Penetration Rate:** Calculated the proportion of electric vehicles sold relative to total vehicle sales.
- **CAGR (Compound Annual Growth Rate):** Computed the yearly growth rate in EV and total vehicle sales.
- **Top N/Bottom N Ranking:** Used RANKX and dynamic slicers to filter states or makers based on performance.
- **Forecasting:** Projected future sales for 2030 using CAGR assumptions.

### Primary Research Findings
- Identified top/bottom manufacturers and states by EV penetration using dynamic filters.
- Analyzed quarterly sales trends for the top 5 makers.
- Compared Delhi vs. Karnataka EV sales and penetration rates.
- Calculated CAGR for top manufacturers and states to identify high-growth areas.
- Uncovered seasonal sales trends for strategic planning.

### Secondary Research Insights & Recommendations
- **Customer Preferences:** Key drivers are cost savings, environmental impact, and smart features.
- **Government Incentives:** Higher incentives for 4-wheelers (FAME-II) than for 2-wheelers.
- **Infrastructure Correlation:** States with better charging infrastructure (Delhi, Karnataka) show higher EV penetration.
- **Brand Ambassador:** Recommended **Ranveer Singh** for his mass appeal and tech-savvy image.
- **Ideal Manufacturing State:** Recommended **Tamil Nadu** due to its favorable policies, infrastructure, and skilled labor.

### Top 3 Strategic Recommendations
1. **Launch Strategy:** Use a dual EV/Hybrid launch model and a brand ambassador to maximize market reach.
2. **Manufacturing & Infrastructure:** Establish a manufacturing unit in Tamil Nadu and build out charging infrastructure in target markets.
3. **Product & Support:** Deliver high-quality vehicles with robust after-sales service and customer support.
`
  },
    {
    title: 'Epidemiological Data Pipeline & Dashboard – COVID-19 Project',
    description: 'Designed a real-time ETL pipeline with anomaly detection for clean COVID data ingestion. Built dashboards tracking infections, recoveries, and death trends across regions. Enabled early detection of spikes and trends for public health monitoring.',
    tags: ['Python', 'SQLite', 'Power BI'],
    image: { id: "4", hint: "covid dashboard" },
    githubUrl: 'https://github.com/Steffin12-git/Live-Covid19-Project',
    language: 'Python',
    dashboardImage: 'https://raw.githubusercontent.com/Steffin12-git/Live-Covid19-Project/main/Dashboard.png',
    detailedDescription: `
### Project Overview
This project provides a real-time automated COVID-19 tracking system. It leverages public health data APIs and automates the full ETL workflow—from extraction to visualization—offering an interactive Power BI dashboard for global monitoring.

### Tech Stack & Automation
- **ETL:** Python, Pandas, SQLite
- **Visualization:** Microsoft Power BI
- **Automation:** Windows Task Scheduler with a .bat script to run the Python ETL job daily.

### Key Features
- **Automated Data Pipeline:** Fetches the latest global COVID-19 data from the disease.sh API every day.
- **Data Logging:** Stores historical data in an SQLite database to track trends over time.
- **Interactive Dashboard:** Visualizes key metrics such as cases, deaths, recoveries, and active cases by country.
- **Global Monitoring:** A world map provides a clear geographical overview of the pandemic's impact.

### Conclusion
This project is a strong showcase of end-to-end data skills, including:
- API Integration & ETL
- Real-time data pipelines
- Database management with SQLite
- Power BI dashboarding for stakeholder reporting
- Full automation of the data workflow to ensure freshness with zero manual effort.
`
  },
];

export const educationData = [
  {
    degree: 'MCA',
    institution: 'MACFAST College\nMG University',
    duration: 'Sep 2024',
  },
  {
    degree: 'BCA',
    institution: 'Catholicate College\nMG University',
    duration: 'June 2022',
  },
];

export const certificationsData = [
    {
    title: 'Google Advanced Data Analytics',
    issuer: 'Coursera',
    date: 'In Progress – Expected Oct 2025',
    credentialId: '',
    link: '#',
    subCourses: [
      { title: 'Foundations of Data Science by Google', credentialId: '74A181Q36TFM', link: 'https://www.coursera.org/account/accomplishments/verify/74A181Q36TFM' },
      { title: 'Get Started with Python by Google', credentialId: 'RXQKAZHPG167', link: 'https://www.coursera.org/account/accomplishments/verify/RXQKAZHPG167' },
      { title: 'Go Beyond the Numbers: Translate Data into Insights', credentialId: 'D7D6E2PK7YJF', link: 'https://www.coursera.org/account/accomplishments/verify/D7D6E2PK7YJF' },
      { title: 'The Power of Statistics', credentialId: '', link: 'https://coursera.org/share/2714b2563d7ab4d1059e66e3a4623ef0' },
      { title: 'Regression Analysis: Simplify Complex Data Relationships', credentialId: '', link: 'https://coursera.org/share/0a78c617f413c83d4f3d8f380bdea313' },
      { title: 'The Nuts and Bolts of Machine Learning', credentialId: '', link: 'https://coursera.org/share/dd166fd02392a9e0ec6e5939efc3fa30' },
      { title: 'Google Advanced Data Analytics Capstone', credentialId: '', link: 'https://coursera.org/share/fc1af344bb9bdb16ce239ffad5e654df'},
      { title: 'Accelerate Your Job Search with AI', credentialId: '', link: 'https://coursera.org/share/6e23a2066875073d3a6cac4fae78bcb3' }
    ]
  },
  {
    title: 'Tata – GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    date: '',
    credentialId: 'NuHRWm9P9qb79BuPH',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_Gh9rGJRanLRb9Tir8_1752503272153_completion_certificate.pdf',
    subCourses: []
  },
  {
    title: 'Data Visualization: Storytelling',
    issuer: 'LinkedIn Learning',
    date: '',
    credentialId: '4d359ab5c27883832a425b809216472c29e5b4be6074fa93db9b6388907612cc',
    link: 'https://www.linkedin.com/learning/certificates/4d359ab5c27883832a425b809216472c29e5b4be6074fa93db9b6388907612cc?trk=share_certificate',
    subCourses: []
  },
  {
    title: 'Data Science Foundations',
    issuer: 'Cisco Networking Academy',
    date: '',
    credentialId: '',
    link: 'https://www.credly.com/badges/5c310977-2322-4a27-a7ea-cd439edf6375/public_url',
    subCourses: []
  }
];


export const experienceData = [
  {
    company: 'Webyfy IoT Pvt. Ltd.',
    role: 'Frontend Developer',
    duration: '',
    description: 'Leveraging strong frontend expertise to build robust API integrations and scalable UI components. Proactively handled complex data structures and contributed to the development of intuitive interfaces, demonstrating a keen eye for data flow and visualization.',
  },
];

    
