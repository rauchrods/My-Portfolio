import Project from "../project/Project";
import styles from "./DisplayProjects.module.css";

function DisplayProjects({ title, projects, type }) {
  return (
    <div className={styles.projects_page}>
      <h2>{title}</h2>
      <div className={styles.projects_container}>
        {projects.map(
          (project) =>
            project.type === type && <Project {...project} key={project.id} />
        )}
      </div>
    </div>
  );
}

export default DisplayProjects;
