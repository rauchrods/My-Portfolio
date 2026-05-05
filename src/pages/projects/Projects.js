import React from "react";
import { motion } from "framer-motion";
import DisplayProjects from "../../components/displayprojects/DisplayProjects";
import { myProjects } from "../../data/data";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects_page}>
      <motion.div
        className={styles.page_header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.page_badge}>Portfolio</span>
        <h1 className={styles.page_title}>My Projects</h1>
        <p className={styles.page_subtitle}>
          A collection of things I've built — from full-stack apps to vanilla JS experiments.
        </p>
      </motion.div>

      <DisplayProjects
        title="FullStack / React Projects"
        projects={myProjects}
        type="react"
      />

      <div className={styles.section_divider} />

      <DisplayProjects
        title="Vanilla JS Projects"
        projects={myProjects}
        type="vanila"
      />
    </div>
  );
}

export default Projects;
