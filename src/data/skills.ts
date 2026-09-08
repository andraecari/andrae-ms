import pythonIcon from "../assets/skills/python.png";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// TEMP: every skill reuses python.png as placeholder art until individual pixel-art icons exist.
// To swap one in later, just change that skill's `icon` import/value below.
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "TypeScript", icon: pythonIcon },
      { name: "JavaScript", icon: pythonIcon },
      { name: "SQL", icon: pythonIcon },
      { name: "Elixir", icon: pythonIcon },
      { name: "Java", icon: pythonIcon },
      { name: "C++", icon: pythonIcon },
      { name: "Perl", icon: pythonIcon },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "React", icon: pythonIcon },
      { name: "FastAPI", icon: pythonIcon },
      { name: "Flask", icon: pythonIcon },
      { name: "Phoenix", icon: pythonIcon },
      { name: "GraphQL", icon: pythonIcon },
      { name: "REST", icon: pythonIcon },
      { name: "PostgreSQL", icon: pythonIcon },
      { name: "Redis", icon: pythonIcon },
      { name: "Kafka", icon: pythonIcon },
      { name: "Node.js", icon: pythonIcon },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: pythonIcon },
      { name: "Docker", icon: pythonIcon },
      { name: "Kubernetes", icon: pythonIcon },
      { name: "ArgoCD", icon: pythonIcon },
      { name: "Datadog", icon: pythonIcon },
      { name: "Bugsnag", icon: pythonIcon },
      { name: "LaunchDarkly", icon: pythonIcon },
      { name: "Linux", icon: pythonIcon },
      { name: "Nginx", icon: pythonIcon },
      { name: "GitHub", icon: pythonIcon },
    ],
  },
];
