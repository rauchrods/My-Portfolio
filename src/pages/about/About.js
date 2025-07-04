import React from "react";
import styles from "./About.module.css";

function redirectHandler(link) {
  window.open(link, "_blank", "noopener,noreferrer");
}

function About() {
  return (
    <>
      <div
        className={styles.about_sec}
        onClick={() => redirectHandler("https://resume.rauchrodrigues.in/")}
      >
        Click here to see Full Preview Resume
      </div>
      <div className={styles.iframe_container}>
        <iframe
          src="https://resume.rauchrodrigues.in/"
          title="Resume"
          className={styles.resume_iframe}
          loading="lazy"
        />
      </div>
    </>
  );
}

export default About;
