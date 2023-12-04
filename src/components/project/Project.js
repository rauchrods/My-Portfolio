import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";

function Project({ title, description, image, id, websiteUrl }) {
  const navigate = useNavigate();

  function websiteNavigateHandler() {
    window.open(
      websiteUrl,
      "_blank" // <- This is what makes it open in a new window.
    );
  }

  return (
    <div className={styles.project_container}>
      <img src={image} alt="" />
      <div className={styles.info_container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.btn_grp}>
          <button onClick={() => navigate(`/projects/${id}`)}>Details</button>
          <button onClick={websiteNavigateHandler}>Visit Site</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
