import Project from "../project/Project";
import styles from "./DisplayProjects.module.css";

function DisplayProjects({ title, projects, type }) {
  const filtered = projects.filter((p) => p.type === type);

  return (
    <div className={styles.projects_page}>
      <div className={styles.section_header}>
        <h2 className={styles.section_title}>{title}</h2>
        <span className={styles.count_badge}>{filtered.length} projects</span>
      </div>
      <div className={styles.projects_container}>
        {filtered.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default DisplayProjects;
