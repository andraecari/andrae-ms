import type { Project } from "../../types/portfolio";
import githubIcon from "../../assets/inventory/github.png";

interface ProjectDetailProps {
  project: Project;
}

// Isolated so project presentation (e.g. boarding-pass redesign) can change independently.
export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="project-detail">
      <div className="project-detail__main">
        <div className="project-detail__title-row">
          <h4 className="project-detail__name">{project.name}</h4>
          {project.badge && (
            <span className="project-detail__badge">{project.badge}</span>
          )}
        </div>
        {project.subtitle && (
          <p className="project-detail__subtitle">{project.subtitle}</p>
        )}
        <p className="project-detail__description">{project.description}</p>
        <ul className="project-detail__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.liveUrl && (
          <a
            className="project-detail__cta"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
      {project.githubUrl && (
        <a
          className="project-detail__github"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
        >
          <img
            className="project-detail__github-icon"
            src={githubIcon}
            alt=""
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}
