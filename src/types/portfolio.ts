export type WindowType =
  | "character"
  | "quests"
  | "inventory"
  | "map"
  | "mail"
  | null;

// Non-null window id, used for the desktop multi-window manager.
export type DesktopWindowId = Exclude<WindowType, null>;

export interface DesktopWindowState {
  open: boolean;
  x: number | null;
  y: number | null;
  zIndex: number;
}

export type DesktopWindowsState = Record<DesktopWindowId, DesktopWindowState>;

export interface CharacterStat {
  label: string;
  value: number;
}

export interface QuestEntry {
  id: string;
  status: "completed" | "in-progress";
  title: string;
  role: string;
  period: string;
  newsUrl?: string;
}

export type ProjectStatus = "shipped" | "in-progress" | "archived";

export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  x: number;
  y: number;
  image?: string;
  description?: string;
}
