export const personalInfo = {
  name: "Akash Kunwar",
  title: "Software Development Engineer (SDET)",
  shortTitle: "SDET · Production Support · QA",
  email: "kunwarakash89@gmail.com",
  phone: "+91 8091843346",
  location: "Chandigarh, India",
  linkedin: "https://linkedin.com/in/akashkunwaronline",
  github: "https://github.com/akashkunwar", // Update with your actual GitHub
  summary:
    "Software Development Engineer with 2+ years of experience in production support, incident management, and enterprise application validation in a product-based environment. Skilled in Linux-based troubleshooting, SQL validation, REST API analysis, and root cause analysis for customer-facing applications. Track record of owning weekly production releases, driving ~40% defect reduction, and collaborating with cross-functional stakeholders across engineering, product, and business teams.",
  summaryPoints: [
    "2+ years in production support & enterprise application validation",
    "~40% reduction in production defect rate through proactive RCA",
    "98% on-time delivery across 25+ sprint releases",
    "Led validation for 300+ user stories across functional, regression & integration testing",
  ],
};

export const experience = [
  {
    id: 1,
    company: "DigiMantra Labs",
    role: "Software Development Engineer (SDET)",
    period: "May 2024 – Present",
    location: "Chandigarh, India",
    type: "Full-time",
    description:
      "Leading end-to-end production validation for weekly releases across customer-facing enterprise web and mobile applications for international clients.",
    achievements: [
      "Led end-to-end production validation for weekly releases across customer-facing enterprise web and mobile applications, preventing critical defects from reaching international end users.",
      "Drove production incident investigations through Linux log analysis and SQL data validation, contributing to a ~40% reduction in defect rate and faster mean-time-to-resolution.",
      "Performed root cause analysis (RCA) for post-deployment issues and communicated findings with clear resolution timelines to cross-functional stakeholders across product, engineering, and business teams.",
      "Validated 300+ user stories across sprint cycles via functional, regression, smoke, sanity, and integration testing — achieving 98% on-time delivery across 25+ sprint releases.",
      "Executed REST API validation using Postman, verifying request/response integrity, authentication flows, and service dependencies for production microservices.",
      "Supported deployment pipelines by collaborating with DevOps teams to verify environment stability and deployment readiness pre- and post-release.",
      "Managed defect lifecycle in JIRA across Agile sprint boards, ensuring prompt escalation and closure of production-impacting issues.",
    ],
    tech: ["Linux", "SQL", "REST APIs", "Postman", "JIRA", "Docker", "Kubernetes", "Git"],
  },
];

export const projects = [
  {
    id: 1,
    name: "EarthLink",
    subtitle: "Enterprise Telecom & ISP Platform",
    tag: "Primary",
    period: "Aug 2024 – Present",
    status: "Active",
    description:
      "Production support and quality assurance for a US-based enterprise ISP platform serving millions of customers across broadband, fiber, and mobile services.",
    achievements: [
      "Supported 40+ production releases for a US-based enterprise ISP serving millions of customers across broadband, fiber, and mobile services.",
      "Validated 300+ production user stories; maintained release success rate above 98% through structured pre-release smoke, regression, and sanity testing.",
      "Performed production incident triage and RCA via Linux log analysis and SQL queries, reducing recurring defects by ~40%.",
      "Conducted REST API validation across provisioning and account management microservices, preventing integration failures during deployments.",
      "Collaborated with 20+ cross-functional stakeholders to communicate incident impact, RCA findings, and release readiness.",
    ],
    tech: ["Linux", "SQL", "REST APIs", "Postman", "JIRA", "Agile"],
    category: "Telecom / ISP",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "VeriHire",
    subtitle: "AI-Powered Enterprise SaaS Recruitment Platform",
    tag: "",
    period: "2024",
    status: "Completed",
    description:
      "Comprehensive QA for an AI-driven recruitment platform, validating candidate screening workflows and intelligent shortlisting logic across multiple testing cycles.",
    achievements: [
      "Validated candidate screening workflows and AI-driven shortlisting logic across functional, regression, and UAT cycles for enterprise recruitment SaaS.",
      "Tested REST APIs for screening pipelines and interview scheduling modules, identifying critical integration defects pre-release.",
      "Collaborated with product and development teams in Agile sprints to triage production-reported defects and verify fixes prior to deployment.",
    ],
    tech: ["REST APIs", "Postman", "SQL", "JIRA", "Agile"],
    category: "HR / SaaS",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    name: "HyreWorks",
    subtitle: "Enterprise SaaS Employee & Project Management Platform",
    tag: "",
    period: "2024",
    status: "Completed",
    description:
      "End-to-end production support and release validation for an enterprise SaaS platform managing employee onboarding, project workflows, and role-based access control.",
    achievements: [
      "Delivered production support and release validation for employee onboarding, project workflows, and role-based access control modules.",
      "Executed SQL queries against MySQL databases to validate employee records, project hierarchies, and permission data ahead of production deployment.",
      "Triaged and resolved production incidents related to user permission conflicts, performing RCA and coordinating fixes with the engineering team.",
    ],
    tech: ["REST APIs", "SQL", "MySQL", "Postman", "JIRA", "Agile"],
    category: "HR / SaaS",
    color: "from-emerald-500 to-teal-600",
  },
];

export const skills = {
  languages: {
    label: "Languages",
    icon: "Code2",
    color: "from-blue-500 to-indigo-500",
    items: ["Java"],
  },
  databases: {
    label: "Databases",
    icon: "Database",
    color: "from-emerald-500 to-teal-500",
    items: ["SQL", "MySQL"],
  },
  os: {
    label: "Operating Systems",
    icon: "Terminal",
    color: "from-slate-500 to-gray-600",
    items: ["Linux"],
  },
  api: {
    label: "API & Tools",
    icon: "Globe",
    color: "from-orange-500 to-amber-500",
    items: ["REST APIs", "Postman"],
  },
  devops: {
    label: "DevOps",
    icon: "Container",
    color: "from-cyan-500 to-blue-500",
    items: ["Docker", "Kubernetes"],
  },
  vcs: {
    label: "Version Control",
    icon: "GitBranch",
    color: "from-gray-600 to-slate-700",
    items: ["Git", "GitHub"],
  },
  pm: {
    label: "Project Management",
    icon: "LayoutDashboard",
    color: "from-violet-500 to-purple-500",
    items: ["JIRA", "Agile", "Scrum"],
  },
  testing: {
    label: "Testing & Validation",
    icon: "CheckCircle",
    color: "from-green-500 to-emerald-500",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "UAT",
      "API Testing",
      "Mobile Testing",
      "Web Testing",
      "E2E Testing",
      "Release Validation",
      "Production Validation",
    ],
  },
  support: {
    label: "Support & Operations",
    icon: "HeadphonesIcon",
    color: "from-rose-500 to-pink-500",
    items: [
      "Incident Management",
      "Root Cause Analysis",
      "Log Analysis",
      "Production Support",
      "Troubleshooting",
      "Deployment Validation",
      "Stakeholder Management",
      "Defect Lifecycle",
    ],
  },
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Shoolini University",
    period: "2020 – 2024",
    grade: "CGPA: 8.4 / 10",
    location: "Himachal Pradesh, India",
    highlights: [
      "Graduated with Distinction (8.4 CGPA)",
      "Computer Science & Engineering specialization",
      "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems, Software Engineering",
    ],
  },
  {
    id: 2,
    degree: "AISSCE",
    field: "PCM with Informatics Practices",
    institution: "Army Public School",
    period: "Completed 2020",
    grade: "",
    location: "Jalandhar Cantt, India",
    highlights: [
      "Physics, Chemistry, Mathematics with Informatics Practices",
      "Strong foundation in mathematics and computer science fundamentals",
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "40+ Production Releases",
    description:
      "Supported over 40 production releases with consistent delivery of defect-free, customer-ready builds for an enterprise telecom platform serving millions of international users.",
    metric: "40+",
    metricLabel: "Releases Supported",
    icon: "Rocket",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "~40% Defect Reduction",
    description:
      "Contributed to approximately 40% reduction in production defects through proactive validation, thorough root cause analysis, and structured pre-release testing protocols.",
    metric: "~40%",
    metricLabel: "Defect Reduction",
    icon: "TrendingDown",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "98% On-Time Sprint Delivery",
    description:
      "Achieved 98% on-time delivery across 25+ sprint releases, consistently maintaining high release velocity without compromising product stability or quality standards.",
    metric: "98%",
    metricLabel: "On-Time Delivery",
    icon: "Target",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 4,
    title: "End-to-End Release Ownership",
    description:
      "Recognized internally for end-to-end ownership of release quality and driving cross-team resolution of critical production incidents with clear communication and urgency.",
    metric: "300+",
    metricLabel: "Stories Validated",
    icon: "Award",
    color: "from-orange-500 to-amber-600",
  },
];

export const stats = [
  { label: "Production Releases", value: "40+", icon: "Rocket" },
  { label: "User Stories Validated", value: "300+", icon: "CheckSquare" },
  { label: "Defect Reduction", value: "~40%", icon: "TrendingDown" },
  { label: "Sprint On-Time Rate", value: "98%", icon: "Target" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];
