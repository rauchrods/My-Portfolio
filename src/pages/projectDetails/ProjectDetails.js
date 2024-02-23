import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { myProjects } from "../../data/data";

function ProjectDetails() {
  const { id } = useParams();

  let project = {};
  myProjects.forEach((myproject) => {
    if (myproject.id === id) {
      project = { ...myproject };
    }
  });

  return (
    <div className={styles.project_details_page}>
      <p>id: {project.id}</p>
      <p>title: {project.title}</p>
      <p>Framework: {project.type}</p>
      <p>description: {project.description}</p>
      <p>websiteUrl: {project.websiteUrl}</p>
      <p>githubLink: {project.githubLink}</p>
    </div>
  );
}

export default ProjectDetails;
