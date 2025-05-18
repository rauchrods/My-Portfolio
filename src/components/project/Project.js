import { useRef } from "react";
import Carousal from "../Carousal/Carousal";
import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";

function Project({ title, description, images, id, websiteUrl }) {
  const navigate = useNavigate();

  const projectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1 0.7"], // Start animation when element enters viewport (bottom), end when it's 70% through viewport
  });

  // Transform values based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [3, -2, 1, -1, 0.5, 0]
  );

  function websiteNavigateHandler() {
    window.open(websiteUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <motion.div
      className={styles.project_container}
      ref={projectRef}
      style={{
        opacity,
        scale,
        y,
        rotate,
      }}
    >
      {/* <img src={image} alt={title} /> */}
      <Carousal images={images} />
      <div className={styles.info_container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.btn_grp}>
          <button onClick={() => navigate(`/projects/${id}`)}>Details</button>
          <button onClick={websiteNavigateHandler}>Visit Site</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
