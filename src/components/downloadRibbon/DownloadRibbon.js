import React from "react";
import styles from "./DownloadRibbon.module.css";
import { FiDownload } from "react-icons/fi";

const DownloadRibbon = () => {
  return (
    <a
      href="./Rauch_Rodrigues_CV_3.1.pdf"
      target="_blank"
      rel="noreferrer"
      download={"Rauch_Rodrigues_Resume.pdf"}
      className={styles.ribbon}
    >
      <FiDownload className={styles.icon} />
      <span className={styles.text}>Download Resume</span>
    </a>
  );
};

export default DownloadRibbon;
