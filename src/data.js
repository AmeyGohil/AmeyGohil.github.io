// --- DATA SECTION ---

import {
  LuGithub,
  LuHeart,
  LuLinkedin,
  LuMail,
  LuTerminal,
} from "react-icons/lu";

export const PROJECTS = [
  {
    title: "I-Care Platform",
    role: "Full Stack & HCI Research | Prof. Alyssa Weakley",
    desc: "A cognitive support platform for Alzheimer's patients. Re-architected a legacy codebase into a scalable React+TS monorepo. Designed progressive disclosure workflows that reduced task anxiety and improved completion rates by ~63%.",
    tags: ["React", "TypeScript", "WebRTC", "HCI"],
    type: "Research",
    publicationLink: "https://doi.org/10.54941/ahfe1006972",
  },
  {
    title: "Red-tailed Hawk Motion Capture",
    role: "Research | Prof. Michael Neff & Dr. Christina Harvey",
    desc: "Processed OptiTrack mocap CSVs, converted quaternion series to Euler angles, applied Momentum-based motion optimization, and built Maya playback scenes to visualize hawk wing kinematics for biomechanical analysis.",
    tags: ["Python", "Motion Capture", "Momentum", "Maya"],
    type: "Research",
  },
  {
    title: "Security Analysis of Android Apps",
    role: "Research | Prof. G. Sivakumar (IITB)",
    desc: "Comprehensive security audit of the 'Aarogya Setu' contact tracing app. Utilized static & dynamic analysis (MobSF, Burp Suite) and reverse engineering to identify encryption flaws and data storage vulnerabilities on rooted devices.",
    tags: ["Security", "Reverse Engineering", "MobSF", "Burp Suite"],
    type: "Research",
    link: "https://ameygohil.github.io/WatchDogs-CS416/",
  },
  {
    title: "X-VL: Injecting External Knowledge in VQA",
    role: "Research | Prof. Hamed Pirsiavash",
    desc: "Engineered a late-fusion architecture to inject image captions into VQA pipelines (evaluated on DAQUAR), implemented multiple text–image encoder combinations, and improved contextual reasoning and F1 metrics.",
    tags: ["Vision", "VQA", "PyTorch", "Multimodal"],
    type: "Research",
    publicationLink: "https://doi.org/10.5120/ijca2025924397",
  },
  {
    title: "Unveiling C++ Security",
    role: "Research | Prof. Matt Bishop",
    desc: "Analyzed C++ vulnerability classes and mitigations, built the 'Damn Vulnerable C++ Program' demo, and applied static/dynamic tooling (AddressSanitizer, Semgrep, SonarQube) to harden real-world codebases.",
    tags: ["Security", "C++", "Static Analysis", "AddressSanitizer"],
    type: "Research",
    repoLink: "https://github.com/AmeyGohil/Damn_Vulnerable_CPP_Program",
  },
  {
    title: "NPM Ecosystem Analysis",
    role: "Empirical Research | Prof. Vladmir Filkov",
    desc: "Large-scale analysis of 30,000+ npm packages. Built a custom Python mining pipeline to extract 33 metrics and developed a novel 'Threat Score' validated via ANOVA (p < 10⁻⁸) to identify ecosystem risks.",
    tags: ["Python", "Data Mining", "Statistics", "Security"],
    type: "Research",
  },
  {
    title: "Travelling Salesman Problem (Parallel Implementations)",
    role: "Research | Prof. S. Gopalakrishnan (IIT Bombay)",
    desc: "Developed four parallel implementations (OpenMP, MPI, hybrid OpenMP-MPI, CUDA) of a TSP solver, benchmarked speedup, efficiency, and Karp-Flatt metrics, and evaluated performance on a high-performance cluster.",
    tags: ["HPC", "OpenMP", "MPI", "CUDA"],
    type: "Research",
    publicationLink: "https://doi.org/10.48550/arXiv.2205.14352",
  },
  {
    title: "Vokab / Mason",
    role: "Member of Technical Staff",
    desc: "Built React applications used by 8,000+ global brands. Led a massive TypeScript migration that boosted developer productivity by ~40% and reduced runtime crashes by ~60%.",
    tags: ["Production Engineering", "Scalability", "GraphQL"],
    type: "Industry",
  },
  {
    title: "SlitherLink",
    role: "React Engineering",
    desc: "A clean, aesthetic implementation of the logic puzzle game. Built to master complex React state management, hooks optimization, and recursive backtracking algorithms.",
    tags: ["React", "Algorithms", "Game Dev"],
    type: "Project",
    link: "https://ameygohil.github.io/slither-link/",
  },
];

export const SKILLS = [
  "React & TypeScript",
  "Node.js & Express",
  "Python",
  "PyDriller",
  "WebRTC & Sockets",
  "HCI & UX Research",
  "System Architecture",
];

export const SOCIAL_LINKS = [
  {Icon: LuGithub, href: "https://github.com/AmeyGohil"},
  {Icon: LuLinkedin, href: "https://linkedin.com/in/ameygohil"},
  {Icon: LuMail, href: "mailto:amey23399@gmail.com"},
];

export const PHILOSOPHY_ITEMS = [
  {
    Icon: LuTerminal,
    title: "Engineering Rigor",
    desc: "Scalable architectures, type safety, and efficient algorithms.",
    color: "accent",
  },
  {
    Icon: LuHeart,
    title: "Human Centric",
    desc: "Technology must be accessible. I design for cognitive load and inclusivity.",
    color: "var(--secondary)",
  },
];

export const TIMELINE_ITEMS = [
  {
    year: "2023 - Present",
    title: "Master of Science, CS",
    org: "UC Davis",
    desc: "Specializing in HCI & Systems. Graduate Researcher at the Dept. of Neurology. Winner of UC Davis Ideas Competition and NSF I-Corps Trainee.",
    dotColor: null,
  },
  {
    year: "2021 - 2023",
    title: "Member of Technical Staff",
    org: "Vokab Technologies / Mason",
    desc: "Full stack production engineering. Led critical TypeScript migrations and built features serving thousands of users.",
    dotColor: "var(--secondary)",
  },
  {
    year: "2017 - 2021",
    title: "B.Tech, Mechanical Engineering",
    org: "IIT Bombay",
    desc: "The foundation. Learned to model complex systems. Elected Mess Secretary (400+ residents) and Web Manager for the Entrepreneurship-Cell of IITB (4M+ annual hits on main website).",
    dotColor: "var(--secondary)",
  },
];

export const NAV_LINKS = [
  {href: "#about", label: "About"},
  {href: "#work", label: "Work"},
  {href: "#journey", label: "Journey"},
  {href: "#contact", label: "Contact"},
];
