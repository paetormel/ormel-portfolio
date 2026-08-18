export const PROJECTS = [
  {
    title: "Pomodoro Focus App",
    summary:
      "A focus timer with integrated task tracking so sessions and to-dos stay in one place.",
    problem:
      "Focus work often breaks down when the timer and task list live in separate tools — users lose context switching between apps.",
    solution:
      "A single Pomodoro interface where users start timed focus sessions and manage tasks without leaving the app.",
    contribution:
      "Designed and built the full frontend — session timer logic, task list UI, layout, and responsive behavior across screen sizes.",
    engineering: [
      "Client-side state for focus sessions and task management",
      "Responsive UI with Tailwind CSS",
      "Next.js app structure for routing and deployment",
    ],
    outcome:
      "Staff and individual users can run timed focus blocks and track tasks from one workflow instead of juggling multiple tools.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    image: "pomodoro.webp",
    visitURL: "https://pomodoro-app-orcin-six.vercel.app/",
    repoURL: "https://github.com/paetormel/Pomodoro-app",
  },
  {
    title: "Ormel Portfolio",
    summary:
      "A personal site that presents my work, skills, and contact path in one place.",
    problem:
      "Scattered project links and résumé bullets don't show how I think through problems or what I actually built.",
    solution:
      "A portfolio that leads with project evidence — each with context on the problem, implementation, and source code.",
    contribution:
      "Designed the layout, wrote the content structure, and built every section including the project gallery and contact form.",
    engineering: [
      "React single-page layout with section-based navigation",
      "Framer Motion for scroll-triggered reveals",
      "Responsive layout and lazy-loaded images",
      "EmailJS integration for the contact form",
    ],
    outcome:
      "Visitors can scan my strongest work, read how each project was approached, and reach source code or live demos directly.",
    skills: ["React", "Tailwind CSS"],
    image: "portfolio.webp",
    visitURL: "https://ormel-portfolio-het7.vercel.app/",
    repoURL: "https://github.com/paetormel/ormel-portfolio",
  },
  {
    title: "AI Agency Landing",
    summary:
      "A marketing landing page that explains AI agency services in a clear, scannable layout.",
    problem:
      "Potential clients need to understand what an AI agency offers quickly — without wading through dense or unstructured content.",
    solution:
      "A structured landing page with defined sections for services, value proposition, and calls to action.",
    contribution:
      "Built the frontend layout, typography hierarchy, and reusable section components for the marketing page.",
    engineering: [
      "Component-based React structure for reusable sections",
      "Responsive layout and visual hierarchy with Tailwind CSS",
      "Axios setup for external data where needed",
    ],
    outcome:
      "The page presents agency services in a format that's easy to scan on mobile and desktop, ready for client-facing use.",
    skills: ["React", "Tailwind CSS", "Axios"],
    image: "ai-agency.webp",
    visitURL: "https://ormel-portfolio-het7.vercel.app/",
    repoURL: "https://github.com/paetormel/ai-agency",
  },
  {
    title: "SCConnect Student Portal",
    summary:
      "A unified web portal for students and educators to manage classroom workflows in one place.",
    problem:
      "Students and teachers switch between separate apps for communication, file sharing, and virtual classes — creating friction in daily academic work.",
    solution:
      "A consolidated portal that brings classroom management, communication, and resource access into a single application.",
    contribution:
      "Built frontend features for the portal interface, including layout, navigation, and API-connected views.",
    engineering: [
      "React component architecture for portal screens",
      "Axios for API communication with backend services",
      "Responsive UI for use across devices",
    ],
    outcome:
      "Users can access classroom tools, communication, and resources from one platform instead of multiple disconnected apps.",
    skills: ["React", "Tailwind CSS", "Axios"],
    image: "student-portal.png",
    visitURL: "https://student-portal-alpha-blush.vercel.app/",
    repoURL: "https://github.com/paetormel",
  },
];

export const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        title: "HTML5",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        title: "CSS3",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title: "React",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        title: "Vue.js",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        title: "Next.js",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        title: "Tailwind CSS",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        title: "Node.js",
      },
    ],
  },
  {
    category: "Data",
    skills: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        title: "PostgreSQL",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        title: "MySQL",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        title: "Git",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        title: "GitHub",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        title: "Figma",
      },
    ],
  },
];
