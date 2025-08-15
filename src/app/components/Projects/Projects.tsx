"use client";

import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Projects</h3>
      <div className={styles.projects}>
        {PROJECTS.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.header}>
                <h4 className={styles.title}>{project.title}</h4>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Visit Site →
                </a>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ram Roofers",
    url: "https://ramroofers.com",
    description: "A professional roofing company website with modern design and contact forms for customer inquiries.",
    technologies: ["React", "Next.js", "CSS", "Contact Forms"],
  },
  {
    id: 2,
    title: "Pillacela Construction",
    url: "https://pillacela.com",
    description: "A personal portfolio and business website showcasing professional services and work experience.",
    technologies: ["React", "Next.js", "TypeScript", "Responsive Design"],
  },
  {
    id: 3,
    title: "Johnny Pillacela",
    url: "https://johnnypillacela.com",
    description: "Personal portfolio website highlighting software engineering skills, experience, and projects.",
    technologies: ["React", "Next.js", "TypeScript", "Modern UI"],
  },
];

type Project = {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: string[];
};
