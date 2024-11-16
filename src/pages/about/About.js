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
        onClick={() => redirectHandler("./myresume.pdf")}
      >
        Click here to see my Resume
      </div>
    </>
  );
}

export default About;
