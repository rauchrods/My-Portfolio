import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./About.module.css";

function redurectHandler(link) {
  window.open(link, "_blank");
}

function About() {
  return (
    <>
      <Navbar />
      <div
        className={styles.about_sec}
        onClick={() =>
          redurectHandler(
            "https://drive.google.com/file/d/1pweFIzz1-VDNocH_ANUwgVdxC15rIEor/view"
          )
        }
      >
        Click here to see my Resume
      </div>
      <Footer />
    </>
  );
}

export default About;
