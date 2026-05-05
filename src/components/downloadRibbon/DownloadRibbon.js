import React, { useState } from "react";
import styles from "./DownloadRibbon.module.css";
import { FiDownload, FiCheck } from "react-icons/fi";

const DownloadRibbon = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <a
      href="https://firebasestorage.googleapis.com/v0/b/socializeme-be1f4.appspot.com/o/Project%20Images%2FRauchRodrigues_Resume_05-05-2026.pdf?alt=media&token=b5a43a4b-6ae4-4d06-8f24-a461fd29bb7a"
      target="_blank"
      rel="noopener noreferrer"
      download="Rauch_Rodrigues_Resume.pdf"
      className={`${styles.ribbon} ${downloaded ? styles.downloaded : ""}`}
      onClick={handleDownload}
    >
      <span className={styles.icon_wrap}>
        {downloaded ? <FiCheck /> : <FiDownload />}
      </span>
      <span className={styles.text}>
        {downloaded ? "Downloaded!" : "Download Resume"}
      </span>
    </a>
  );
};

export default DownloadRibbon;
