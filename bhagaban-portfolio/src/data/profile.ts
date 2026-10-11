export type Tech = { name: string; icon: string };
export type TechGroup = { title: string; items: Tech[] };

const icon = (id: string) => `https://skillicons.dev/icons?i=${id}&theme=dark`;

export const profile = {
  name: "Bhagaban",
  username: "bablu-bd7",
  headline: "B.Tech CSE Student | Full-Stack Developer & AI Enthusiast",
  tagline: ["IDEAS. BUILT DIFFERENT.", "Tools change. Curiosity doesn't."],
  motto: "CODE / BUILD / INNOVATE",
  roles: ["FULL-STACK DEVELOPER", "CSE STUDENT", "AI ENTHUSIAST", "CREATIVE PROBLEM SOLVER"],
  github: "https://github.com/bablu-bd7",
  banner: "https://i.ibb.co/tps2hfZq/Chat-GPT-Image-Sep-13-2026-08-54-10-PM.png",
  avatar: "https://github.com/bablu-bd7.png",
  pass: {
    id: "BP-007",
    label: "BUILDER PASS",
    subtitle: "DIGITAL DEVELOPER IDENTITY",
    role: "Full-Stack Developer",
    education: "B.Tech Computer Science & Engineering",
    focus: "Web Development · Software Engineering · AI Exploration",
    status: "LEARN / BUILD / INNOVATE",
    footer: "BUILDING A BETTER TOMORROW",
  },
  // Social handles are unconfirmed: the brief listed conflicting URLs.
  // Set `confirmed: true` once you have verified each link.
  socials: [
    { id: "github", label: "GitHub", url: "https://github.com/bablu-bd7", confirmed: true },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bhagaban-dhupal-20b390399/",
      confirmed: false,
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/mr.bablu_010/",
      confirmed: false,
    },
  ],
};

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: icon("html") },
      { name: "CSS", icon: icon("css") },
      { name: "JavaScript", icon: icon("js") },
      { name: "TypeScript", icon: icon("ts") },
      { name: "React", icon: icon("react") },
    ],
  },
  {
    title: "Backend and programming",
    items: [
      { name: "Node.js", icon: icon("nodejs") },
      { name: "Python", icon: icon("py") },
      { name: "Firebase", icon: icon("firebase") },
    ],
  },
  {
    title: "Tools and environments",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "Linux", icon: icon("linux") },
      { name: "Android Studio", icon: icon("androidstudio") },
    ],
  },
];

const u = profile.username;
const statsTheme =
  "theme=tokyonight&bg_color=121212&title_color=00F5FF&text_color=E6EDF3&icon_color=7C3AED&hide_border=true";

export const statsUrls = {
  stats: `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&${statsTheme}`,
  streak: `https://streak-stats.demolab.com/?user=${u}&theme=tokyonight&background=121212&ring=00F5FF&fire=7C3AED&currStreakLabel=00F5FF&hide_border=true`,
  langs: `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&${statsTheme}`,
  activity: `https://github-readme-activity-graph.vercel.app/graph?username=${u}&bg_color=0B1728&color=00E5FF&line=168BFF&point=815BFF&area=true&area_color=168BFF&hide_border=true`,
  heatmap: `https://ghchart.rshah.org/00E5FF/${u}`,
  followers: `https://img.shields.io/github/followers/${u}?style=flat-square&logo=github&label=followers&color=168BFF&labelColor=0B1728`,
};
