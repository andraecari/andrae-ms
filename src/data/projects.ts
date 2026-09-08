import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Andrae's 2D Game Portfolio",
    subtitle: "You're on it right now!",
    description:
      "What started as a portfolio somehow turned into a tiny game. Walk around, hang out with Nuri, open some windows, check out where I've been, and learn a little about me along the way.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    status: "in-progress",
    icon: "🎮",
    githubUrl: "https://github.com/andraecari/andrae-ms",
  },
  {
    id: "team-scheduler-v2",
    name: "TeamScheduler V2",
    subtitle: "Because making schedules by hand sucks.",
    description:
      "Give it the people, the roles, and the rules, and let it figure out the rest. TeamScheduler generates musician schedules while juggling things like availability, role requirements, conflicts, and rotation history.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    status: "in-progress",
    icon: "📅",
    githubUrl: undefined,
  },
  {
    id: "homelab",
    name: "Homelab",
    subtitle: "My own little corner of the internet.",
    description:
      "A bunch of computers, containers, services, and questionable late-night configuration decisions. It's where I host things, break things, fix them, and learn how infrastructure actually works.",
    technologies: ["Docker", "Nginx", "Tailscale", "Linux"],
    status: "in-progress",
    icon: "🖥️",
    githubUrl: undefined,
  },
  {
    id: "betgenius",
    name: "BetGenius",
    subtitle: "Apparently the AI liked our bets.",
    description:
      "A betting recommendation system that learns from what people bet on and finds similar users to suggest what they might like next. Somehow this idea took first place at theScore's AI Hackathon!",
    technologies: ["Python", "TensorFlow", "Figma"],
    status: "completed",
    icon: "🧠",
    badge: "Hackathon Winner",
    githubUrl: "https://github.com/andraecari/BetGenius",
  },
  {
    id: "toothwise",
    name: "ToothWise",
    subtitle: "A dentist's filing cabinet, but better.",
    description:
      "Patients, employees, appointments, equipment... dental clinics have a lot going on. ToothWise puts all of it into one place so the clinic doesn't have to live inside a mountain of spreadsheets.",
    technologies: ["Python", "SQL", "Oracle", "Tkinter"],
    status: "completed",
    icon: "🦷",
    githubUrl: "https://github.com/andraecari/ToothWise",
  },
  {
    id: "shoporia",
    name: "Shoporia",
    subtitle: "Add to cart. You know the drill.",
    description:
      "A full online shopping experience with products, carts, checkout, order tracking, and even geolocation to find the closest store. Basically, we decided to build our own little e-commerce world.",
    technologies: ["JavaScript", "AngularJS", "HTML", "CSS", "PHP", "MySQL"],
    status: "completed",
    icon: "🛍️",
    githubUrl: "https://github.com/andraecari/630-labs/tree/main/Project2",
  },
  {
    id: "406-trades",
    name: "406-Trades",
    subtitle: "Lose fake money before losing real money.",
    description:
      "A paper-trading platform for buying and selling stocks with virtual cash while following real market data. All the fun of pretending you're on Wall Street, with considerably less financial damage.",
    technologies: ["Python", "Flask", "MongoDB", "Alpaca API"],
    status: "completed",
    icon: "📈",
    githubUrl: "https://github.com/406-Trades/406-Trades",
  },
  {
    id: "study-oppa",
    name: "StudyOppa",
    subtitle: "Your Discord server's study buddy.",
    description:
      "A Discord bot packed with Pomodoro timers, flashcards, weekly calendars, and to-do lists for students who need a little help actually getting stuff done. It also won RU Hacks 2022!",
    technologies: ["Python", "discord.py"],
    status: "completed",
    icon: "📚",
    badge: "Hackathon Winner",
    githubUrl: "https://github.com/andraecari/Study-Oppa",
  },
  {
    id: "war-elixir",
    name: "War",
    subtitle: "Learning Elixir the unnecessarily fun way.",
    description:
      "I wanted to learn Elixir, so instead of reading documentation all day I built the card game War. Shuffle the deck, deal the cards, and let functional programming decide who wins.",
    technologies: ["Elixir", "ExUnit"],
    status: "completed",
    icon: "🃏",
    githubUrl: "https://github.com/andraecari/war-elixir",
  },
];