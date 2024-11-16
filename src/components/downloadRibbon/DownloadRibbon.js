import React from "react";
import styles from "./DownloadRibbon.module.css";
import { FiDownload } from "react-icons/fi";

const DownloadRibbon = () => {
  return (
    <a
      href="./myresume.pdf"
      target="_blank"
      rel="noreferrer"
      download={"Rauch-Rodrigues-Resume.pdf"}
      className={styles.ribbon}
    >
      <FiDownload className={styles.icon} />
      <span className={styles.text}>Resume</span>
    </a>
  );
};

export default DownloadRibbon;
