import Project from '../project/Project';
import styles from './DisplayProjects.module.css';

function DisplayProjects({title,projects}) {
  return (
    <div className={styles.projects_page}>
        <h2>{title}</h2>
        <div className={styles.projects_container}>
          {projects.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </div>
      </div>
  )
}

export default DisplayProjects