import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiDownload, FiUser } from "react-icons/fi";
import styles from "./About.module.css";

const RESUME_URL = "https://resume.rauchrodrigues.in/";
const RESUME_PDF =
  "https://firebasestorage.googleapis.com/v0/b/socializeme-be1f4.appspot.com/o/Project%20Images%2FRauchRodrigues_Resume_05-05-2026.pdf?alt=media&token=b5a43a4b-6ae4-4d06-8f24-a461fd29bb7a";

function About() {
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(RESUME_PDF);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Rauch_Rodrigues_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(RESUME_PDF, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.about_page}>
      {/* ── Header ── */}
      <motion.div
        className={styles.page_header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.page_badge}>
          <FiUser /> About Me
        </span>
        <h1 className={styles.page_title}>My Resume</h1>
        <p className={styles.page_subtitle}>
          A snapshot of my skills, experience, and the projects I've worked on.
        </p>

        <div className={styles.cta_row}>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn_primary}
          >
            <FiExternalLink />
            Open Full Page
          </a>
          <a
            href={RESUME_PDF}
            className={styles.btn_secondary}
            onClick={handleDownload}
          >
            <FiDownload />
            Download PDF
          </a>
        </div>
      </motion.div>

      {/* ── Resume preview ── */}
      <motion.div
        className={styles.iframe_wrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className={styles.iframe_toolbar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.toolbar_url}>{RESUME_URL}</span>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.toolbar_open}
            title="Open in new tab"
          >
            <FiExternalLink />
          </a>
        </div>
        <iframe
          src={RESUME_URL}
          title="Resume"
          className={styles.resume_iframe}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export default About;
