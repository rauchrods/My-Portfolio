import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { myProjects } from "../../data/data";
import { useState, useEffect } from "react";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const foundProject = myProjects.find((myproject) => myproject.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  const handlePrevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImage((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.projectCard}>
        <h1 className={styles.projectTitle}>{project.title}</h1>

        {project.images && project.images.length > 0 && (
          <div className={styles.projectImageSlider}>
            <div className={styles.projectImage}>
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
              />
            </div>

            <div className={styles.imageNavigation}>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrevImage}
              >
                &lt;
              </button>

              <div className={styles.imageIndicators}>
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentImage ? styles.active : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  ></span>
                ))}
              </div>

              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNextImage}
              >
                &gt;
              </button>
            </div>
          </div>
        )}

        <div className={styles.projectInfo}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Framework:</span>
            <span className={styles.value}>{project.type}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Description:</span>
            <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.projectLinks}>
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Visit Site
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
