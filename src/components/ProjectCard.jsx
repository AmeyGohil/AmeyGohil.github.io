import {
  LuBookOpen,
  LuCode,
  LuExternalLink,
  LuFileText,
  LuGithub,
} from "react-icons/lu";

export const ProjectCard = ({project}) => (
  <div className="glass-panel project-card">
    {project.publicationLink && (
      <a
        href={project.publicationLink}
        target="_blank"
        rel="noreferrer"
        className="external-link-icon publication-icon"
        title="View Research Publication"
        style={{right: "1.5rem"}}
      >
        <LuFileText size={20} />
      </a>
    )}

    {project.repoLink && (
      <a
        href={project.repoLink}
        target="_blank"
        rel="noreferrer"
        className="external-link-icon repo-icon"
        title="View Source Code on GitHub"
        style={{right: project.publicationLink ? "4rem" : "1.5rem"}}
      >
        <LuGithub size={20} />
      </a>
    )}

    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="external-link-icon deployment-icon"
        title="View Live Deployment"
        style={{
          right:
            project.publicationLink && project.repoLink
              ? "6.5rem"
              : project.publicationLink || project.repoLink
                ? "4rem"
                : "1.5rem",
        }}
      >
        <LuExternalLink size={20} />
      </a>
    )}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1rem",
      }}
    >
      {project.type === "Research" ? (
        <LuBookOpen size={20} style={{color: "var(--secondary)"}} />
      ) : (
        <LuCode size={20} className="accent" />
      )}
      <span
        style={{
          fontSize: "0.8rem",
          color:
            project.type === "Research" ? "var(--secondary)" : "var(--primary)",
          fontWeight: 700,
        }}
      >
        {project.type.toUpperCase()}
      </span>
    </div>

    <h3>{project.title}</h3>
    <p
      className="role"
      style={{
        fontSize: "0.9rem",
        fontFamily: "monospace",
        color: "var(--primary)",
        marginBottom: "1rem",
      }}
    >
      {project.role}
    </p>
    <p>{project.desc}</p>

    <div className="tag-container">
      {project.tags.map((tag) => (
        <span key={tag} className="tech-tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
);
