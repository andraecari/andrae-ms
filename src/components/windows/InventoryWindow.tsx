import { useState } from "react";
import { projects } from "../../data/projects";
import { skillCategories } from "../../data/skills";
import GameWindow from "./GameWindow";
import type { WindowDesktopProps } from "./GameWindow";
import ProjectDetail from "./ProjectDetail";
import inventoryIcon from "../../assets/hud/inventory.png";
import skillsCategoryIcon from "../../assets/inventory/inventory-skills.png";
import projectsCategoryIcon from "../../assets/inventory/inventory-projects.png";

interface InventoryWindowProps {
  onClose: () => void;
  desktop?: WindowDesktopProps;
}

type InventoryCategory = "skills" | "projects";

const CATEGORIES: { id: InventoryCategory; label: string; icon: string }[] = [
  { id: "skills", label: "Skills", icon: skillsCategoryIcon },
  { id: "projects", label: "Projects", icon: projectsCategoryIcon },
];

export default function InventoryWindow({ onClose, desktop }: InventoryWindowProps) {
  const [activeCategory, setActiveCategory] =
    useState<InventoryCategory>("skills");

  return (
    <GameWindow
      title="Inventory"
      icon={inventoryIcon}
      onClose={onClose}
      titleId="inventory-window-title"
      size="large"
      desktop={desktop}
    >
      <div className="inventory-window">
        <div className="inventory-categories">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={activeCategory === category.id}
              aria-controls={`inventory-panel-${category.id}`}
              className={`inventory-category-button${
                activeCategory === category.id
                  ? " inventory-category-button--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <img
                className="inventory-category-button__icon"
                src={category.icon}
                alt=""
                aria-hidden="true"
              />
              {category.label}
            </button>
          ))}
        </div>

        {activeCategory === "skills" && (
          <div id="inventory-panel-skills" className="inventory-panel">
            {skillCategories.map((group) => (
              <section key={group.category} className="skill-group">
                <h4 className="skill-group__heading">{group.category}</h4>
                <ul className="skill-grid">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span className="skill-item__slot">
                        <img
                          className="skill-item__icon"
                          src={skill.icon}
                          alt=""
                          aria-hidden="true"
                        />
                      </span>
                      <span className="skill-item__name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        {activeCategory === "projects" && (
          <div id="inventory-panel-projects" className="inventory-panel">
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.id} className="project-list__item">
                  <ProjectDetail project={project} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </GameWindow>
  );
}
