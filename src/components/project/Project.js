import Carousal from "../Carousal/Carousal";
import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";

function Project({ title, description, images, id, websiteUrl }) {
  const navigate = useNavigate();

  function websiteNavigateHandler() {
    window.open(websiteUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={styles.project_container}>
      {/* <img src={image} alt={title} /> */}
      <Carousal
        images={images}
      />
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
